'use client'
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Upload, Mail } from "lucide-react";
import { CONSTANTS } from "@/lib/constants";

const categoryTable = [
  ["Student (Poster Presentation) IILM Only", "₹500/-"],
  ["Student (Poster Presentation) Non-IILM", "₹750/-"],
  ["Research Scholars/Faculty – IILM Only (Oral/Poster)", "₹1500/-"],
  ["Research Scholars/Faculty – Non-IILM (Oral/Poster)", "₹2000/-"],
  ["Research Scholars/Faculty – IILM Only (Oral/Poster + Publication in Peer Reviewed Journals)", "₹2500/-"],
  ["Research Scholars/Faculty – Non-IILM (Oral/Poster + Publication in Peer Reviewed Journals)", "₹3000/-"],
  ["Research Scholars/Faculty – IILM Only (Oral/Poster + Publication in Proceedings)", "₹1500/- + APC Charges"],
  ["Research Scholars/Faculty – Non-IILM (Oral/Poster + Publication in Proceedings)", "₹2000/- + APC Charges"],
  ["Research Scholars/Faculty – IILM Only (Oral/Poster + Publication in Scopus Journals)", "₹1500/- + APC Charges"],
  ["Research Scholars/Faculty – Non-IILM (Oral/Poster + Publication in Scopus Journals)", "₹2000/- + APC Charges"],
];

const bankDetails = [
  ["Beneficiary Name", "IILM UNIVERSITY"],
  ["Account Number", "10094813150"],
  ["IFSC Code", "IDFB0020154"],
  ["SWIFT Code", "IDFBINBBMUM"],
  ["Bank Name", "IDFC FIRST BANK"],
  ["Branch", "GREATER NOIDA BRANCH"],
];


