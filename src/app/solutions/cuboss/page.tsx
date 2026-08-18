import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "CuBOSS — The Complete Utility Operating Platform",
  description:
    "CuBOSS is Crown Interactive's complete Revenue Cycle Management platform for electricity distribution companies. Live across Nigeria's NESI.",
  alternates: {
    canonical: "https://www.crowninteractive.com/solutions/cuboss",
  },
}

const capabilities = [
  {
    category: "Customer Management",
    items: [
      "Customer Order Management",
      "Customer Account Management",
      "Customer Relationship Management",
      "Self-Service Portal",
    ],
  },
  {
    category: "Billing",
    items: [
      "Product Management",
      "Automated Estimated Billing",
      "Non-energy Billing",
      "Prepaid Customer Management",
      "Adjustment Management",
      "Bill Cycle Management",
    ],
  },
  {
    category: "Metering & Revenue",
    items: [
      "Postpaid Meter Reading",
      "Dunning & Delinquency",
      "Bill Simulation & Approval",
      "Bill Distribution",
      "Revenue Assurance",
    ],
  },
  {
    category: "Collections & Finance",
    items: [
      "Real-Time Cash Management",
      "Cash Office Management",
      "Bank Balance Monitoring",
      "Direct Bank Lodgement",
      "Web Payments",
      "SMS Payments",
    ],
  },
  {
    category: "Reporting & Analytics",
    items: [
      "Operational Reports",
      "Revenue Reports",
      "Settlement Reports",
      "Executive Dashboards",
    ],
  },
  {
    category: "Channels & Payments",
    items: [
      "Channel Partner Management",
      "Electronic Wallet",
      "Voucher Management",
      "Payment Gateway Integration",
    ],
  },
]

export default function CuBOSSPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Solutions</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">CuBOSS</span>
            </div>
            <h1 className="type-display text-white">CuBOSS</h1>
            <p className="mt-2 text-lg font-semibold text-white/50">
              The Complete Utility Operating Platform.
            </p>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Revenue cycle management for electricity distribution companies, live
              across Nigeria&apos;s NESI. CuBOSS covers the full operational stack from
              customer management through billing, collections, and reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Request a demonstration
              </Button>
              <Button as="link" href="/industries/utilities" variant="outline-white" size="lg">
                Utilities sector
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Layer stack */}
      <section className="bg-[#071020] py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {["Experience", "Applications", "Integration", "Data", "Infrastructure"].map((layer, i) => (
              <span key={layer} className="text-xs font-semibold uppercase tracking-widest" style={{ color: `rgba(255,255,255,${0.25 + i * 0.12})` }}>
                {layer}
              </span>
            ))}
            <span className="text-xs text-white/25 ml-auto hidden md:inline">
              Every layer is licensee-owned. Crown builds the stack; it never holds what runs on it.
            </span>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="type-eyebrow text-[#e8272a] mb-3">Overview</p>
            <h2 className="type-h2 text-[#0b1a2e]">
              End-to-end revenue cycle management for DisCos
            </h2>
            <p className="mt-4 type-body text-[#4b5a6e]">
              CuBOSS is Crown Interactive&apos;s Utility BSS/OSS platform, purpose-built
              for electricity distribution companies in liberalised energy markets.
              It is the operational backbone for NESI (Nigeria Electricity Supply
              Industry) distribution companies, handling every aspect of the customer
              and revenue lifecycle.
            </p>
            <p className="mt-4 type-body text-[#4b5a6e]">
              As with all Crown platforms, CuBOSS is deployed on infrastructure owned
              or trusted by the licensee. Crown builds and maintains the platform; it
              does not operate it and never holds the utility&apos;s data.
            </p>
          </div>
        </Container>
      </section>

      {/* Capabilities grid */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Capabilities</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            The complete utility operating platform
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.category}
                className="rounded-lg border border-[#dde2ea] bg-white p-6"
              >
                <h3 className="text-sm font-bold text-[#0b1a2e] mb-4">
                  {cap.category}
                </h3>
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#4b5a6e]"
                    >
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

      {/* NESI deployment */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-xl border border-[#dde2ea] bg-[#f5f6f8] p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="type-eyebrow text-[#e8272a] mb-3">Live deployment</p>
                <h2 className="type-h2 text-[#0b1a2e]">
                  Active across Nigeria&apos;s NESI
                </h2>
                <p className="mt-4 type-body text-[#4b5a6e]">
                  CuBOSS is live across electricity distribution companies in
                  Nigeria&apos;s NESI — the Nigeria Electricity Supply Industry. It
                  manages the revenue cycle for millions of customers across
                  multiple DisCo service territories.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Platform", value: "CuBOSS" },
                  { label: "Market", value: "NESI DisCos" },
                  { label: "Certification", value: "ISO 27001" },
                  { label: "Model", value: "Licensee-owned" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-[#dde2ea] bg-white p-4">
                    <div className="text-xs text-[#8898aa] uppercase tracking-wide">{stat.label}</div>
                    <div className="mt-1 text-base font-bold text-[#0b1a2e]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Utility sector"
        title="Modernise your DisCo operations"
        description="CuBOSS is the complete revenue cycle management platform for electricity distribution companies."
        primaryLabel="Request a demonstration"
        primaryHref="/contact"
        secondaryLabel="Utilities sector overview"
        secondaryHref="/industries/utilities"
      />
    </>
  )
}
