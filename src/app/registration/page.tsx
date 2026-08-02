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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Mail,
  User,
  Phone,
  Building2,
  Globe,
  Calendar,
  FileText,
  AlertCircle,
  Loader2,
  CheckCircle,
  XCircle,
  Lock,
  Eye,
  EyeOff,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { CONSTANTS } from "@/lib/constants";
import { registerUser, type RegistrationData } from "@/lib/registration";
import { cn } from "@/lib/utils";
import { getRegistrationFeeInr } from "@/lib/fees";

const categories = [
  "Research Scholar",
  "Faculty/Industry Person",
  "Attendee",
];

const feeTable = [
  {
    category: "Research Scholar",
    earlyBirdIndian: "1500 INR",
    earlyBirdForeign: "25 USD",
    lateIndian: "1500 INR",
    lateForeign: "30 USD",
  },
  {
    category: "Faculty/Industry Person",
    earlyBirdIndian: "1500 INR",
    earlyBirdForeign: "35 USD",
    lateIndian: "1500 INR",
    lateForeign: "40 USD",
  },
  {
    category: "Attendee",
    earlyBirdIndian: "500 INR",
    earlyBirdForeign: "10 USD",
    lateIndian: "500 INR",
    lateForeign: "10 USD",
  },
];

const bankDetails = [
  ["Beneficiary Name", "SHANTI  EDUCATIONAL RESEARCH  FOUNDATION"],
  ["Account Number", "071288700000576"],
  ["IFSC Code", "YESB0000712"],
  ["Bank Name", "Yes Bank"],
  ["Branch", "Vidhyadhar Nagar, Jaipur"],
];

interface FormErrors {
  [key: string]: string;
}

