import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { Shield, Globe, Users, CheckCircle, Lock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Crown — Sovereign by Design",
  description: "Crown Interactive builds sovereign digital public infrastructure for African governments, utilities and enterprises. Data always owned by the licensee. Never by Crown.",
  alternates: {
    canonical: "https://www.crowninteractive.com/why-crown",
  },
}

const principles = [
  {
    icon: Lock,
    title: "Data sovereignty — non-negotiable",
    description: "The licensee owns the infrastructure and all data. Crown designs and develops the platform; it does not operate it and never holds client data. This is not a policy — it is architectural principle.",
  },
  {
    icon: Shield,
    title: "Infrastructure-agnostic by design",
    description: "1Gov, CuBOSS, and CICOD deploy on Galaxy Backbone, Konza, on-premise, or any trusted colocation. The platform is identical; only the substrate changes. No vendor lock-in at the infrastructure layer.",
  },
  {
    icon: Globe,
    title: "Government-to-Government delivery",
    description: "Sovereign platforms are delivered in partnership with national hosting authorities — Galaxy Backbone (Nigeria), Konza/KoTDA (Kenya). This keeps infrastructure on trusted national substrate with Crown providing technology alone.",
  },
  {
    icon: Users,
    title: "Built for African operational reality",
    description: "Designed for the constraints and requirements of African governments, utilities and enterprises: power instability, connectivity variance, regulatory specificity, budget cycles, and talent ecosystems.",
  },
  {
    icon: CheckCircle,
    title: "Proven at national scale",
    description: "1Gov runs Federal Civil Service deployments in Nigeria. CuBOSS manages revenue cycles for millions of electricity customers across NESI DisCos. CICOD powers banking and enterprise private clouds.",
  },
  {
    icon: Award,
    title: "ISO 27001 certified stack",
    description: "The entire Crown technology stack — across all three platforms — is ISO 27001 certified. Security is not an add-on; it is the foundation.",
  },
]

const differentiators = [
  {
    title: "Crown vs. Hyperscalers",
    items: [
      "Hyperscalers: you rent infrastructure; Crown: you own it",
      "Hyperscalers: data subject to foreign jurisdiction; Crown: data never leaves licensee control",
      "Hyperscalers: standardised services; Crown: shaped to sovereign/regulatory requirements",
      "Hyperscalers: operate the platform; Crown: builds the stack, licensee operates",
    ],
  },
  {
    title: "Crown vs. Traditional SI / Vendors",
    items: [
      "Traditional SI: project-based, handover, knowledge loss; Crown: product platform, continuous evolution",
      "Traditional SI: customisation = technical debt; Crown: configurable product, no customisation debt",
      "Traditional SI: often foreign-owned IP; Crown: African-founded, African-built, IP retained in Africa",
      "Traditional SI: single-point delivery; Crown: platform + training academy + capability transfer",
    ],
  },
  {
    title: "Crown vs. SaaS Vendors",
    items: [
      "SaaS: multi-tenant, shared infrastructure; Crown: single-tenant or private cloud, dedicated",
      "SaaS: vendor holds data; Crown: licensee holds data, always",
      "SaaS: roadmap dictated by vendor; Crown: roadmap shaped by licensee requirements",
      "SaaS: exit is hard; Crown: licensee owns the platform instance, exit is trivial",
    ],
  },
]

const businessModel = [
  { name: "GovTech / DPI", description: "1Gov sovereign deployments for African governments." },
  { name: "SaaS", description: "Subscription cloud products (CICOD.com)." },
  { name: "White Label / Enterprise Private Cloud", description: "CICOD Enterprise Cloud for banking and enterprise." },
  { name: "Utility BSS/OSS", description: "CuBOSS, the Revenue Cycle Management platform for NESI DisCos." },
  { name: "Training Academy", description: "1Gov Academy, CuBOSS Training, Crown Digital Skills Institute, Graduate Technology Accelerator." },
]

export default function WhyCrownPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Why Crown</p>
            <h1 className="type-display text-white">
              Sovereign by design.{" "}
              <span className="block">African by origin.</span>
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive is not a reseller, not a systems integrator, and not a
              SaaS vendor. We build sovereign technology platforms — 1Gov, CuBOSS,
              CICOD — and deploy them on infrastructure the licensee owns or trusts.
              Data is always owned by the licensee. Never by Crown.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/solutions" variant="primary" size="lg">
                See our platforms
              </Button>
              <Button as="link" href="/company" variant="outline-white" size="lg">
                About Crown
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Core principles</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Six principles that define everything we build
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <p.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">How we&apos;re different</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Not a hyperscaler. Not an SI. Not a SaaS vendor.
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e] mb-4">{d.title}</h3>
                <ul className="space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#4b5a6e]">
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

      {/* Business Model */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Business model</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Five divisions. One sovereign engine.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessModel.map((d) => (
              <div key={d.name} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-sm font-bold text-[#0b1a2e]">{d.name}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Principle - Visual */}
      <section className="py-20 bg-[#0b1a2e]">
        <Container>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="type-eyebrow text-[#e8272a] mb-3">Our principle</p>
            <h2 className="type-h2 text-white max-w-2xl mb-6">
              Data is always owned by the licensee.{" "}
              <span className="text-[#e8272a]">Never by Crown.</span>
            </h2>
            <p className="type-body text-white/65 max-w-xl">
              Crown Interactive designs and develops the platform. We do not operate
              it, and we never hold client data. Every deployment — government,
              utility or enterprise — runs on infrastructure the licensee owns or
              trusts, with Crown providing the technology layer alone.
            </p>
            <div className="mt-8">
              <Button as="link" href="/solutions" variant="outline-white">
                See the platforms →
              </Button>
            </div>
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