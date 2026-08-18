import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Shield, Users, Globe, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Government & Public Sector — Sovereign Digital Infrastructure",
  description: "Crown Interactive provides sovereign digital infrastructure for federal and sub-national government. 1Gov platform deployed under G2G model with national hosting authorities.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries/government",
  },
}

const challenges = [
  {
    title: "Data sovereignty",
    description: "Government data must never reside on foreign-controlled infrastructure or be subject to extraterritorial jurisdiction.",
  },
  {
    title: "Interoperability",
    description: "Fragmented systems across MDAs prevent seamless service delivery and citizen experience.",
  },
  {
    title: "Procurement fit",
    description: "Proprietary foreign platforms impose rigid licensing models ill-suited to public-sector budgets and oversight.",
  },
  {
    title: "Operational continuity",
    description: "Mission-critical government services require platforms that cannot be unilaterally suspended by external vendors.",
  },
]

const solutions = [
  {
    icon: Shield,
    title: "1Gov Platform",
    description: "Complete Digital Public Infrastructure suite: SSO, ECMS, Drive, Mail, Memo, Forms, Asset Management, InterMDA, Conference, Support Portal, Citizen Portal.",
    href: "/solutions/1gov",
  },
  {
    icon: Globe,
    title: "G2G Deployment Model",
    description: "Delivered in partnership with sovereign hosting authorities — Galaxy Backbone (Nigeria), Konza/KoTDA (Kenya). Government owns infrastructure and data.",
    href: "/solutions/1gov",
  },
  {
    icon: Users,
    title: "Citizen Paperless Services",
    description: "Digital front-end for government services, reducing physical visits, processing time, and corruption risk.",
    href: "/solutions/1gov",
  },
  {
    icon: Lock,
    title: "Identity & Access",
    description: "Gov SSO & MFA providing centralised authentication across all government systems, integrated with national ID where available.",
    href: "/solutions/1gov",
  },
]

const outcomes = [
  { metric: "Full data sovereignty", label: "Licensee owns all data" },
  { metric: "ISO 27001", label: "Certified stack" },
  { metric: "G2G delivery", label: "Government-to-government" },
  { metric: "Multi-country", label: "Nigeria & Kenya live" },
]

export default function GovernmentIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Industries</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Government & Public Sector</span>
            </div>
            <h1 className="type-display text-white">
              Sovereign digital infrastructure for government
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive builds the technology stack for federal and sub-national
              governments that need full data sovereignty, interoperability, and
              citizen-centric service delivery — deployed on infrastructure the nation
              controls.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact#government" variant="primary" size="lg">
                Talk to our government team
              </Button>
              <Button as="link" href="/solutions/1gov" variant="outline-white" size="lg">
                View 1Gov platform
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
            Governments need digital infrastructure they control
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
            One platform. Every layer. Owned by government.
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
              What sovereign infrastructure delivers
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

      {/* Live deployments */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Live deployments</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Active sovereign partnerships
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                country: "Nigeria",
                partner: "Galaxy Backbone",
                detail: "Federal Government — 1Gov deployed under a G2G mandate across Federal Civil Service MDAs.",
                status: "live",
              },
              {
                country: "Kenya",
                partner: "Konza (KoTDA)",
                detail: "Crown Interactive Kenya — 1Gov partnership with the Konza Technopolis Development Authority.",
                status: "live",
              },
            ].map((d) => (
              <div key={d.country} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-[#0b1a2e]/20 bg-[#0b1a2e]/5 text-[#0b1a2e]">
                    {d.status === "live" ? "● Live" : "○ Pipeline"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0b1a2e]">{d.country}</h3>
                <p className="mt-1 text-sm text-[#4b5a6e]">Partner: <span className="text-[#0b1a2e]">{d.partner}</span></p>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Government enquiries"
        title="Build your sovereign digital infrastructure"
        description="For G2G partnerships, sovereign hosting authorities, and digital public infrastructure programmes."
        primaryLabel="Talk to our government team"
        primaryHref="/contact#government"
        secondaryLabel="See case studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}