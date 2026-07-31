import { collection, addDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from './firebase';
import { RegistrationWithPaperSchema } from '@/schema/registration-schema';

export interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  affiliation: string;
  country: string;
  category: string;
  daysAttending: string;
  presentingPaper: boolean;
  paperTitle?: string;
  paperAbstract?: string;
  uploadedFile?: File | null;
  paymentProofFile?: File | null;
}

export interface RegistrationResult {
  success: boolean;
  message: string;
  error?: string;
  details?: any;
  userId?: string;
}

export async function registerUser(data: RegistrationData): Promise<RegistrationResult> {
  try {
    const validatedData = RegistrationWithPaperSchema.parse(data);

    if (!auth) {
      return {
        success: false,
        message: 'Registration failed',
        error: 'Authentication service is not available. Please refresh the page.',
      };
    }

    if (!data.paymentProofFile) {
      return {
        success: false,
        message: 'Registration failed',
        error: 'Payment screenshot is required to complete registration.',
      };
    }

    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        validatedData.email,
        validatedData.password
      );
    } catch (authError: any) {
      if (authError.code === 'auth/email-already-in-use') {
        return {
          success: false,
          message: 'Registration failed',
          error: 'An account with this email already exists. Please use a different email or try logging in.',
        };
      } else if (authError.code === 'auth/weak-password') {
        return {
          success: false,
          message: 'Registration failed',
          error: 'Password is too weak. Please use a stronger password.',
        };
      } else if (authError.code === 'auth/invalid-email') {
        return {
          success: false,
          message: 'Registration failed',
          error: 'Invalid email address format.',
        };
      }
      throw authError;
    }

    const userId = userCredential.user.uid;

    let paymentProofFields: Record<string, unknown> = {};
    if (data.paymentProofFile) {
      const timestamp = Date.now();
      const safeName = data.paymentProofFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const fileName = `payment_proof_${timestamp}_${safeName}`;
      const storageRef = ref(storage, `payment-proofs/${userId}/${fileName}`);
      await uploadBytes(storageRef, data.paymentProofFile);
      const fileUrl = await getDownloadURL(storageRef);
      paymentProofFields = {
        paymentProofUrl: fileUrl,
        paymentProofFileName: data.paymentProofFile.name,
        paymentProofStorageFileName: fileName,
        paymentProofUploadedAt: serverTimestamp(),
      };
    }

    const sharedFields = {
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      affiliation: validatedData.affiliation,
      country: validatedData.country,
      category: validatedData.category,
      role: 'user',
      paymentMethod: 'manual',
      payment_confirmed: false,
      status: 'pending',
      ...paymentProofFields,
    };

    await setDoc(doc(db, 'users', userId), {
      uid: userId,
      ...sharedFields,
      createdAt: serverTimestamp(),
    });

    await addDoc(collection(db, 'registrations'), {
      userId,
      daysAttending: validatedData.daysAttending,
      presentingPaper: false,
      registeredAt: serverTimestamp(),
      ...sharedFields,
    });

    // Sign out immediately — login is allowed only after admin payment verification
    await signOut(auth);

    return {
      success: true,
      message:
        'Registration successful! Your payment screenshot has been submitted. You can log in after an admin verifies your payment.',
      userId,
    };
  } catch (error: any) {
    console.error('Registration error:', error);

    if (error.name === 'ZodError') {
      return {
        success: false,
        message: 'Validation error',
        error: 'Please check all required fields',
        details: error.errors,
      };
    }

    if (error.code?.startsWith('auth/')) {
      return {
        success: false,
        message: 'Authentication failed',
        error: error.message || 'An authentication error occurred',
      };
    }

    return {
      success: false,
      message: 'Registration failed',
      error: error.message || 'An unexpected error occurred',
    };
  }
}
