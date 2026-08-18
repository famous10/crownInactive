import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Zap, Shield, Globe, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Utilities & Energy — Revenue Cycle Management for NESI",
  description: "Crown Interactive provides CuBOSS, the complete utility operating platform for electricity distribution companies across Nigeria's NESI. End-to-end billing, collections, and customer lifecycle management.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries/utilities",
  },
}

const challenges = [
  {
    title: "Revenue leakage",
    description: "Manual processes, estimated billing inaccuracies, and collection gaps erode DisCo revenue across the NESI.",
  },
  {
    title: "Customer lifecycle fragmentation",
    description: "Disconnected systems for onboarding, billing, metering, and collections create operational silos and poor customer experience.",
  },
  {
    title: "Regulatory compliance",
    description: "NERC reporting, tariff compliance, and settlement obligations require accurate, auditable data across the revenue cycle.",
  },
  {
    title: "Legacy infrastructure",
    description: "Ageing billing platforms cannot scale to millions of customers or integrate with modern payment channels.",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "CuBOSS Platform",
    description: "Complete Revenue Cycle Management for electricity distribution companies: customer management, billing, metering, collections, reporting.",
    href: "/solutions/cuboss",
  },
  {
    icon: Shield,
    title: "End-to-End Billing",
    description: "Automated estimated billing, prepaid management, bill cycle management, postpaid meter reading, dunning & delinquency, bill simulation & approval.",
    href: "/solutions/cuboss",
  },
  {
    icon: Globe,
    title: "Multi-Channel Collections",
    description: "Real-time cash management, cash office, bank balance monitoring, direct bank lodgement, web/SMS payments, electronic wallet, voucher management.",
    href: "/solutions/cuboss",
  },
  {
    icon: Database,
    title: "Revenue Assurance & Analytics",
    description: "Operational reports, revenue reports, settlement reports, executive dashboards — built for NERC compliance and DisCo decision-making.",
    href: "/solutions/cuboss",
  },
]

const outcomes = [
  { metric: "NESI DisCos", label: "Live across Nigeria" },
  { metric: "Millions", label: "Customers managed" },
  { metric: "ISO 27001", label: "Certified platform" },
  { metric: "Licensee-owned", label: "Data sovereignty" },
]

export default function UtilitiesIndustryPage() {
  const capabilityItems: Record<string, string[]> = {
    "Customer Management": [
      "Customer Order Management",
      "Customer Account Management",
      "Customer Relationship Management",
      "Self-Service Portal",
    ],
    Billing: [
      "Product Management",
      "Automated Estimated Billing",
      "Non-energy Billing",
      "Prepaid Customer Management",
      "Adjustment Management",
      "Bill Cycle Management",
    ],
    "Metering & Revenue": [
      "Postpaid Meter Reading",
      "Dunning & Delinquency",
      "Bill Simulation & Approval",
      "Bill Distribution",
      "Revenue Assurance",
    ],
    "Collections & Finance": [
      "Real-Time Cash Management",
      "Cash Office Management",
      "Bank Balance Monitoring",
      "Direct Bank Lodgement",
      "Web Payments",
      "SMS Payments",
    ],
    "Reporting & Analytics": [
      "Operational Reports",
      "Revenue Reports",
      "Settlement Reports",
      "Executive Dashboards",
    ],
    "Channels & Payments": [
      "Channel Partner Management",
      "Electronic Wallet",
      "Voucher Management",
      "Payment Gateway Integration",
    ],
  }

  const categories = [
    "Customer Management",
    "Billing",
    "Metering & Revenue",
    "Collections & Finance",
    "Reporting & Analytics",
    "Channels & Payments",
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Industries</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Utilities & Energy</span>
            </div>
            <h1 className="type-display text-white">
              Revenue cycle management for electricity distribution
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              CuBOSS is Crown Interactive&apos;s complete utility operating platform,
              purpose-built for electricity distribution companies in liberalised
              energy markets. Live across Nigeria&apos;s NESI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Request a demonstration
              </Button>
              <Button as="link" href="/solutions/cuboss" variant="outline-white" size="lg">
                View CuBOSS platform
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">The challenge</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            DisCos need a platform that closes the revenue cycle
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Crown Interactive solution</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            The complete utility operating platform
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <s.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{s.description}</p>
                <a href={s.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] hover:text-[#c01e21] transition-colors">
                  Learn more <ChevronRight size={14} aria-hidden />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key outcomes */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-xl border border-[#dde2ea] bg-[#f5f6f8] p-8 md:p-12">
            <p className="type-eyebrow text-[#e8272a] mb-3">Outcomes</p>
            <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-8">
              What the complete revenue cycle delivers
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {outcomes.map((o) => (
                <div key={o.metric}>
                  <div className="text-2xl font-bold text-[#e8272a]">{o.metric}</div>
                  <div className="mt-1 text-sm text-[#4b5a6e]">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities detail */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Capability areas</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            End-to-end utility operations
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-sm font-bold text-[#0b1a2e] mb-4">{cat}</h3>
                <ul className="space-y-2">
                  {capabilityItems[cat].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4b5a6e]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Utility sector"
        title="Modernise your DisCo operations"
        description="CuBOSS is the complete revenue cycle management platform for electricity distribution companies."
        primaryLabel="Request a demonstration"
        primaryHref="/contact"
        secondaryLabel="View CuBOSS platform"
        secondaryHref="/solutions/cuboss"
      />
    </>
  )
}