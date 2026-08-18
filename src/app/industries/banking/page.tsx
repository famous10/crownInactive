import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Landmark, Shield, Server, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Banking & Financial Services — Sovereign Private Cloud",
  description: "CICOD Enterprise Cloud Banking Edition provides white-label private cloud for financial institutions, built on the same sovereign engine as 1Gov and CuBOSS.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries/banking",
  },
}

const challenges = [
  {
    title: "Data residency & sovereignty",
    description: "Financial regulators require customer data to remain within national borders, under licensee control.",
  },
  {
    title: "Regulatory compliance",
    description: "CBN, Basel, PCI-DSS and sector-specific mandates demand auditable, certified infrastructure.",
  },
  {
    title: "Vendor lock-in risk",
    description: "Proprietary hyperscaler platforms create concentration risk and limit negotiating leverage.",
  },
  {
    title: "Legacy core integration",
    description: "Banks need cloud platforms that integrate with existing core banking systems without rip-and-replace.",
  },
]

const solutions = [
  {
    icon: Landmark,
    title: "CICOD Banking Edition",
    description: "White-label private cloud for financial institutions. Deployed on infrastructure the bank owns or trusts. Banking-grade security, regulatory compliance ready.",
    href: "/solutions/cicod",
  },
  {
    icon: Shield,
    title: "Sovereign Data Control",
    description: "The licensee owns the infrastructure and all data. Crown provides the technology layer only — never operates the platform or holds banking data.",
    href: "/solutions/cicod",
  },
  {
    icon: Server,
    title: "Infrastructure-Agnostic",
    description: "Deploy on Galaxy Backbone, Konza, on-premise, or any trusted infrastructure. Same platform, same guarantees, any environment.",
    href: "/solutions/cicod",
  },
  {
    icon: Globe,
    title: "ISO 27001 Certified Stack",
    description: "The entire CICOD engine is ISO 27001 certified. Meets financial sector audit and compliance requirements out of the box.",
    href: "/solutions/cicod",
  },
]

const outcomes = [
  { metric: "Data sovereignty", label: "Bank owns all data" },
  { metric: "ISO 27001", label: "Certified stack" },
  { metric: "White-label", label: "Full branding control" },
  { metric: "Core banking ready", label: "Integration APIs" },
]

export default function BankingIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Industries</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Banking & Financial Services</span>
            </div>
            <h1 className="type-display text-white">
              Sovereign private cloud for financial institutions
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              CICOD Enterprise Cloud Banking Edition gives banks a white-label
              private cloud platform built on the same sovereign engine that powers
              national government and utility infrastructure across Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Talk to our banking team
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
            Banks need cloud they control, not cloud that controls them
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
            White-label private cloud. Full sovereignty.
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
              What sovereign banking cloud delivers
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

      {/* Features */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Banking Edition features</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Built for financial institution requirements
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Private cloud deployment",
              "Banking-grade security",
              "Regulatory compliance ready",
              "Data sovereignty maintained",
              "Integration with core banking",
              "White-label branding",
              "Multi-tenant architecture",
              "Infrastructure-agnostic",
              "Scalable licensing",
              "ISO 27001 certified stack",
              "Disaster recovery built-in",
              "24/7 support SLA",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm text-[#4b5a6e]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                {f}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Banking & Finance"
        title="Build your sovereign banking cloud"
        description="For financial institution private cloud, regulatory compliance, and data sovereignty requirements."
        primaryLabel="Talk to our enterprise team"
        primaryHref="/contact"
        secondaryLabel="View CICOD platform"
        secondaryHref="/solutions/cicod"
      />
    </>
  )
}