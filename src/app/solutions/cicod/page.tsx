import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, Building2, Landmark, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "CICOD Enterprise Cloud — White-label Private Cloud and SaaS",
  description:
    "CICOD Enterprise Cloud is Crown Interactive's white-label private cloud and public SaaS platform for banking and enterprise, built on the same sovereign engine as 1Gov and CuBOSS.",
  alternates: {
    canonical: "https://www.crowninteractive.com/solutions/cicod",
  },
}

const editions = [
  {
    icon: Landmark,
    title: "Banking Edition",
    description:
      "White-label private cloud for financial institutions. Built on the same sovereign engine that powers government and utility deployments, adapted for banking regulatory requirements.",
    features: [
      "Private cloud deployment",
      "Banking-grade security",
      "Regulatory compliance ready",
      "Data sovereignty maintained",
      "Integration with core banking",
      "White-label branding",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Edition",
    description:
      "Private or public cloud for large organisations. CICOD Enterprise Cloud and CICOD.com give enterprises the same sovereign engine shaped to private sector requirements.",
    features: [
      "Private or public cloud",
      "CICOD.com public SaaS",
      "Enterprise-grade SLAs",
      "Multi-tenant architecture",
      "Infrastructure-agnostic",
      "Scalable licensing",
    ],
  },
  {
    icon: Server,
    title: "SAP & Oracle Managed Services",
    description:
      "For Oil & Gas sector clients — supporting the enterprise systems these organisations already run, rather than replacing them. Bespoke integrated modules built to specialist SOPs.",
    features: [
      "SAP Managed Services",
      "Oracle Managed Services",
      "Bespoke integrated modules",
      "Oil & Gas specialist SOPs",
      "Ongoing support & admin",
      "Sector expertise",
    ],
  },
]

export default function CICODPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Solutions</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">CICOD Enterprise Cloud</span>
            </div>
            <h1 className="type-display text-white">CICOD Enterprise Cloud</h1>
            <p className="mt-2 text-lg font-semibold text-white/50">
              White-label private cloud and public SaaS.
            </p>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Built for banking and enterprise on the same sovereign engine that
              powers 1Gov and CuBOSS. Deployable on infrastructure the licensee
              already owns or trusts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Talk to our enterprise team
              </Button>
              <Button as="link" href="/industries/banking" variant="outline-white" size="lg">
                Banking & Finance
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
              The same sovereign engine, shaped for enterprise
            </h2>
            <p className="mt-4 type-body text-[#4b5a6e]">
              CICOD Enterprise Cloud is Crown Interactive&apos;s white-label private cloud
              and public SaaS platform for banking and enterprise clients. It is built
              on the same technology foundation that powers 1Gov for national
              governments and CuBOSS for electricity distribution companies — a
              battle-tested, sovereign platform deployed at national scale.
            </p>
            <p className="mt-4 type-body text-[#4b5a6e]">
              As with all Crown platforms, CICOD is infrastructure-agnostic and
              ISO 27001 certified. The licensee owns their data. Crown builds and
              maintains the technology stack; it never operates the platform or holds
              client data.
            </p>
          </div>
        </Container>
      </section>

      {/* Editions */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Editions</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            One engine. Multiple editions.
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {editions.map(({ icon: Icon, title, description, features }) => (
              <div
                key={title}
                className="rounded-lg border border-[#dde2ea] bg-white p-8"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0b1a2e]">{title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">
                  {description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {features.map((f) => (
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

      {/* Principle callout */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-xl bg-[#0b1a2e] p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-[#e8272a] mb-3">Our principle</p>
              <h2 className="type-h2 text-white">
                Infrastructure-agnostic. ISO 27001 certified. Data owned by the licensee.
              </h2>
              <p className="mt-4 type-body text-white/65">
                Crown provides the technology layer. You own what runs on it —
                the infrastructure, the data, the platform. Always.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button as="link" href="/why-crown" variant="outline-white">
                  Why sovereignty matters →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Enterprise enquiries"
        title="Build your sovereign enterprise cloud"
        description="For banking, enterprise private cloud and managed services enquiries."
        primaryLabel="Talk to our enterprise team"
        primaryHref="/contact"
        secondaryLabel="Industries overview"
        secondaryHref="/industries"
      />
    </>
  )
}
