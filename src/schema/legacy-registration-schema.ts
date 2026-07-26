import { z } from "zod";

/** Legacy schema for /api/paper-upload (combined registration + optional paper). */
export const LegacyRegistrationWithPaperSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  affiliation: z.string().min(1),
  country: z.string().min(1),
  category: z.string().min(1),
  daysAttending: z.string().min(1),
  presentingPaper: z.boolean(),
  paymentIntentId: z.string().min(1),
  paperTitle: z.string().optional(),
  paperAbstract: z.string().optional(),
  uploadedFile: z.instanceof(File).optional().nullable(),
})
.superRefine((data, ctx) => {
  if (data.presentingPaper) {
    if (!data.paperTitle || data.paperTitle.trim().length === 0) {
      ctx.addIssue({
        path: ["paperTitle"],
        code: z.ZodIssueCode.custom,
        message: "Paper title is required when presenting a paper."
      });
    }
    if (!data.paperAbstract || data.paperAbstract.trim().length === 0) {
      ctx.addIssue({
        path: ["paperAbstract"],
        code: z.ZodIssueCode.custom,
        message: "Paper abstract is required when presenting a paper."
      });
    }
    if (!data.uploadedFile) {
      ctx.addIssue({
        path: ["uploadedFile"],
        code: z.ZodIssueCode.custom,
        message: "File upload is required when presenting a paper."
      });
    }
  }
});
