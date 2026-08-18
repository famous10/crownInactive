import type { Industry } from "@/types"

export const industries: Industry[] = [
  {
    id: "government",
    title: "Government & Public Sector",
    description:
      "Sovereign digital infrastructure for federal and sub-national government. Identity, mail, records, and citizen services deployed on government-controlled infrastructure.",
    solution: "1Gov",
    href: "/industries/government",
    icon: "building-2",
  },
  {
    id: "utilities",
    title: "Utilities & Energy",
    description:
      "Revenue cycle management for electricity distribution companies across Nigeria's NESI. End-to-end billing, collections, and customer lifecycle management.",
    solution: "CuBOSS",
    href: "/industries/utilities",
    icon: "zap",
  },
  {
    id: "banking",
    title: "Banking & Financial Services",
    description:
      "White-label private cloud for financial institutions. CICOD Enterprise Cloud Banking Edition built on the same sovereign engine as 1Gov and CuBOSS.",
    solution: "CICOD Enterprise Cloud",
    href: "/industries/banking",
    icon: "landmark",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description:
      "SAP and Oracle Managed Services with bespoke integrated modules built around specialist client Standard Operating Procedures for oil and gas sector clients.",
    solution: "SAP & Oracle Managed Services",
    href: "/industries/oil-gas",
    icon: "gauge",
  },
  {
    id: "enterprise",
    title: "Enterprise & Private Sector",
    description:
      "CICOD Enterprise Cloud and CICOD.com — private or public cloud for large organisations. The same sovereign engine, shaped for enterprise requirements.",
    solution: "CICOD Enterprise Cloud",
    href: "/industries/enterprise",
    icon: "server",
  },
]
