export interface SolutionFeature {
  title: string
  parent: string
  parentHref: string
  tagline: string
  description: string
  overview: string[]
  capabilities: string[]
  cta: {
    label: string
    href: string
  }
}

export const solutionFeatures: Record<string, SolutionFeature> = {
  // 1Gov features
  "gov-sso-identity": {
    title: "Gov SSO & Identity",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Centralised government single sign-on and identity",
    description:
      "Unified identity and access management across all government agencies, ministries and departments on a sovereign platform.",
    overview: [
      "Gov SSO & Identity provides every civil servant with a single, secure digital identity that works across all 1Gov modules and connected government systems. It removes the fragmentation of multiple agency logins while keeping authentication data under government control.",
      "Multi-factor authentication, role-based access control and federation capabilities are built in, enabling secure interoperability without compromising sovereignty.",
    ],
    capabilities: [
      "Single sign-on across government systems",
      "Multi-factor authentication",
      "Role and permission management",
      "Federated identity for agencies",
      "Audit logging and compliance reporting",
      "Self-service password recovery",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "ecms-document-management": {
    title: "ECMS & Document Management",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Sovereign enterprise content management for government",
    description:
      "Digital records, documents and archives managed on government-controlled infrastructure with full audit and compliance.",
    overview: [
      "The Enterprise Content Management System (ECMS) digitises government records, documents and archives. It replaces paper-based filing with searchable, version-controlled digital records that remain on infrastructure the government owns or trusts.",
      "Workflows for approval, retention and disposal are configurable to national records-management policies, with full audit trails for transparency and compliance.",
    ],
    capabilities: [
      "Document capture and digitisation",
      "Version control and check-in/check-out",
      "Retention and disposal workflows",
      "Role-based access to records",
      "Full-text search and metadata tagging",
      "Compliance and audit reporting",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "drive-mail-memo": {
    title: "Drive, Mail & Memo",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Secure government collaboration tools",
    description:
      "Sovereign email, file storage and internal correspondence for civil servants and government agencies.",
    overview: [
      "Drive, Mail & Memo gives government teams a secure, integrated suite for everyday collaboration: cloud storage for files, official email, and structured internal memos. All data resides on licensee-controlled infrastructure.",
      "Because these tools are part of 1Gov, they connect seamlessly with identity, document management and citizen service modules — without data leaving government hands.",
    ],
    capabilities: [
      "Sovereign government email",
      "Secure cloud file storage",
      "Internal memo creation and routing",
      "Shared drives by ministry or agency",
      "Integration with ECMS and identity",
      "Mobile and desktop access",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "forms-citizen-paperless-service-portal": {
    title: "Forms & Citizen Paperless Service Portal",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Digital forms and citizen-facing services",
    description:
      "Transform government forms and services into digital, paperless experiences for citizens and businesses.",
    overview: [
      "The Forms & Citizen Paperless Service Portal enables agencies to publish digital forms, accept submissions, route approvals and deliver services online. Citizens interact with government through a single, consistent digital front door.",
      "Every submission is tracked, auditable and processed on sovereign infrastructure, reducing paperwork while improving accountability and service delivery times.",
    ],
    capabilities: [
      "No-code digital form builder",
      "Citizen self-service portal",
      "Multi-step approval workflows",
      "Application tracking and notifications",
      "Integration with payments and identity",
      "Service-level reporting and analytics",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "asset-management": {
    title: "Asset Management",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Government asset register and lifecycle tracking",
    description:
      "Track, manage and report on government assets from acquisition through disposal on a sovereign platform.",
    overview: [
      "The Asset Management module maintains a central register of government assets — vehicles, equipment, buildings, IT assets and more. It supports procurement, depreciation, maintenance scheduling and disposal workflows.",
      "By linking asset data to ministries, departments and locations, government finance and audit teams gain accurate, real-time visibility into public asset holdings.",
    ],
    capabilities: [
      "Central asset register",
      "Barcode and QR asset tagging",
      "Maintenance and service scheduling",
      "Depreciation and valuation tracking",
      "Disposal and write-off workflows",
      "Audit and compliance reports",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "intermda-conference-chat": {
    title: "InterMDA, Conference & Chat",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Inter-agency communication and secure conferencing",
    description:
      "Secure messaging, video conferencing and inter-ministerial collaboration for government teams.",
    overview: [
      "InterMDA, Conference & Chat provides government with secure alternatives to consumer-grade messaging and video tools. It enables real-time communication between ministries, departments and agencies (MDAs) without routing data outside sovereign infrastructure.",
      "The module supports one-to-one chat, group channels, scheduled video conferences and inter-agency workflows tied to official records.",
    ],
    capabilities: [
      "Secure government messaging",
      "Group channels by ministry or project",
      "HD video and audio conferencing",
      "Screen sharing and recording",
      "Integration with mail and memo",
      "Message retention and audit trails",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },
  "1gov-support-portal": {
    title: "1Gov Support Portal",
    parent: "1Gov",
    parentHref: "/solutions/1gov",
    tagline: "Help desk and support ticketing for government",
    description:
      "Centralised IT support, ticketing and knowledge base for civil servants using 1Gov.",
    overview: [
      "The 1Gov Support Portal gives civil servants a single place to report issues, request access, track tickets and find self-service guidance. It helps government IT teams manage demand, prioritise incidents and maintain service quality.",
      "Built-in reporting provides visibility into common issues, resolution times and user satisfaction across agencies.",
    ],
    capabilities: [
      "Ticket creation and tracking",
      "Service request catalogue",
      "Knowledge base and FAQs",
      "SLA and escalation management",
      "Asset and user linking",
      "Operational dashboards and reports",
    ],
    cta: { label: "Talk to our government team", href: "/contact#government" },
  },

  // CuBOSS features
  "revenue-cycle-management": {
    title: "Revenue Cycle Management",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "End-to-end revenue management for electricity distribution",
    description:
      "The complete revenue lifecycle for DisCos: from customer onboarding and metering to billing, collections and reporting.",
    overview: [
      "Revenue Cycle Management is the core of CuBOSS, covering every step that turns electricity consumption into collected revenue. It connects customer management, metering, billing, collections and reporting into one coherent operational platform.",
      "Designed specifically for Nigeria's NESI and similar liberalised energy markets, it helps distribution companies reduce commercial losses, improve cash flow and meet regulatory obligations.",
    ],
    capabilities: [
      "Customer-to-cash process orchestration",
      "Meter-to-bill reconciliation",
      "Collections tracking and enforcement",
      "Revenue assurance and leakage detection",
      "Regulatory and settlement reporting",
      "Executive revenue dashboards",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },
  "metering-billing": {
    title: "Metering & Billing",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "Accurate metering and flexible billing for utilities",
    description:
      "Manage postpaid and prepaid metering, estimated billing, bill cycles and distribution for DisCos.",
    overview: [
      "The Metering & Billing module handles both postpaid and prepaid customers, supporting manual readings, smart meter integration and estimated billing where meters are not yet in place. It manages complex tariffs, bill cycles and adjustments.",
      "By unifying metering and billing data, DisCos can issue accurate bills faster, handle exceptions efficiently and give customers clearer visibility into their accounts.",
    ],
    capabilities: [
      "Postpaid and prepaid metering",
      "Estimated billing rules",
      "Tariff and product configuration",
      "Bill cycle management",
      "Bill simulation and approval",
      "Meter asset management",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },
  "customer-management": {
    title: "Customer Management",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "Complete customer operations for electricity distribution",
    description:
      "Customer onboarding, account management, relationships and self-service for utility customers.",
    overview: [
      "Customer Management in CuBOSS covers the full customer journey: onboarding, account opening, order management, relationship tracking and self-service. It gives DisCos a single view of every customer across their service territory.",
      "The module integrates with metering, billing and collections so customer-facing teams have accurate, up-to-date information when handling enquiries.",
    ],
    capabilities: [
      "Customer onboarding and KYC",
      "Account and order management",
      "Relationship and contact history",
      "Self-service customer portal",
      "Complaint and request tracking",
      "Customer segmentation and analytics",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },
  "collections-enforcement": {
    title: "Collections & Enforcement",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "Payment collection and debt management for DisCos",
    description:
      "Cash management, payment channels, dunning and enforcement tools to maximise revenue collection.",
    overview: [
      "Collections & Enforcement helps DisCos collect revenue through multiple channels while managing delinquency. It covers cash offices, bank lodgements, web and SMS payments, electronic wallets and voucher systems.",
      "Dunning workflows and enforcement tools help prioritise field activities, while real-time cash monitoring gives treasury teams immediate visibility into collections.",
    ],
    capabilities: [
      "Real-time cash management",
      "Cash office and bank lodgement",
      "Web, SMS and mobile payments",
      "Electronic wallet and vouchers",
      "Dunning and delinquency management",
      "Payment reconciliation",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },
  "regulatory-settlement-reporting": {
    title: "Regulatory & Settlement Reporting",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "Compliance and market settlement reporting for utilities",
    description:
      "Operational, revenue and settlement reports aligned with regulatory and market operator requirements.",
    overview: [
      "Regulatory & Settlement Reporting provides the structured reports DisCos need for regulators, market operators and internal management. It covers operational KPIs, revenue analysis, settlement statements and executive dashboards.",
      "Report templates can be configured to national regulatory frameworks, reducing manual preparation and improving auditability.",
    ],
    capabilities: [
      "Operational and revenue reports",
      "Market settlement reporting",
      "Regulatory return templates",
      "Executive dashboards",
      "Scheduled and ad-hoc reporting",
      "Export and distribution",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },
  "modules-overview-10-core-modules": {
    title: "CuBOSS Modules Overview",
    parent: "CuBOSS",
    parentHref: "/solutions/cuboss",
    tagline: "Ten core modules powering utility operations",
    description:
      "An overview of CuBOSS's integrated modules covering customers, billing, metering, collections and more.",
    overview: [
      "CuBOSS is built as a set of integrated core modules that together cover the complete utility operating model. The ten core modules span customer management, billing, metering, collections, finance, channels, reporting and more.",
      "Each module can be deployed as part of the full platform or integrated progressively, allowing DisCos to address their most urgent priorities first while maintaining a unified data model.",
    ],
    capabilities: [
      "Customer Order and Account Management",
      "Product and Tariff Management",
      "Billing and Metering",
      "Collections and Payments",
      "Revenue Assurance",
      "Reporting, Analytics and Dashboards",
    ],
    cta: { label: "Request a CuBOSS demonstration", href: "/contact" },
  },

  // CICOD features
  "banking-edition": {
    title: "CICOD Banking Edition",
    parent: "CICOD Enterprise Cloud",
    parentHref: "/solutions/cicod",
    tagline: "Private cloud for financial institutions",
    description:
      "A sovereign, white-label private cloud platform built for banking regulatory and security requirements.",
    overview: [
      "CICOD Banking Edition delivers a private cloud environment tailored for banks and financial institutions. It combines the sovereign engine behind 1Gov and CuBOSS with the compliance, security and integration requirements of regulated financial services.",
      "The licensee retains full ownership of infrastructure and data, while Crown provides the platform, implementation and ongoing technology support.",
    ],
    capabilities: [
      "Private cloud deployment",
      "Banking-grade security controls",
      "Regulatory compliance readiness",
      "Data sovereignty and residency",
      "Integration with core banking systems",
      "White-label branding",
    ],
    cta: { label: "Talk to our enterprise team", href: "/contact" },
  },
  "enterprise-private-cloud-deployment": {
    title: "Enterprise Private Cloud Deployment",
    parent: "CICOD Enterprise Cloud",
    parentHref: "/solutions/cicod",
    tagline: "Sovereign private cloud for large organisations",
    description:
      "Deploy CICOD Enterprise Cloud on infrastructure the organisation owns or trusts, with full data control.",
    overview: [
      "Enterprise Private Cloud Deployment lets large organisations run CICOD on their own data centres or trusted sovereign hosting infrastructure. This model is ideal for enterprises that must retain full control over data residency, security policy and operational sovereignty.",
      "Crown implements and supports the platform, but the enterprise owns the deployment, the data and the operating relationship.",
    ],
    capabilities: [
      "On-premise or sovereign-hosted deployment",
      "Custom security and network policies",
      "Dedicated tenant environment",
      "Enterprise SLA and support",
      "Integration with existing enterprise systems",
      "Scalable, infrastructure-agnostic architecture",
    ],
    cta: { label: "Talk to our enterprise team", href: "/contact" },
  },
  "cicod-com-public-saas": {
    title: "CICOD.com Public SaaS",
    parent: "CICOD Enterprise Cloud",
    parentHref: "/solutions/cicod",
    tagline: "Public SaaS edition of CICOD Enterprise Cloud",
    description:
      "A scalable public cloud SaaS offering for businesses that want CICOD capabilities without managing infrastructure.",
    overview: [
      "CICOD.com Public SaaS makes the CICOD platform available as a subscription service over the public cloud. It suits businesses that need enterprise-grade collaboration, communication and workflow tools without the upfront investment of a private deployment.",
      "While operated as SaaS, the architecture preserves licensee data ownership and the same security certifications that underpin government and utility deployments.",
    ],
    capabilities: [
      "Subscription-based SaaS access",
      "Rapid onboarding and scaling",
      "Multi-tenant architecture",
      "Self-service administration",
      "Regular platform updates",
      "ISO 27001 certified stack",
    ],
    cta: { label: "Talk to our enterprise team", href: "/contact" },
  },

  // Training features
  "1gov-academy": {
    title: "1Gov Academy",
    parent: "Training & Capability",
    parentHref: "/solutions/training",
    tagline: "Digital skills for government teams",
    description:
      "Platform certification and digital government training for civil servants, IT teams and system administrators.",
    overview: [
      "1Gov Academy equips government teams with the skills to deploy, operate and evolve 1Gov sovereign digital infrastructure. Courses blend platform administration with digital service delivery principles.",
      "Graduates gain practical capability in identity management, document management, citizen portals and secure government collaboration — all within the context of data sovereignty and licensee ownership.",
    ],
    capabilities: [
      "1Gov platform administration",
      "Digital government service design",
      "Sovereign cloud operations",
      "Identity and security management",
      "Certification pathways",
      "Train-the-trainer programmes",
    ],
    cta: { label: "Talk to our training team", href: "/contact" },
  },
  "cuboss-training": {
    title: "CuBOSS Training",
    parent: "Training & Capability",
    parentHref: "/solutions/training",
    tagline: "Utility operations training for DisCos",
    description:
      "Revenue cycle management training for electricity distribution operations, billing, collections and customer care teams.",
    overview: [
      "CuBOSS Training prepares utility staff to operate the complete revenue cycle on the CuBOSS platform. Programmes are tailored to the roles that keep a DisCo running: operations, billing, collections, customer care, metering and finance.",
      "Training is practical, scenario-based and aligned to the workflows DisCos use every day across Nigeria's NESI and similar markets.",
    ],
    capabilities: [
      "End-to-end CuBOSS operations",
      "Billing and collections workflows",
      "Metering and revenue assurance",
      "Customer management and self-service",
      "Regulatory and settlement reporting",
      "Role-based certification tracks",
    ],
    cta: { label: "Talk to our training team", href: "/contact" },
  },
  "crown-digital-skills-institute": {
    title: "Crown Digital Skills Institute",
    parent: "Training & Capability",
    parentHref: "/solutions/training",
    tagline: "Broad technology upskilling for professionals",
    description:
      "Technology training for professionals, partners and enterprises adopting sovereign digital platforms.",
    overview: [
      "The Crown Digital Skills Institute offers technology upskilling across cloud, infrastructure, data governance, enterprise applications and digital transformation delivery. It serves professionals, enterprise clients and ecosystem partners.",
      "Programmes are designed around African operational realities and the sovereign technology principles that guide every Crown deployment.",
    ],
    capabilities: [
      "Cloud and infrastructure fundamentals",
      "Enterprise application management",
      "Data governance and cybersecurity",
      "Digital transformation delivery",
      "Partner and vendor certification",
      "Executive briefings and workshops",
    ],
    cta: { label: "Talk to our training team", href: "/contact" },
  },
  "graduate-technology-accelerator": {
    title: "Graduate Technology Accelerator",
    parent: "Training & Capability",
    parentHref: "/solutions/training",
    tagline: "Building Africa's next generation of tech talent",
    description:
      "An early-career programme developing software engineers, cloud operators and product leaders for sovereign technology.",
    overview: [
      "The Graduate Technology Accelerator identifies, trains and mentors early-career technology talent, preparing them to contribute to Africa's sovereign digital infrastructure. Participants gain hands-on experience with the platforms and practices used in national-scale deployments.",
      "The programme is part of Crown's commitment to capability transfer: building local skills that outlast any single project.",
    ],
    capabilities: [
      "Software engineering and architecture",
      "Cloud operations and DevOps",
      "Product and platform delivery",
      "Mentorship from senior Crown technologists",
      "Real project exposure",
      "Career pathway development",
    ],
    cta: { label: "Talk to our training team", href: "/contact" },
  },
}

export function getFeatureBySlug(slug: string): SolutionFeature | undefined {
  return solutionFeatures[slug]
}
