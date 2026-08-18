import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import CTASection from "@/components/sections/CTASection"
import { Building2, Zap, Landmark, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies — Crown Interactive Deployments",
  description: "Real-world deployments of 1Gov, CuBOSS and CICOD Enterprise Cloud across government, utilities, banking and enterprise in Nigeria and Kenya.",
  alternates: {
    canonical: "https://www.crowninteractive.com/case-studies",
  },
}

const caseStudies = [
  {
    title: "Federal Civil Service — Nigeria",
    platform: "1Gov",
    partner: "Galaxy Backbone",
    sector: "Government",
    description:
      "1Gov deployed under a Government-to-Government mandate across Federal Civil Service MDAs. Provides SSO, ECMS, Drive, Mail, Memo, Forms, Asset Management, InterMDA, Conference, Support Portal, and Citizen Paperless Service Portal.",
    outcomes: [
      "Centralised identity across MDAs",
      "Paperless citizen services",
      "Sovereign data on Galaxy Backbone infrastructure",
      "ISO 27001 certified deployment",
    ],
    status: "Live",
    icon: Building2,
  },
  {
    title: "Konza Technopolis — Kenya",
    platform: "1Gov",
    partner: "Konza (KoTDA)",
    sector: "Government",
    description:
      "Crown Interactive Kenya partnership with the Konza Technopolis Development Authority for 1Gov sovereign digital infrastructure deployment. Extends the G2G model to East Africa.",
    outcomes: [
      "Sovereign government cloud for Kenya",
      "G2G partnership with KoTDA",
      "Regional expansion milestone",
      "Same platform, Kenyan substrate",
    ],
    status: "Live",
    icon: Building2,
  },
  {
    title: "NESI Distribution Companies — Nigeria",
    platform: "CuBOSS",
    partner: "Multiple DisCos",
    sector: "Utilities & Energy",
    description:
      "CuBOSS deployed across electricity distribution companies in Nigeria's NESI. Manages the complete revenue cycle for millions of customers: customer management, billing, metering, collections, and regulatory reporting.",
    outcomes: [
      "Revenue cycle management at national scale",
      "Multi-DisCo deployment",
      "NERC regulatory compliance",
      "Real-time collections visibility",
    ],
    status: "Live",
    icon: Zap,
  },
  {
    title: "Banking Private Cloud — Nigeria",
    platform: "CICOD Enterprise Cloud",
    partner: "Tier-1 Financial Institution",
    sector: "Banking & Finance",
    description:
      "CICOD Enterprise Cloud Banking Edition deployed as white-label private cloud for a major Nigerian bank. Infrastructure-agnostic, ISO 27001 certified, integrated with core banking systems.",
    outcomes: [
      "Data sovereignty maintained",
      "Regulatory compliance ready",
      "White-label branding",
      "Core banking integration",
    ],
    status: "Live",
    icon: Landmark,
  },
  {
    title: "Oil & Gas ERP Managed Services — Nigeria",
    platform: "SAP & Oracle Managed Services",
    partner: "Major Oil & Gas Operator",
    sector: "Oil & Gas",
    description:
      "SAP and Oracle managed services with bespoke integrated modules built around specialist client Standard Operating Procedures for upstream and downstream operations.",
    outcomes: [
      "24/7 sector-specific SLAs",
      "Non-invasive custom modules",
      "JV accounting automation",
      "Fiscal metering compliance",
    ],
    status: "Live",
    icon: Globe,
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Case Studies</p>
            <h1 className="type-display text-white">
              Deployments that deliver
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive platforms are live across government, utilities,
              banking and enterprise in Nigeria and Kenya. Each deployment follows
              the same sovereign principle: licensee owns the data, Crown provides
              the technology.
            </p>
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

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-xl border border-[#dde2ea] bg-white overflow-hidden transition-all duration-200 hover:border-[#c8d0db] hover:shadow-lg hover:shadow-[#0b1a2e]/5"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="type-eyebrow text-[#e8272a]">{cs.platform}</span>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        cs.status === "Live"
                          ? "border-[#0b1a2e]/20 bg-[#0b1a2e]/5 text-[#0b1a2e]"
                          : "border-[#dde2ea] bg-white text-[#4b5a6e]"
                      }`}
                    >
                      {cs.status}
                    </span>
                  </div>
                  <h2 className="type-h3 text-[#0b1a2e] mb-2">{cs.title}</h2>
                  <div className="flex flex-wrap gap-2 text-sm text-[#4b5a6e] mb-4">
                    <span>Sector: <span className="text-[#0b1a2e] font-medium">{cs.sector}</span></span>
                    <span className="mx-2">•</span>
                    <span>Partner: <span className="text-[#0b1a2e] font-medium">{cs.partner}</span></span>
                  </div>
                  <p className="text-sm text-[#4b5a6e] leading-relaxed mb-6">{cs.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[#4b5a6e]">Key outcomes</h4>
                    <ul className="space-y-1.5">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm text-[#4b5a6e]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pipeline */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Pipeline</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Expanding sovereign infrastructure across Africa
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Uganda", "Zambia", "Ghana"].map((country) => (
              <div key={country} className="rounded-lg border border-[#dde2ea] bg-white p-6 text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8272a]/10 mx-auto">
                  <Globe size={24} className="text-[#e8272a]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0b1a2e]">{country}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e]">
                  Regional expansion — pipeline discussions with sovereign hosting authorities.
                </p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#e8272a]">
                  Pipeline
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Let's talk"
        title="Building critical infrastructure for Africa"
        description="Whether you're a government, a utility, a bank, or a partner — tell us what you're building."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="See our solutions"
        secondaryHref="/solutions"
      />
    </>
  )
}