import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONSTANTS } from "@/lib/constants";

export const metadata = {
  title: `Refund & Cancellation Policy | ${CONSTANTS.CONFERENCE_ABBR}`,
  description: `Refund and Cancellation Policy for ${CONSTANTS.CONFERENCE_FULL_TITLE}`,
};

export default function RefundCancellationPolicyPage() {
  return (
    <LegalPageShell title="Refund & Cancellation Policy">
      <p>
        This Refund &amp; Cancellation Policy applies to registrations for{" "}
        {CONSTANTS.CONFERENCE_FULL_TITLE} ({CONSTANTS.CONFERENCE_ABBR}), organized by{" "}
        {CONSTANTS.COLLAGE_NAME}.
      </p>

      <LegalSection title="1. General Principle">
        <p>
          Registration fees once paid are generally <strong>non-refundable</strong> under any
          circumstances, as also stated on the registration page. Please review fee categories
          carefully before completing payment.
        </p>
      </LegalSection>

      <LegalSection title="2. Participant-Initiated Cancellation">
        <p>
          If you wish to cancel your registration, you must notify the organizers in writing at{" "}
          <a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {CONSTANTS.SUPPORT_EMAIL}
          </a>
          . Cancellation of participation does not automatically entitle you to a refund of the
          registration fee.
        </p>
      </LegalSection>

      <LegalSection title="3. Duplicate or Failed Payments">
        <p>
          If a payment is charged more than once due to a technical error, or if an amount is
          deducted but registration is not completed, contact us with your Razorpay payment ID /
          order ID. After verification with the payment gateway, a refund of the duplicate or
          failed transaction amount may be processed.
        </p>
      </LegalSection>

      <LegalSection title="4. Event Cancellation or Postponement by Organizers">
        <p>
          If the conference is cancelled by the organizers, registered participants may be
          offered a refund of the registration fee (excluding payment gateway charges, if any)
          or transfer of registration to a rescheduled date, at the organizers’ discretion.
        </p>
        <p>
          If the conference is postponed, registrations remain valid for the new dates unless
          otherwise communicated.
        </p>
      </LegalSection>

      <LegalSection title="5. Change of Mode (Online / Offline)">
        <p>
          If the organizers change the conference mode (for example, from offline to online),
          registration fees will generally not be refunded. Adjusted arrangements will be
          communicated to registered participants.
        </p>
      </LegalSection>

      <LegalSection title="6. No-Shows">
        <p>
          Failure to attend the conference after successful registration and payment does not
          qualify for a refund.
        </p>
      </LegalSection>

      <LegalSection title="7. Paper Submission &amp; Publication Fees">
        <p>
          Article Processing Charges (APC) or journal publication fees, if paid to publishers or
          third parties, are governed by those parties’ policies and are outside the scope of
          this conference refund policy.
        </p>
      </LegalSection>

      <LegalSection title="8. Refund Processing (Where Applicable)">
        <p>
          Where a refund is approved, it will typically be credited to the original payment
          method within <strong>7–14 business days</strong>, subject to Razorpay and bank
          processing times. The organizers are not responsible for delays by banks or payment
          gateways.
        </p>
      </LegalSection>

      <LegalSection title="9. How to Request Support">
        <p>For payment or cancellation queries, email:</p>
        <p>
          <a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {CONSTANTS.SUPPORT_EMAIL}
          </a>
          <br />
          Include your full name, registered email, category, and Razorpay payment/order ID.
        </p>
      </LegalSection>

      <LegalSection title="10. Policy Updates">
        <p>
          The organizers may update this policy as needed. The version published on this website
          at the time of your registration shall apply to your transaction, unless a change is
          required by law.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
