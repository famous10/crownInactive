import type { Solution } from "@/types"

export const solutions: Solution[] = [
  {
    id: "1gov",
    title: "1Gov",
    tagline: "Sovereign Digital Public Infrastructure",
    description:
      "A complete, infrastructure-agnostic government cloud platform, built so nations own their data, their systems, and their digital future. Deployed under a G2G model with Galaxy Backbone in Nigeria and Konza (KoTDA) in Kenya.",
    href: "/solutions/1gov",
    sector: "Government",
    features: [
      "Gov SSO & MFA",
      "ECMS",
      "Drive",
      "Mail",
      "Memo",
      "Forms",
      "Asset Management",
      "InterMDA",
      "Conference & Chat",
      "1Gov Support Portal",
      "Citizen Paperless Service Portal",
    ],
  },
  {
    id: "cuboss",
    title: "CuBOSS",
    tagline: "The Complete Utility Operating Platform",
    description:
      "Revenue cycle management for electricity distribution companies, live across Nigeria's NESI. CuBOSS covers the full operational stack from customer management through billing, collections, and reporting.",
    href: "/solutions/cuboss",
    sector: "Utilities",
    features: [
      "Customer Order Management",
      "Customer Account Management",
      "Product Management",
      "Automated Estimated Billing",
      "Prepaid Customer Management",
      "Bill Cycle Management",
      "Postpaid Meter Reading",
      "Dunning & Delinquency",
      "Bill Distribution",
      "Revenue Assurance",
      "Self-Service Portal",
      "Reporting & Analytics",
    ],
  },
  {
    id: "cicod",
    title: "CICOD Enterprise Cloud",
    tagline: "White-label private cloud and public SaaS",
    description:
      "White-label private cloud and public SaaS for banking and enterprise, built on the same engine that powers 1Gov and CuBOSS. Deployable on infrastructure the licensee already owns or trusts.",
    href: "/solutions/cicod",
    sector: "Enterprise & Banking",
    features: [
      "Private Cloud Deployment",
      "Public SaaS (CICOD.com)",
      "Banking Edition",
      "Enterprise Edition",
      "Infrastructure-agnostic",
      "ISO 27001 certified stack",
      "Multi-tenant architecture",
      "White-label branding",
    ],
  },
  {
    id: "training",
    title: "Training & Capability",
    tagline: "1Gov Academy, CuBOSS Training, Digital Skills Institute",
    description:
      "Structured capability transfer programmes: 1Gov Academy for government digital skills, CuBOSS Training for utility operations, Crown Digital Skills Institute for broad technology upskilling, and the Graduate Technology Accelerator for engineering talent.",
    href: "/solutions/training",
    sector: "Training",
    features: [
      "1Gov Academy",
      "CuBOSS Training",
      "Crown Digital Skills Institute",
      "Graduate Technology Accelerator",
    ],
  },
]

export const layerStack = [
  { label: "Experience", width: "88%" },
  { label: "Applications", width: "94%" },
  { label: "Integration", width: "80%" },
  { label: "Data", width: "68%" },
  { label: "Infrastructure", width: "76%" },
]