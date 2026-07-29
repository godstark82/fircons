import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONSTANTS } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions | ${CONSTANTS.CONFERENCE_ABBR}`,
  description: `Terms and Conditions for ${CONSTANTS.CONFERENCE_FULL_TITLE}`,
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions (“Terms”) govern your use of the {CONSTANTS.CONFERENCE_ABBR}{" "}
        website and your participation in {CONSTANTS.CONFERENCE_FULL_TITLE}, organized by{" "}
        {CONSTANTS.COLLAGE_NAME}. By registering or using this website, you agree to these Terms.
      </p>

      <LegalSection title="1. Conference Participation">
        <p>
          Registration is required to participate. Providing accurate information is your
          responsibility. The organizers reserve the right to accept, reject, or cancel
          registrations in cases of incomplete information, policy violations, or misuse.
        </p>
      </LegalSection>

      <LegalSection title="2. Account Responsibility">
        <p>
          You are responsible for maintaining the confidentiality of your login credentials
          and for all activity under your account. Notify the organizers immediately if you
          suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="3. Registration Fees &amp; Payments">
        <p>
          Applicable fees depend on your registration category and timing (early bird / late),
          as published on the registration page. Payments made through Razorpay are subject to
          Razorpay’s terms in addition to these Terms. Fees are generally non-refundable except
          as stated in the Refund &amp; Cancellation Policy.
        </p>
      </LegalSection>

      <LegalSection title="4. Paper Submissions">
        <p>
          Submitted papers must be original and must not infringe third-party rights. Authors
          are responsible for content accuracy and for obtaining any required permissions.
          Acceptance decisions rest with the conference review process and organizers.
        </p>
      </LegalSection>

      <LegalSection title="5. Publication &amp; APC">
        <p>
          Where publication is offered, authors may be required to pay Article Processing
          Charges (APC) as per the respective journal or publisher. Conference registration
          fees do not automatically include APC unless explicitly stated.
        </p>
      </LegalSection>

      <LegalSection title="6. Code of Conduct">
        <p>
          Participants must behave professionally and respectfully. Harassment, discrimination,
          or disruptive conduct may result in removal from the conference without refund.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          Website content, branding, and conference materials remain the property of the
          organizers or respective rights holders. You may not reproduce materials for
          commercial use without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="8. Website Availability">
        <p>
          We aim to keep the website available and accurate, but we do not guarantee
          uninterrupted access or error-free content. Features may change without prior notice.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {CONSTANTS.COLLAGE_NAME} and conference
          organizers shall not be liable for indirect, incidental, or consequential damages
          arising from use of the website, registration, travel, accommodation, or participation.
          Organizers are not responsible for third-party services (including payment gateways,
          hotels, or travel providers).
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to Terms">
        <p>
          We may update these Terms at any time. Continued use of the website or participation
          after updates constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These Terms are governed by the laws of India. Disputes shall be subject to the
          exclusive jurisdiction of courts in Nagpur, Maharashtra, unless otherwise required by
          law.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {CONSTANTS.SUPPORT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
