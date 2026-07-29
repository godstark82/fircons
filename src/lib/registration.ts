import { collection, addDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from './firebase';
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
  payment?: {
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
    amountPaise: number;
    currency: string;
  };
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

    if (!data.payment?.razorpayPaymentId) {
      return {
        success: false,
        message: 'Registration failed',
        error: 'Payment is required to complete registration.',
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

    const paymentFields = {
      paymentIntentId: data.payment.razorpayPaymentId,
      razorpayOrderId: data.payment.razorpayOrderId,
      razorpayPaymentId: data.payment.razorpayPaymentId,
      razorpaySignature: data.payment.razorpaySignature,
      paymentAmountPaise: data.payment.amountPaise,
      paymentCurrency: data.payment.currency,
      payment_confirmed: true,
      payment_confirmed_at: serverTimestamp(),
      paymentMethod: 'razorpay',
    };

    await setDoc(doc(db, 'users', userId), {
      uid: userId,
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      affiliation: validatedData.affiliation,
      country: validatedData.country,
      category: validatedData.category,
      role: 'user',
      createdAt: serverTimestamp(),
      ...paymentFields,
    });

    const registrationData: any = {
      userId,
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      affiliation: validatedData.affiliation,
      country: validatedData.country,
      category: validatedData.category,
      daysAttending: validatedData.daysAttending,
      presentingPaper: false,
      role: 'user',
      registeredAt: serverTimestamp(),
      ...paymentFields,
    };

    await addDoc(collection(db, 'registrations'), registrationData);

    return {
      success: true,
      message: 'Registration and payment successful! You can now log in to your user panel to submit papers and manage your submissions.',
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
