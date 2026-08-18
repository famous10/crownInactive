import type { NavItem } from "@/types"

export const navigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "1Gov",
        href: "/solutions/1gov",
        description: "Sovereign Digital Public Infrastructure for government",
        children: [
          { label: "Gov SSO & Identity", href: "/solutions/1gov/gov-sso-identity" },
          { label: "ECMS & Document Management", href: "/solutions/1gov/ecms-document-management" },
          { label: "Drive, Mail & Memo", href: "/solutions/1gov/drive-mail-memo" },
          { label: "Forms & Citizen Paperless Service Portal", href: "/solutions/1gov/forms-citizen-paperless-service-portal" },
          { label: "Asset Management", href: "/solutions/1gov/asset-management" },
          { label: "InterMDA, Conference & Chat", href: "/solutions/1gov/intermda-conference-chat" },
          { label: "1Gov Support Portal", href: "/solutions/1gov/1gov-support-portal" },
        ],
      },
      {
        label: "CuBOSS",
        href: "/solutions/cuboss",
        description: "Complete Utility Operating Platform for NESI DisCos",
        children: [
          { label: "Revenue Cycle Management", href: "/solutions/cuboss/revenue-cycle-management" },
          { label: "Metering & Billing", href: "/solutions/cuboss/metering-billing" },
          { label: "Customer Management", href: "/solutions/cuboss/customer-management" },
          { label: "Collections & Enforcement", href: "/solutions/cuboss/collections-enforcement" },
          { label: "Regulatory & Settlement Reporting", href: "/solutions/cuboss/regulatory-settlement-reporting" },
          { label: "Modules Overview (10 Core Modules)", href: "/solutions/cuboss/modules-overview-10-core-modules" },
        ],
      },
      {
        label: "CICOD Enterprise Cloud",
        href: "/solutions/cicod",
        description: "White-label private cloud and public SaaS",
        children: [
          { label: "Banking Edition", href: "/solutions/cicod/banking-edition" },
          { label: "Enterprise Private Cloud Deployment", href: "/solutions/cicod/enterprise-private-cloud-deployment" },
          { label: "CICOD.com Public SaaS", href: "/solutions/cicod/cicod-com-public-saas" },
        ],
      },
      {
        label: "Training & Capability",
        href: "/solutions/training",
        description: "1Gov Academy, CuBOSS Training, Digital Skills Institute",
        children: [
          { label: "1Gov Academy", href: "/solutions/training/1gov-academy" },
          { label: "CuBOSS Training", href: "/solutions/training/cuboss-training" },
          { label: "Crown Digital Skills Institute", href: "/solutions/training/crown-digital-skills-institute" },
          { label: "Graduate Technology Accelerator", href: "/solutions/training/graduate-technology-accelerator" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Government & Public Sector",
        href: "/industries/government",
        description: "Sovereign digital infrastructure for federal and sub-national government",
      },
      {
        label: "Utilities & Energy",
        href: "/industries/utilities",
        description: "Revenue cycle management for electricity distribution companies",
      },
      {
        label: "Banking & Financial Services",
        href: "/industries/banking",
        description: "White-label private cloud for financial institutions",
      },
      {
        label: "Enterprise & Private Sector",
        href: "/industries/enterprise",
        description: "Private or public cloud for large organisations",
      },
    ],
  },
  {
    label: "Why Crown",
    href: "/why-crown",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Company",
    href: "/company",
    children: [
      {
        label: "About Crown",
        href: "/company",
        description: "Founded in London, built for Africa",
      },
      {
        label: "Board & Leadership",
        href: "/company#board",
        description: "Meet the board and management team",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join the team building Africa's digital infrastructure",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
]