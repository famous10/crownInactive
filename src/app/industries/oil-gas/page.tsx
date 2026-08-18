import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Gauge, Wrench, Database, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "Oil & Gas — SAP & Oracle Managed Services",
  description: "Crown Interactive provides SAP and Oracle Managed Services with bespoke integrated modules for oil and gas sector clients, built around specialist Standard Operating Procedures.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries/oil-gas",
  },
}

const challenges = [
  {
    title: "Specialist operational complexity",
    description: "Oil & gas operations require deep domain knowledge — upstream, midstream, downstream — each with distinct workflows and regulatory frameworks.",
  },
  {
    title: "ERP customisation debt",
    description: "Heavy customisation of SAP/Oracle creates upgrade risk, knowledge silos, and dependency on scarce specialist talent.",
  },
  {
    title: "Data integrity & compliance",
    description: "Joint venture accounting, PSC compliance, DPR/PRC reporting, and fiscal metering demand absolute data accuracy and audit trails.",
  },
  {
    title: "24/7 operational continuity",
    description: "Production systems cannot afford downtime. Managed services must provide round-the-clock support with sector-specific SLAs.",
  },
]

const solutions = [
  {
    icon: Gauge,
    title: "SAP Managed Services",
    description: "End-to-end SAP operations: basis, application management, upgrades, security, and 24/7 support — tailored to oil & gas SOPs.",
    href: "/solutions/cicod",
  },
  {
    icon: Wrench,
    title: "Oracle Managed Services",
    description: "Oracle EBS, Fusion, and database administration managed by specialists who understand upstream/midstream/downstream workflows.",
    href: "/solutions/cicod",
  },
  {
    icon: Database,
    title: "Bespoke Integrated Modules",
    description: "Custom modules built around client Standard Operating Procedures — extending ERP capability without creating upgrade-blocking customisation.",
  },
  {
    icon: Server,
    title: "Sector-Specific SOPs",
    description: "Managed services delivery aligned to oil & gas operational rhythms: turnaround management, JV accounting, production reporting, fiscal compliance.",
  },
]

const outcomes = [
  { metric: "SAP & Oracle", label: "Full stack managed" },
  { metric: "Oil & Gas SOPs", label: "Specialist processes" },
  { metric: "Bespoke modules", label: "Non-invasive extensions" },
  { metric: "24/7 support", label: "Sector SLAs" },
]

export default function OilGasIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Industries</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Oil & Gas</span>
            </div>
            <h1 className="type-display text-white">
              SAP & Oracle Managed Services for oil & gas
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive supports the enterprise systems oil & gas organisations
              already run — with managed services and bespoke modules built around
              specialist Standard Operating Procedures.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Talk to our oil & gas team
              </Button>
              <Button as="link" href="/solutions/cicod" variant="outline-white" size="lg">
                View CICOD platform
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

      {/* Challenges */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">The challenge</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Oil & gas needs ERP partners who speak the language
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
            Managed services with oil & gas DNA
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
              What specialist managed services deliver
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

      {/* Service scope */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Service scope</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Complete ERP operations coverage
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "SAP Basis Administration",
              "SAP Application Management",
              "SAP Security & Authorisations",
              "SAP Upgrade & Migration",
              "Oracle EBS Administration",
              "Oracle Fusion Support",
              "Oracle Database Administration",
              "Custom Module Development",
              "JV Accounting Automation",
              "Production Reporting",
              "Fiscal Metering Compliance",
              "Turnaround Management Support",
              "24/7 Incident Management",
              "Change & Release Management",
              "Performance Optimisation",
              "Disaster Recovery Testing",
            ].map((s) => (
              <div key={s} className="flex items-start gap-3 text-sm text-[#4b5a6e]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                {s}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Oil & Gas sector"
        title="Partner with oil & gas ERP specialists"
        description="For SAP and Oracle managed services with bespoke modules built around your SOPs."
        primaryLabel="Talk to our oil & gas team"
        primaryHref="/contact"
        secondaryLabel="View CICOD platform"
        secondaryHref="/solutions/cicod"
      />
    </>
  )
}