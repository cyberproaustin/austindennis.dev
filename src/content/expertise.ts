export type Cloud = "Microsoft Azure" | "Amazon Web Services" | "Google Cloud";
export type Certification = {
  name: string;
  cloud: Cloud;
  status: "earned" | "in progress" | "planned";
  earnedOn?: string;
  credentialUrl?: string;
};
// Add only owner-confirmed certifications. An empty list intentionally makes no credential claims.
export const certifications: Certification[] = [];
export const clouds: { name: Cloud; label: string; description: string }[] = [
  {
    name: "Microsoft Azure",
    label: "PRIMARY CLOUD",
    description:
      "Strong hands-on experience, supported by extensive Terraform and CI/CD work.",
  },
  {
    name: "Amazon Web Services",
    label: "EXPANDING INTO",
    description:
      "Building AWS depth through this portfolio’s planned static hosting and delivery platform.",
  },
  {
    name: "Google Cloud",
    label: "EXPANDING INTO",
    description:
      "Expanding multi-cloud knowledge with a focus on transferable platform and security practices.",
  },
];
