/** Registration fee amounts in INR */

export type FeeCategory =
  | "Research Scholar"
  | "Faculty/Industry Person"
  | "Attendee";

const EARLY_BIRD_DEADLINE = new Date("2026-07-31T23:59:59+05:30");
const USD_TO_INR = 95.69;

const FEES: Record<
  FeeCategory,
  { earlyIndian: number; lateIndian: number; earlyUsd: number; lateUsd: number }
> = {
  "Research Scholar": {
    earlyIndian: 2000,
    lateIndian: 2500,
    earlyUsd: 25,
    lateUsd: 30,
  },
  "Faculty/Industry Person": {
    earlyIndian: 3000,
    lateIndian: 3500,
    earlyUsd: 35,
    lateUsd: 40,
  },
  Attendee: {
    earlyIndian: 500,
    lateIndian: 500,
    earlyUsd: 10,
    lateUsd: 10,
  },
};

export function isEarlyBird(now = new Date()) {
  return now.getTime() <= EARLY_BIRD_DEADLINE.getTime();
}

export function isIndianParticipant(country: string) {
  return country.trim().toLowerCase() === "india";
}

export function getRegistrationFeeInr(category: string, country: string) {
  const fees = FEES[category as FeeCategory];
  if (!fees) {
    throw new Error("Invalid registration category");
  }

  const early = isEarlyBird();
  if (isIndianParticipant(country)) {
    return early ? fees.earlyIndian : fees.lateIndian;
  }

  const usd = early ? fees.earlyUsd : fees.lateUsd;
  return Math.round(usd * USD_TO_INR);
}

export function getRegistrationFeePaise(category: string, country: string) {
  return getRegistrationFeeInr(category, country) * 100;
}
