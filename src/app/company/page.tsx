import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { Building2, Users, Award, Globe, Calendar, Shield, CheckCircle } from "lucide-react"
import {
  boardNigeria,
  boardKenya,
  managementTeam,
  companyFacts,
  divisions,
} from "@/data/company"

export const metadata: Metadata = {
  title: "About Crown Interactive — Sovereign Digital Infrastructure",
  description: "Founded in 2005, headquartered in Lagos. Crown Interactive builds sovereign digital public infrastructure for African governments, utilities and enterprises: 1Gov, CuBOSS, CICOD Enterprise Cloud.",
  alternates: {
    canonical: "https://www.crowninteractive.com/company",
  },
}

const history = [
  { year: "2005", title: "Founded", description: "Crown Interactive founded in London by Wumi Oghoetuoma. Computer Science graduate, Kingston University. Vision: enterprise-grade technology tailored to the African market." },
  { year: "2012", title: "Restructured for Africa", description: "Company restructured and headquartered in Lagos, Nigeria. Shift to sovereign digital infrastructure focus." },
  { year: "2015", title: "CuBOSS launches", description: "Revenue Cycle Management platform for electricity distribution companies. First NESI DisCo deployments begin." },
  { year: "2018", title: "1Gov conception", description: "Development begins on sovereign Digital Public Infrastructure platform for African governments." },
  { year: "2021", title: "Galaxy Backbone partnership", description: "1Gov G2G partnership with Galaxy Backbone (Nigeria sovereign hosting authority). Federal Civil Service deployment begins." },
  { year: "2023", title: "Kenya expansion", description: "Crown Interactive Kenya established. 1Gov partnership with Konza Technopolis Development Authority (KoTDA)." },
  { year: "2024", title: "CICOD Enterprise Cloud", description: "White-label private cloud and public SaaS for banking and enterprise, built on the same sovereign engine." },
  { year: "2025", title: "ISO 27001 certification", description: "Full technology stack across 1Gov, CuBOSS and CICOD achieves ISO 27001 certification." },
]

const values = [
  {
    icon: Shield,
    title: "Sovereignty First",
    description: "Data is always owned by the licensee. Never by Crown. This is not negotiable — it is architectural principle.",
  },
  {
    icon: CheckCircle,
    title: "African Operational Reality",
    description: "Built for the constraints and requirements of African governments, utilities and enterprises. Not adapted from elsewhere.",
  },
  {
    icon: Globe,
    title: "Government-to-Government",
    description: "Sovereign platforms delivered in partnership with national hosting authorities. Technology transfer, not vendor lock-in.",
  },
  {
    icon: Award,
    title: "Product Over Projects",
    description: "Configurable platforms, not customisation debt. Continuous evolution, not handover-and-leave.",
  },
  {
    icon: Users,
    title: "Capability Transfer",
    description: "Training Academy, Graduate Technology Accelerator, 1Gov Academy — building local sovereign technology capability.",
  },
  {
    icon: Building2,
    title: "Long-Term Partnership",
    description: "We succeed when the licensee succeeds. Multi-year relationships, not transactional engagements.",
  },
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">About Crown Interactive</p>
            <h1 className="type-display text-white">
              Founded in London.{" "}
              <span className="block">Built for Africa.</span>
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive builds sovereign digital public infrastructure for
              African governments, utilities and enterprises. 1Gov, CuBOSS and
              CICOD Enterprise Cloud — one sovereign engine, multiple platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="#board" variant="primary" size="lg">
                Meet the Board
              </Button>
              <Button as="link" href="/careers" variant="outline-white" size="lg">
                Join the team
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

      {/* Company Facts */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {[
              { label: "Founded", value: companyFacts.founded, icon: Calendar },
              { label: "Restructured", value: companyFacts.restructured, icon: Building2 },
              { label: "HQ", value: companyFacts.hq, icon: Globe },
              { label: "Registration", value: companyFacts.registration, icon: Award },
              { label: "Certification", value: companyFacts.certification, icon: Shield },
              { label: "Nigeria Board", value: `${boardNigeria.length} Directors`, icon: Users },
              { label: "Kenya Board", value: `${boardKenya.length} Directors`, icon: Globe },
              { label: "Management", value: `${managementTeam.length} Leaders`, icon: Users },
            ].map((fact) => (
              <div key={fact.label} className="text-center p-4">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5 mx-auto">
                  <fact.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <div className="text-2xl font-bold text-[#0b1a2e]">{fact.value}</div>
                <div className="text-xs text-[#8898aa] uppercase tracking-wide">{fact.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Our journey</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            From London startup to Africa&apos;s sovereign infrastructure partner
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#dde2ea] hidden lg:block" />
            <div className="space-y-10">
              {history.map((h) => (
                <div key={h.year} className="relative flex gap-6">
                  <div className="relative flex-shrink-0 lg:flex lg:justify-end lg:pr-8 lg:w-1/2">
                    <div className="absolute right-0 top-4 w-3 h-3 rounded-full bg-[#e8272a] border-4 border-white z-10 lg:right-[-10px]" />
                    <div className="bg-white rounded-lg border border-[#dde2ea] p-6 lg:w-[90%]">
                      <div className="type-eyebrow text-[#e8272a] mb-1">{h.year}</div>
                      <h3 className="text-lg font-bold text-[#0b1a2e]">{h.title}</h3>
                      <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                  <div className="flex-1 lg:pl-8 lg:pt-4" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Our values</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Six principles that guide every decision
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <v.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Divisions */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Business divisions</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Five divisions. One sovereign engine.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <div key={d.name} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-sm font-bold text-[#0b1a2e]">{d.name}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Board Nigeria */}
      <section id="board" className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Board of Directors</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-8">
            Crown Interactive Nigeria
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {boardNigeria.map((member) => (
              <div key={member.name} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#e8272a]">{member.role}</p>
                <p className="mt-3 text-sm text-[#4b5a6e] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Board Kenya */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-8">
            Crown Interactive Kenya
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {boardKenya.map((member) => (
              <div key={member.name} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#e8272a]">{member.role}</p>
                <p className="mt-3 text-sm text-[#4b5a6e] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Management Team</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Leading the divisions
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {managementTeam.map((member) => (
              <div key={member.name} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <h3 className="text-base font-bold text-[#0b1a2e]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#e8272a]">{member.role}</p>
                <p className="mt-3 text-sm text-[#4b5a6e] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission/Vision */}
      <section className="py-20 bg-[#0b1a2e]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12">
              <p className="type-eyebrow text-[#e8272a] mb-3">Mission</p>
              <h2 className="type-h2 text-white mb-4">
                To build the sovereign technology stack
                <br />
                behind every African government, utility
                <br />
                and enterprise.
              </h2>
              <p className="type-body text-white/65">
                Crown Interactive exists so that African nations and organisations
                own their digital infrastructure — the data, the systems, the
                future. We build the platform; they own what runs on it.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12">
              <p className="type-eyebrow text-[#e8272a] mb-3">Vision</p>
              <h2 className="type-h2 text-white mb-4">
                An Africa where every government
                <br />
                and enterprise controls its digital
                <br />
                destiny.
              </h2>
              <p className="type-body text-white/65">
                No foreign data residency risk. No vendor lock-in at the
                infrastructure layer. No platform that operates the licensee.
                Sovereign by design, African by origin, proven at scale.
              </p>
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
        secondaryLabel="Join the team"
        secondaryHref="/careers"
      />
    </>
  )
}