export default function UploadPaperPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    affiliation: "",
    country: "",
    category: "",
    daysAttending: "",
    presentingPaper: false,
    paymentIntentId: "",
    paperTitle: "",
    paperAbstract: "",
    uploadedFile: null,
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, uploadedFile: e.target.files[0] });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setForm({ ...form, presentingPaper: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const formDataPayload = new FormData();
      formDataPayload.append("fullName", form.fullName);
      formDataPayload.append("email", form.email);
      formDataPayload.append("phone", form.phone);
      formDataPayload.append("affiliation", form.affiliation);
      formDataPayload.append("country", form.country);
      formDataPayload.append("category", form.category);
      formDataPayload.append("daysAttending", form.daysAttending);
      formDataPayload.append("presentingPaper", form.presentingPaper ? "true" : "false");
      formDataPayload.append("paymentIntentId", form.paymentIntentId);

      if (form.presentingPaper) {
        formDataPayload.append("paperTitle", form.paperTitle);
        formDataPayload.append("paperAbstract", form.paperAbstract);
        if (form.uploadedFile) {
          formDataPayload.append("uploadedFile", form.uploadedFile, form.uploadedFile.name);
        }
      }

      const response = await fetch("/api/paper-upload", {
        method: "POST",
        body: formDataPayload,
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Submission failed");
        setLoading(false);
        return;
      }

      setStatus(result.message || "Submission successful");
      setShowModal(true);

      // Reset form after successful submission
      setForm({
        fullName: "",
        email: "",
        phone: "",
        affiliation: "",
        country: "",
        category: "",
        daysAttending: "",
        presentingPaper: false,
        paymentIntentId: "",
        paperTitle: "",
        paperAbstract: "",
        uploadedFile: null,
      });
    } catch (error) {
      setStatus("Unexpected error occurred, please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Bank details */}
        <Card className="border-none shadow-medium overflow-hidden">
          <CardHeader className="bg-linear-to-r from-primary to-primary/90 text-white">
            <h2 className="text-2xl font-bold">Bank Details</h2>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 bg-muted/50">
                  </tr>
                </thead>
                <tbody>
                  {bankDetails.map(([label, value], idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-3 py-1.5">{label}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-3 py-3 bg-muted/30 border-t border-gray-300">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">APC:</span> Article
                Processing Charges, applicable where indicated.
              </p>
            </div>
          </CardContent>
        </Card>
        {/* Registration Fees */}
        <Card className="border-none shadow-medium overflow-hidden">
          <CardHeader className="bg-linear-to-r from-primary to-primary/90 text-white">
            <h2 className="text-2xl font-bold">Registration Categories & Fees</h2>
            <p className="text-primary-foreground/80 text-sm">
              Choose the category that applies to you
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 bg-muted/50">
                    <th className="px-3 py-2 text-left font-semibold">Category</th>
                    <th className="px-3 py-2 text-right font-semibold">Amount (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTable.map(([cat, amt], idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-3 py-1.5">{cat}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">
                        {amt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-3 py-3 bg-muted/30 border-t border-gray-300">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">APC:</span> Article
                Processing Charges, applicable where indicated.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card className="border-none shadow-medium" id="submit-paper">
          <CardHeader className="bg-linear-to-r from-primary to-primary/90 text-white">
            <h2 className="text-2xl font-bold">Registration & Paper Submission</h2>
            <p className="text-primary-foreground/80">
              Fill out the form below to register for the conference
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Dr. John Doe"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john.doe@university.edu"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliation">Affiliation *</Label>
                    <Input
                      id="affiliation"
                      name="affiliation"
                      value={form.affiliation}
                      onChange={handleChange}
                      placeholder="University/Institution Name"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="India"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Registration Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categoryTable.map(([cat]) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Conference Details */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-foreground">
                  Conference Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="daysAttending">Days Attending *</Label>
                    <Input
                      id="daysAttending"
                      name="daysAttending"
                      value={form.daysAttending}
                      onChange={handleChange}
                      placeholder="All days / Day 1, Day 2"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paymentIntentId">Payment Reference ID *</Label>
                    <Input
                      id="paymentIntentId"
                      name="paymentIntentId"
                      value={form.paymentIntentId}
                      onChange={handleChange}
                      placeholder="Transaction ID"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Paper Submission Toggle */}
              <div className="flex items-center space-x-3 p-4 border rounded-lg bg-muted/30">
                <Checkbox
                  id="presentingPaper"
                  checked={form.presentingPaper}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label
                  htmlFor="presentingPaper"
                  className="text-base font-medium cursor-pointer"
                >
                  I wish to present/upload a paper
                </Label>
              </div>

              {/* Paper Details (Conditional) */}
              {form.presentingPaper && (
                <div className="space-y-4 pt-4 border-t border-primary/20 animate-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Paper Details
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paperTitle">Paper Title *</Label>
                    <Input
                      id="paperTitle"
                      name="paperTitle"
                      value={form.paperTitle}
                      onChange={handleChange}
                      placeholder="Enter your paper title"
                      required={form.presentingPaper}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paperAbstract">Abstract *</Label>
                    <Textarea
                      id="paperAbstract"
                      name="paperAbstract"
                      value={form.paperAbstract}
                      onChange={handleChange}
                      placeholder="Enter your paper abstract (150-300 words)"
                      required={form.presentingPaper}
                      className="min-h-[150px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="uploadedFile">Upload Paper (DOCX) *</Label>
                    <Input
                      id="uploadedFile"
                      name="uploadedFile"
                      type="file"
                      onChange={handleFileChange}
                      accept=".docx"
                      required={form.presentingPaper}
                      className="cursor-pointer file:mr-4 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer hover:file:bg-primary/90 transition-all duration-200"
                    />
                  </div>
                </div>
              )}

              {/* Technical Support Notice */}
              <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm">
                  <span className="font-semibold">Technical Support:</span> If you
                  face any issues during submission, please email your paper
                  directly to{" "}
                  <a
                    href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {CONSTANTS.SUPPORT_EMAIL}
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="min-w-[200px] shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      {form.presentingPaper ? "Submitting..." : "Registering..."}
                    </span>
                  ) : form.presentingPaper ? (
                    "Submit Paper"
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </div>

              {status && (
                <div className="text-center p-4 bg-primary/10 border border-primary/20 rounded-lg animate-in fade-in duration-300">
                  <p className="text-primary font-semibold">{status}</p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Submission Confirmed!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <p className="text-center text-muted-foreground">
              {form.presentingPaper
                ? `Your paper has been successfully submitted to ${CONSTANTS.CONFERENCE_ABBR}, hosted by ${CONSTANTS.COLLAGE_NAME}`
                : `Your registration has been received for ${CONSTANTS.CONFERENCE_ABBR}, hosted by ${CONSTANTS.COLLAGE_NAME}`}
            </p>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">What's Next?</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>You will receive a confirmation email shortly</li>
                {form.presentingPaper && (
                  <li>Paper review results will be sent by September 15, 2025</li>
                )}
                <li>Check your email regularly for updates</li>
              </ul>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              We appreciate your{" "}
              {form.presentingPaper ? "contribution" : "interest"} and look
              forward to {form.presentingPaper ? "reviewing your work" : "seeing you at the event"}.
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

