export const credentialCategories = [
  { id: "cloud", name: "Cloud, DevOps, and Microsoft platforms" },
  { id: "security", name: "Security" },
  { id: "foundations", name: "IT foundations and delivery" },
  { id: "associate", name: "Associate designation" },
] as const;

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  category: (typeof credentialCategories)[number]["id"];
  kind: "certification" | "designation";
  emphasis: "current" | "background";
  issuedOn: string;
  expiresOn?: string;
  credentialId?: string;
  credentialUrl?: string;
  featured?: boolean;
};

// Owner-supplied records. Dates preserve month precision; omitted expiry is unknown.
// Add verification URLs when supplied, without deriving them from credential IDs.
export const certifications: Certification[] = [
  {
    id: "devops-engineer",
    emphasis: "current",
    name: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2026-09",
    expiresOn: "2027-09",
    credentialId: "8D61BFA0DA552A99",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/8D61BFA0DA552A99?sharingId=D4417F3FE96275B6",
    featured: true,
  },
  {
    id: "cloud-ai-security",
    emphasis: "current",
    name: "Microsoft Certified: Cloud and AI Security Engineer Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2026-08",
    expiresOn: "2027-08",
    credentialId: "2E8B279DA098A85B",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/2E8B279DA098A85B?sharingId=D4417F3FE96275B6",
  },
  {
    id: "coae",
    emphasis: "current",
    credentialUrl:
      "https://www.credly.com/badges/b79b1f0d-08a6-475f-8983-9158a270537d",
    name: "Certified Offensive AI Expert (COAE)",
    issuer: "HackTheBox - Dr. AITH",
    category: "security",
    kind: "certification",
    issuedOn: "2026-05",
  },
  {
    id: "azure-developer",
    emphasis: "current",
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2026-01",
    expiresOn: "2027-01",
    credentialId: "DEB5A5FF22236A78",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/DEB5A5FF22236A78?sharingId=D4417F3FE96275B6",
  },
  {
    id: "m365-administrator",
    emphasis: "background",
    name: "Microsoft 365 Certified: Administrator Expert",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2025-04",
    expiresOn: "2027-04",
    credentialId: "3A9656D0E2801A93",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/3A9656D0E2801A93?sharingId",
  },
  {
    id: "sal1",
    emphasis: "background",
    credentialUrl:
      "https://assets.tryhackme.com/certification-certificate/67c8c15f5658c0f62be3edaa.pdf",
    name: "Security Analyst (SAL1) Certificate",
    issuer: "TryHackMe",
    category: "security",
    kind: "certification",
    issuedOn: "2025-03",
    expiresOn: "2028-03",
    credentialId: "67c8c15f5658c0f62be3edaa",
  },
  {
    id: "azure-architect",
    emphasis: "current",
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2025-02",
    expiresOn: "2028-02",
    credentialId: "50F7A19101A35F30",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/50F7A19101A35F30?sharingId",
    featured: true,
  },
  {
    id: "azure-ai",
    emphasis: "background",
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-12",
    expiresOn: "2026-12",
    credentialId: "CE04C6963BC2971B",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/CE04C6963BC2971B?sharingId",
  },
  {
    id: "cdsa",
    emphasis: "current",
    credentialUrl:
      "https://www.credly.com/badges/9bbfa78b-6efa-4f8a-972b-d58971539d4c",
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    category: "security",
    kind: "certification",
    issuedOn: "2024-09",
  },
  {
    id: "cybersecurity-architect",
    emphasis: "current",
    name: "Microsoft Certified: Cybersecurity Architect Expert",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-05",
    expiresOn: "2027-05",
    credentialId: "365FA46108B89D75",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/365FA46108B89D75?sharingId=D4417F3FE96275B6",
    featured: true,
  },
  {
    id: "azure-security",
    emphasis: "background",
    name: "Microsoft Certified: Azure Security Engineer Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-05",
    expiresOn: "2027-05",
    credentialId: "19A2830D017EE595",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/19A2830D017EE595?sharingId",
  },
  {
    id: "azure-network",
    emphasis: "current",
    name: "Microsoft Certified: Azure Network Engineer Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-03",
    expiresOn: "2027-03",
    credentialId: "6EAD668DDF762825",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/6EAD668DDF762825?sharingId=D4417F3FE96275B6",
  },
  {
    id: "security-operations",
    emphasis: "current",
    name: "Microsoft Certified: Security Operations Analyst Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-04",
    expiresOn: "2027-04",
    credentialId: "5561BF447B2E76F7",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/5561BF447B2E76F7?sharingId",
  },
  {
    id: "azure-administrator",
    emphasis: "current",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-03",
    expiresOn: "2027-03",
    credentialId: "826EFE1545150F37",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/826EFE1545150F37?sharingId",
  },
  {
    id: "identity-administrator",
    emphasis: "current",
    name: "Microsoft Certified: Identity and Access Administrator Associate",
    issuer: "Microsoft",
    category: "cloud",
    kind: "certification",
    issuedOn: "2024-02",
    expiresOn: "2027-02",
    credentialId: "BBD02A1879A565EA",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/AustinDennis-1518/BBD02A1879A565EA?sharingId",
  },
  {
    id: "tenable-cloud",
    emphasis: "background",
    name: "Tenable Cloud Security Administrator",
    issuer: "Tenable",
    category: "security",
    kind: "certification",
    issuedOn: "2024-02",
  },
  {
    id: "oswp",
    emphasis: "background",
    credentialUrl:
      "https://www.credential.net/e67ba5a7-f9e8-4c7f-8819-bcf323cf20ab",
    name: "Offensive Security Wireless Professional (OSWP)",
    issuer: "OffSec",
    category: "security",
    kind: "certification",
    issuedOn: "2024-01",
  },
  {
    id: "sscp",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/62a1bef6-15d5-46de-b7ef-42e76becdf0b",
    name: "SSCP",
    issuer: "ISC2",
    category: "security",
    kind: "certification",
    issuedOn: "2023-09",
    expiresOn: "2029-09",
  },
  {
    id: "isc2-associate",
    emphasis: "current",
    credentialUrl:
      "https://www.credly.com/badges/32faec4d-98fc-488c-b886-e8ffb1efbf2e",
    name: "Associate of ISC2",
    issuer: "ISC2",
    category: "associate",
    kind: "designation",
    issuedOn: "2023-08",
    expiresOn: "2027-08",
  },
  {
    id: "cysa",
    emphasis: "current",
    credentialUrl:
      "https://www.credly.com/badges/6a6af954-5ef6-4c3d-bed9-e28bb834bde8",
    name: "CompTIA CySA+ ce Certification",
    issuer: "CompTIA",
    category: "security",
    kind: "certification",
    issuedOn: "2023-07",
    expiresOn: "2029-07",
  },
  {
    id: "project",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/72781088-1b7e-4eb7-9823-f990adecbf12",
    name: "CompTIA Project+ Certification",
    issuer: "CompTIA",
    category: "foundations",
    kind: "certification",
    issuedOn: "2023-06",
  },
  {
    id: "linux",
    emphasis: "background",
    name: "Linux Essentials",
    issuer: "Linux Professional Institute (LPI)",
    category: "foundations",
    kind: "certification",
    issuedOn: "2023-06",
  },
  {
    id: "security-plus",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/d062c8d8-2485-4df3-a8fe-fef45e22526a",
    name: "CompTIA Security+ ce Certification",
    issuer: "CompTIA",
    category: "security",
    kind: "certification",
    issuedOn: "2023-04",
    expiresOn: "2029-07",
  },
  {
    id: "cc",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/1decde52-ad59-4772-9314-1233916bc375",
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    category: "security",
    kind: "certification",
    issuedOn: "2023-04",
    expiresOn: "2029-04",
  },
  {
    id: "network",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/a4f2eec9-f11d-4f8c-aebb-943071b0dc44",
    name: "CompTIA Network+ ce Certification",
    issuer: "CompTIA",
    category: "foundations",
    kind: "certification",
    issuedOn: "2023-04",
    expiresOn: "2029-07",
  },
  {
    id: "a-plus",
    emphasis: "background",
    credentialUrl:
      "https://www.credly.com/badges/7b5b7ce1-8fce-4604-a229-3dcdc67e6f4b",
    name: "CompTIA A+",
    issuer: "CompTIA",
    category: "foundations",
    kind: "certification",
    issuedOn: "2023-04",
    expiresOn: "2029-07",
  },
];
