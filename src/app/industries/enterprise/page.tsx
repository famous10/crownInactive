import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Server, Shield, Globe, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Enterprise & Private Sector — Sovereign Cloud Platform",
  description: "CICOD Enterprise Cloud and CICOD.com provide private or public cloud for large organisations, built on the same sovereign engine as 1Gov and CuBOSS.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries/enterprise",
  },
}

const challenges = [
  {
    title: "Data sovereignty requirements",
    description: "Enterprises with government contracts, regulated data, or IP-sensitive workloads need infrastructure they control.",
  },
  {
    title: "Multi-cloud complexity",
    description: "Managing workloads across providers creates operational overhead, cost unpredictability, and security gaps.",
  },
  {
    title: "Vendor concentration risk",
    description: "Over-reliance on hyperscalers limits negotiating leverage and creates single points of failure.",
  },
  {
    title: "Compliance & audit burden",
    description: "ISO 27001, SOC 2, GDPR, NDPR and sector mandates require platforms with built-in compliance posture.",
  },
]

const solutions = [
  {
    icon: Server,
    title: "CICOD Enterprise Cloud",
    description: "White-label private cloud for large organisations. Deployed on infrastructure the enterprise owns or trusts. Same sovereign engine as 1Gov and CuBOSS.",
    href: "/solutions/cicod",
  },
  {
    icon: Globe,
    title: "CICOD.com Public SaaS",
    description: "Subscription cloud platform for enterprises that want sovereign-grade infrastructure without managing their own deployment.",
    href: "/solutions/cicod",
  },
  {
    icon: Shield,
    title: "Infrastructure-Agnostic",
    description: "Deploy on-premise, at Galaxy Backbone, Konza, or any trusted colocation. One platform, consistent operations, any environment.",
    href: "/solutions/cicod",
  },
  {
    icon: Lock,
    title: "ISO 27001 Certified Stack",
    description: "The entire CICOD engine is ISO 27001 certified. Meets enterprise audit requirements and reduces compliance overhead.",
    href: "/solutions/cicod",
  },
]

const outcomes = [
  { metric: "Data sovereignty", label: "Licensee owns all data" },
  { metric: "ISO 27001", label: "Certified stack" },
  { metric: "Multi-deploy", label: "Any infrastructure" },
  { metric: "White-label", label: "Full branding control" },
]

export default function EnterpriseIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Industries</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Enterprise & Private Sector</span>
            </div>
            <h1 className="type-display text-white">
              Sovereign cloud for enterprise
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              CICOD Enterprise Cloud and CICOD.com give large organisations the same
              sovereign engine that powers national government and utility
              infrastructure — shaped for private sector requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Talk to our enterprise team
              </Button>
              <Button as="link" href="/solutions/cicod" variant="outline-white" size="lg">
                View CICOD platform
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
            Enterprises need cloud they control
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
            One engine. Private or public. Always sovereign.
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
              What sovereign enterprise cloud delivers
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

      {/* Editions */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Editions</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Choose your deployment model
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                title: "CICOD Enterprise Cloud (Private)",
                description: "White-label private cloud deployed on infrastructure you own or trust. Full control, full sovereignty, ISO 27001 certified.",
                features: [
                  "Private cloud deployment",
                  "Infrastructure-agnostic",
                  "White-label branding",
                  "Multi-tenant architecture",
                  "ISO 27001 certified",
                  "24/7 support SLA",
                ],
              },
              {
                title: "CICOD.com (Public SaaS)",
                description: "Subscription sovereign cloud platform. No infrastructure management. Same engine, same guarantees, operated by Crown on trusted infrastructure.",
                features: [
                  "Public SaaS delivery",
                  "Zero infrastructure ops",
                  "Sovereign data centres",
                  "ISO 27001 certified",
                  "Scalable per-seat licensing",
                  "Enterprise SLAs",
                ],
              },
            ].map((e) => (
              <div key={e.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e]">{e.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{e.description}</p>
                <ul className="mt-4 space-y-2">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#4b5a6e]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Enterprise sector"
        title="Build your sovereign enterprise cloud"
        description="For private cloud, public SaaS, and managed services enquiries."
        primaryLabel="Talk to our enterprise team"
        primaryHref="/contact"
        secondaryLabel="View CICOD platform"
        secondaryHref="/solutions/cicod"
      />
    </>
  )
}