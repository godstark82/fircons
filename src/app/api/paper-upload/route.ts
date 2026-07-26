// pages/api/paper-upload.js
import { NextRequest, NextResponse } from 'next/server';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { LegacyRegistrationWithPaperSchema } from "@/schema/legacy-registration-schema"

export async function POST(request: any) {
  try {
    const formData = await request.formData();

    const data = {
      fullName: formData.get('fullName') ?? "",
      email: formData.get('email') ?? "",
      phone: formData.get('phone') ?? "",
      affiliation: formData.get('affiliation') ?? "",
      country: formData.get('country') ?? "",
      category: formData.get('category') ?? "",
      daysAttending: formData.get('daysAttending') ?? "",
      presentingPaper: formData.get('presentingPaper') === 'true',
      paymentIntentId: formData.get('paymentIntentId') ?? "",
      paperTitle: formData.get('paperTitle') ?? "",
      paperAbstract: formData.get('paperAbstract') ?? "",
      uploadedFile: null,
    };

    const fileRaw = formData.get('uploadedFile');
    data.uploadedFile = (fileRaw instanceof File) ? fileRaw : null;

    const validatedData = LegacyRegistrationWithPaperSchema.parse(data);


    // If presenting paper, handle upload and Firestore save with paper details
    if (validatedData.presentingPaper) {
      if (!fileRaw) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }

      // Convert file to buffer for uploadBytes
      const bytes = await fileRaw.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload file to Firebase Storage
      const storageRef = ref(storage, `papers/${fileRaw.name}`);
      await uploadBytes(storageRef, buffer);
      const fileUrl = await getDownloadURL(storageRef);

      // Prepare paper data with registration info
      const paperData = {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        affiliation: validatedData.affiliation,
        country: validatedData.country,
        category: validatedData.category,
        daysAttending: validatedData.daysAttending,
        presentingPaper: validatedData.presentingPaper,
        paymentIntentId: validatedData.paymentIntentId,

        paperTitle: validatedData.paperTitle,
        paperAbstract: validatedData.paperAbstract,
        fileUrl,
        uploadedAt: serverTimestamp(),
        uploadedFileName: fileRaw.name,
      };

      await addDoc(collection(db, 'papers'), paperData);

    } else {
      // For registration without paper:
      // Save registration data to a separate collection or same with null paper info
      const registrationData = {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        affiliation: validatedData.affiliation,
        country: validatedData.country,
        category: validatedData.category,
        daysAttending: validatedData.daysAttending,
        presentingPaper: validatedData.presentingPaper,
        paymentIntentId: validatedData.paymentIntentId,
        registeredAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'registrations'), registrationData);
    }

    return NextResponse.json({ message: validatedData.presentingPaper ? 'Paper uploaded successfully' : 'Registration successful' }, { status: 200 });

  } catch (error) {
    console.error('Upload error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json({
        error: 'Validation error',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
