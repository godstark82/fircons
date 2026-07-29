import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONSTANTS } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy | ${CONSTANTS.CONFERENCE_ABBR}`,
  description: `Privacy Policy for ${CONSTANTS.CONFERENCE_FULL_TITLE}`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        This Privacy Policy describes how {CONSTANTS.COLLAGE_NAME} (“we”, “us”, or “our”)
        collects, uses, and protects personal information of participants registering for{" "}
        {CONSTANTS.CONFERENCE_FULL_TITLE} ({CONSTANTS.CONFERENCE_ABBR}).
      </p>

      <LegalSection title="1. Information We Collect">
        <p>We may collect the following information when you register or use our website:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, email address, phone number, affiliation, and country</li>
          <li>Registration category and attendance details</li>
          <li>Account credentials (password is stored securely via Firebase Authentication)</li>
          <li>Payment-related references (such as Razorpay order/payment IDs)</li>
          <li>Paper submissions and related files, if you choose to submit</li>
          <li>Technical data such as browser type and access logs, where applicable</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>Your information is used to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process conference registration and payments</li>
          <li>Manage your user account and paper submissions</li>
          <li>Communicate important conference updates</li>
          <li>Issue invoices, receipts, and participation-related records</li>
          <li>Improve website functionality and security</li>
          <li>Comply with legal and institutional requirements</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Payment Information">
        <p>
          Online payments are processed through Razorpay. We do not store your full card or
          banking credentials on our servers. Payment confirmation details (for example,
          payment ID and order ID) may be stored to verify transactions and support refunds
          where applicable under our Refund &amp; Cancellation Policy.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Storage &amp; Security">
        <p>
          Registration and account data are stored using Firebase (Authentication, Firestore,
          and Storage as applicable). We take reasonable administrative and technical measures
          to protect your data. No method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="5. Sharing of Information">
        <p>
          We do not sell your personal information. We may share limited data with:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Payment processors (e.g., Razorpay) to complete transactions</li>
          <li>Conference organizers and authorized committee members for event operations</li>
          <li>Service providers who support hosting, email, or infrastructure</li>
          <li>Authorities where required by law</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Cookies &amp; Similar Technologies">
        <p>
          The website may use cookies or local/session storage for authentication and basic
          site functionality. You can control cookies through your browser settings; disabling
          them may affect login and registration features.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Subject to applicable law, you may request access to, correction of, or deletion of
          your personal data by contacting us at{" "}
          <a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {CONSTANTS.SUPPORT_EMAIL}
          </a>
          . Note that some records may be retained for legal, financial, or academic audit
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="8. Retention">
        <p>
          We retain registration and submission data for as long as needed to administer the
          conference and meet institutional or legal obligations, after which data may be
          archived or deleted.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For privacy-related questions, contact:
        </p>
        <p>
          {CONSTANTS.COLLAGE_NAME}<br />
          {CONSTANTS.COLLAGE_ADDRESS}<br />
          Email:{" "}
          <a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {CONSTANTS.SUPPORT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
