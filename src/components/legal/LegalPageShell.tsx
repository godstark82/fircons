import AboutHeader from "@/components/common/AboutHeader";
import { CONSTANTS } from "@/lib/constants";
import Link from "next/link";

export function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader
        title={title}
        overlayColor="#1a1a2e"
        bgImage="/images/utb-images/gallery/gallery-2.jpg"
        dividerColor="primary"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: {CONSTANTS.CONFERENCE_DATES} · {CONSTANTS.CONFERENCE_ABBR}
        </p>
        <div className="prose prose-neutral max-w-none space-y-6 text-gray-800 text-base leading-relaxed">
          {children}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-4 text-sm">
          <Link href="/about/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link href="/about/terms-and-conditions" className="text-primary hover:underline">
            Terms &amp; Conditions
          </Link>
          <Link href="/about/refund-and-cancellation-policy" className="text-primary hover:underline">
            Refund &amp; Cancellation Policy
          </Link>
          <Link href="/contact-us" className="text-primary hover:underline">
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-bold text-secondary">{title}</h2>
      <div className="space-y-3 text-justify">{children}</div>
    </section>
  );
}
