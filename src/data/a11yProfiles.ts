// Deliberate accessibility issue profiles for agency microsites.
// Used for testing accessibility tools/widgets (e.g. UserWay) against
// pages with known, varying severity of WCAG violations.
//
// none     – clean baseline
// minor    – cosmetic / best-practice issues (low-contrast muted text,
//            decorative icons not hidden, missing list semantics)
// moderate – noticeable issues (icon-only buttons without labels,
//            skipped heading levels, vague link text, missing alt on
//            non-critical images)
// severe   – serious WCAG A failures (div-as-button with no keyboard
//            support, form inputs with no labels, very low contrast,
//            color-only status, images missing alt)

export type A11yLevel = "none" | "minor" | "moderate" | "severe";

export const agencyA11yLevels: Record<string, A11yLevel> = {
  // Severe
  dmv: "severe",
  edd: "severe",
  dhcs: "severe",
  // Moderate
  cdph: "moderate",
  epa: "moderate",
  sos: "moderate",
  dot: "moderate",
  dfp: "moderate",
  // Minor
  cde: "minor",
  parks: "minor",
  cdfa: "minor",
  water: "minor",
  ftb: "minor",
  // The rest default to "none"
};

export const getA11yLevel = (slug: string): A11yLevel =>
  agencyA11yLevels[slug] ?? "none";
