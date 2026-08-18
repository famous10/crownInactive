import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { CheckCircle, Shield, Globe, Users, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "1Gov — Sovereign Digital Public Infrastructure",
  description:
    "1Gov is Crown Interactive's Digital Public Infrastructure suite for national and sub-national governments. Full stack: identity, collaboration, document management, and citizen services.",
  alternates: {
    canonical: "https://www.crowninteractive.com/solutions/1gov",
  },
}

const modules = [
  { name: "Gov SSO & MFA", description: "Centralised single sign-on with multi-factor authentication across all government systems." },
  { name: "ECMS", description: "Enterprise Content Management System for government documents, records and archives." },
  { name: "Drive", description: "Secure, sovereign cloud storage for government files and documents." },
  { name: "Mail", description: "Government email infrastructure hosted on licensee-controlled servers." },
  { name: "Memo", description: "Internal government correspondence and memo management." },
  { name: "Forms", description: "Digital form creation and submission for internal and citizen-facing services." },
  { name: "Asset Management", description: "Government asset register, tracking and lifecycle management." },
  { name: "InterMDA", description: "Inter-Ministerial / Inter-Departmental Authority communication and workflow." },
  { name: "Conference & Chat", description: "Secure government conferencing and real-time communication platform." },
  { name: "1Gov Support Portal", description: "Help desk and support ticketing for government users." },
  { name: "Citizen Paperless Service Portal", description: "Citizen-facing portal for digital government services and applications." },
]

const whyMatters = [
  {
    icon: Shield,
    title: "Full sovereignty",
    description: "No foreign data residency risk. The government owns the infrastructure and the data.",
  },
  {
    icon: Globe,
    title: "Interoperability",
    description: "Built to integrate with national ID, HR and payroll systems across agencies.",
  },
  {
    icon: Users,
    title: "Affordability",
    description: "Flexible licensing suited to public-sector budgets. G2G delivery model.",
  },
  {
    icon: CheckCircle,
    title: "Proven at scale",
    description: "Active in Federal Civil Service deployments, expanding across Africa.",
  },
]

export default function OnGovPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Solutions</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">1Gov</span>
            </div>
            <h1 className="type-display text-white">
              1Gov
            </h1>
            <p className="mt-2 text-lg font-semibold text-white/50">
              Sovereign Digital Public Infrastructure for government.
            </p>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              A complete, infrastructure-agnostic government cloud platform, built
              so nations own their data, their systems, and their digital future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact#government" variant="primary" size="lg">
                Talk to our government team
              </Button>
              <Button as="link" href="/case-studies" variant="outline-white" size="lg">
                See deployments
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="type-eyebrow text-[#e8272a] mb-3">Overview</p>
              <h2 className="type-h2 text-[#0b1a2e]">
                Built on one non-negotiable principle
              </h2>
              <p className="mt-4 type-body text-[#4b5a6e]">
                1Gov is Crown Interactive&apos;s Digital Public Infrastructure suite for
                national and sub-national governments. It provides the full stack a
                modern civil service needs — identity, collaboration, document
                management, and citizen services — deployed on infrastructure the
                government already controls or trusts.
              </p>
              <p className="mt-4 type-body text-[#4b5a6e]">
                Unlike proprietary foreign platforms, data is always owned by the
                licensee, never by Crown. Crown designs and develops the platform; it
                does not operate it or hold government data.
              </p>
            </div>
            <div className="rounded-lg border border-[#dde2ea] bg-[#f5f6f8] p-8">
              <p className="type-eyebrow text-[#e8272a] mb-4">Deployment model</p>
              <h3 className="type-h3 text-[#0b1a2e] mb-3">
                Government-to-Government, by design
              </h3>
              <p className="type-body-sm text-[#4b5a6e]">
                1Gov is typically delivered in partnership with a national sovereign
                hosting authority — for example, Galaxy Backbone in Nigeria, or Konza
                (KoTDA) in Kenya. This keeps the platform on trusted national
                infrastructure, with Crown providing the technology while government
                retains full sovereignty over data and operations.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-lg border border-[#dde2ea] bg-white px-4 py-3">
                  <div className="h-8 w-8 rounded bg-[#f5f6f8] flex items-center justify-center text-[10px] font-bold text-[#0b1a2e]">G</div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b1a2e]">Galaxy Backbone</div>
                    <div className="text-xs text-[#8898aa] uppercase tracking-wide">Nigeria</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-[#dde2ea] bg-white px-4 py-3">
                  <div className="h-8 w-8 rounded bg-[#f5f6f8] flex items-center justify-center text-[10px] font-bold text-[#0b1a2e]">K</div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b1a2e]">Konza (KoTDA)</div>
                    <div className="text-xs text-[#8898aa] uppercase tracking-wide">Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modules */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Core modules</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Everything a civil service runs on, in one suite
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="rounded-lg border border-[#dde2ea] bg-white p-5"
              >
                <h3 className="text-sm font-bold text-[#0b1a2e]">{mod.name}</h3>
                <p className="mt-1.5 text-sm text-[#4b5a6e] leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Why it matters</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Full sovereignty. Full ownership.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyMatters.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-sm font-bold text-[#0b1a2e]">{title}</h3>
                <p className="mt-1.5 text-sm text-[#4b5a6e] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Government enquiries"
        title="Let's build your sovereign digital infrastructure"
        description="For G2G partnerships and sovereign hosting authorities."
        primaryLabel="Talk to our government team"
        primaryHref="/contact#government"
        secondaryLabel="See case studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