export default function UploadPaperPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    affiliation: "",
    country: "",
    category: "",
    daysAttending: "",
  });
  const [paymentProofFile, setPaymentProofFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateField = (name: string, value: string | boolean | File | null): string => {
    switch (name) {
      case "fullName":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Full name is required";
        }
        return "";
      case "email":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Email is required";
        }
        if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        return "";
      case "password":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Password is required";
        }
        if (typeof value === "string" && value.length < 8) {
          return "Password must be at least 8 characters long";
        }
        return "";
      case "confirmPassword":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Please confirm your password";
        }
        if (typeof value === "string" && value !== form.password) {
          return "Passwords do not match";
        }
        return "";
      case "phone":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Phone number is required";
        }
        if (typeof value === "string" && value.replace(/\D/g, "").length < 7) {
          return "Please enter a valid phone number";
        }
        return "";
      case "affiliation":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Affiliation is required";
        }
        return "";
      case "country":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Country is required";
        }
        return "";
      case "category":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Registration category is required";
        }
        return "";
      case "daysAttending":
        if (!value || (typeof value === "string" && value.trim().length === 0)) {
          return "Days attending is required";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allFields = [
      "fullName",
      "email",
      "password",
      "confirmPassword",
      "phone",
      "affiliation",
      "country",
      "category",
      "daysAttending",
    ] as const;
    const newTouched: { [key: string]: boolean } = {};
    const newErrors: FormErrors = {};

    allFields.forEach((field) => {
      newTouched[field] = true;
      const value = form[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      setStatus(firstError || "Please fix the errors in the form before submitting.");
      setStatusType("error");
      const firstField = Object.keys(newErrors)[0];
      if (firstField) {
        document.getElementById(firstField)?.scrollIntoView({ behavior: "smooth", block: "center" });
        document.getElementById(firstField)?.focus();
      }
      return;
    }

    if (!paymentProofFile) {
      setStatus("Payment screenshot is required to complete registration.");
      setStatusType("error");
      document.getElementById("paymentProof")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const registrationData: RegistrationData = {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        phone: form.phone,
        affiliation: form.affiliation,
        country: form.country,
        category: form.category,
        daysAttending: form.daysAttending,
        presentingPaper: false,
        paymentProofFile,
      };

      const result = await registerUser(registrationData);

      if (!result.success) {
        setStatus(result.error || result.message || "Submission failed");
        setStatusType("error");
        setLoading(false);
        return;
      }

      setStatus(result.message || "Submission successful");
      setStatusType("success");
      setShowModal(true);

      setForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        affiliation: "",
        country: "",
        category: "",
        daysAttending: "",
      });
      setPaymentProofFile(null);
      setErrors({});
      setTouched({});
      setShowPassword(false);
      setShowConfirmPassword(false);
    } catch (error: any) {
      setStatus(error?.message || "Unexpected error occurred, please try again.");
      setStatusType("error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="bg-primary text-white">
            <h2 className="text-2xl font-bold">Bank Details</h2>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
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
          </CardContent>
        </Card>

        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="bg-primary text-white">
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
                    <th className="px-3 py-2 text-right font-semibold">Early Bird (Indian)</th>
                    <th className="px-3 py-2 text-right font-semibold">Early Bird (Foreign)</th>
                    <th className="px-3 py-2 text-right font-semibold">Late (Indian)</th>
                    <th className="px-3 py-2 text-right font-semibold">Late (Foreign)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeTable.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-gray-200 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-3 py-1.5">{row.category}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">{row.earlyBirdIndian}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">{row.earlyBirdForeign}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">{row.lateIndian}</td>
                      <td className="px-3 py-1.5 text-right font-medium text-primary">{row.lateForeign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md" id="register">
          <CardHeader className="bg-primary text-white">
            <h2 className="text-2xl font-bold">Conference Registration</h2>
            <p className="text-primary-foreground/80">
              Fill out the form below to register for the conference. You can submit papers later from your user panel.
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-900 mb-1">
                    Account Creation
                  </p>
                  <p className="text-xs text-blue-800">
                    By registering, you&apos;ll create an account that allows you to log in later to manage your submissions,
                    view your registration status, and submit papers.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Personal Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Dr. John Doe"
                      required
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john.doe@university.edu"
                      required
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      Password * <span className="text-xs text-muted-foreground font-normal">(min. 8 characters)</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Create a secure password"
                        required
                        className={`pr-10 ${errors.password ? "border-destructive" : ""}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Re-enter your password"
                        required
                        className={`pr-10 ${errors.confirmPassword ? "border-destructive" : ""}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      required
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliation" className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                      Affiliation *
                    </Label>
                    <Input
                      id="affiliation"
                      name="affiliation"
                      value={form.affiliation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="University/Institution Name"
                      required
                      className={errors.affiliation ? "border-destructive" : ""}
                    />
                    {errors.affiliation && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.affiliation}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                      Country *
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="India"
                      required
                      className={errors.country ? "border-destructive" : ""}
                    />
                    {errors.country && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                      Registration Category *
                    </Label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleSelectChange}
                      required
                      className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring",
                        errors.category && "border-destructive"
                      )}
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.category}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="daysAttending" className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      Days Attending *
                    </Label>
                    <select
                      id="daysAttending"
                      name="daysAttending"
                      value={form.daysAttending}
                      onChange={handleSelectChange}
                      required
                      className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring",
                        errors.daysAttending && "border-destructive"
                      )}
                    >
                      <option value="">Select days</option>
                      <option value="day1">Day 1</option>
                      <option value="day2">Day 2</option>
                      <option value="day3">Day 3</option>
                      <option value="allDays">All Days</option>
                    </select>
                    {errors.daysAttending && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.daysAttending}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Upload className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Payment Screenshot
                  </h3>
                </div>
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900 space-y-1">
                    <p className="font-semibold">Manual bank transfer</p>
                    <p>
                      Transfer the registration fee using the UPI or bank details above
                      {form.category && form.country
                        ? ` (₹${getRegistrationFeeInr(form.category, form.country)})`
                        : ""}
                      , then upload your payment screenshot below. An admin must verify your payment before you can log in.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentProof">Payment Screenshot *</Label>
                  <Input
                    id="paymentProof"
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setPaymentProofFile(file);
                    }}
                  />
                  {paymentProofFile ? (
                    <p className="text-xs text-muted-foreground">
                      Selected: {paymentProofFile.name} ({(paymentProofFile.size / 1024).toFixed(1)} KB)
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Upload your UPI/bank transfer screenshot or PDF receipt (required).
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-900 mb-1">
                    Paper Submission
                  </p>
                  <p className="text-xs text-blue-800">
                    After your payment is verified by an admin, log in to your user panel to submit papers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/40 border rounded-lg">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">
                  <span className="font-semibold">Technical Support:</span> If you
                  face any issues during registration, please email{" "}
                  <a
                    href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {CONSTANTS.SUPPORT_EMAIL}
                  </a>
                </p>
              </div>

              {status && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg border ${
                    statusType === "error"
                      ? "bg-destructive/10 border-destructive/20 text-destructive"
                      : statusType === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-700"
                      : "bg-primary/10 border-primary/20 text-primary"
                  }`}
                >
                  {statusType === "error" ? (
                    <XCircle className="w-5 h-5 shrink-0" />
                  ) : statusType === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="font-semibold">{status}</p>
                </div>
              )}

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="min-w-[220px] h-11 text-base font-semibold"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Registering...
                    </span>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Complete Registration
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Registration Submitted!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <p className="text-center text-muted-foreground">
              Your registration for {CONSTANTS.CONFERENCE_ABBR} has been created and your payment
              screenshot has been submitted for admin verification.
            </p>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">What&apos;s Next?</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Wait for an admin to verify your payment</li>
                <li>Once verified, you can log in to your user panel</li>
                <li>Check your email regularly for updates</li>
              </ul>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <DialogClose asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Close
              </Button>
            </DialogClose>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                setShowModal(false);
                window.location.href = '/login';
              }}
            >
              Go to Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
