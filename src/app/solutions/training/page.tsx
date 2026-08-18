import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { ChevronRight, GraduationCap, Users, Zap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Training & Capability — Crown Interactive",
  description:
    "Crown Interactive's capability transfer programmes: 1Gov Academy, CuBOSS Training, Crown Digital Skills Institute and the Graduate Technology Accelerator.",
  alternates: {
    canonical: "https://www.crowninteractive.com/solutions/training",
  },
}

const programmes = [
  {
    icon: GraduationCap,
    title: "1Gov Academy",
    description:
      "Digital skills and platform certification for government teams deploying and operating 1Gov sovereign infrastructure.",
    audience: "Government IT teams, civil servants, system administrators",
    topics: [
      "1Gov platform administration",
      "Digital government service delivery",
      "Sovereign cloud operations",
      "Security and identity management",
    ],
  },
  {
    icon: Zap,
    title: "CuBOSS Training",
    description:
      "Revenue cycle management training for utility operations, finance, customer care and field teams using CuBOSS.",
    audience: "DisCo operations, billing, collections and customer service teams",
    topics: [
      "CuBOSS end-to-end operations",
      "Billing and collections workflows",
      "Metering and revenue assurance",
      "Reporting and regulatory returns",
    ],
  },
  {
    icon: Users,
    title: "Crown Digital Skills Institute",
    description:
      "Broad technology upskilling for professionals and organisations adopting sovereign digital platforms.",
    audience: "Technology professionals, partners, enterprise clients",
    topics: [
      "Cloud and infrastructure fundamentals",
      "Enterprise application management",
      "Data governance and security",
      "Digital transformation programme delivery",
    ],
  },
  {
    icon: Briefcase,
    title: "Graduate Technology Accelerator",
    description:
      "Early-career engineering and technology programme building the next generation of African sovereign technology talent.",
    audience: "Graduates and young professionals in technology",
    topics: [
      "Software engineering and architecture",
      "Cloud operations and DevOps",
      "Product and platform delivery",
      "Mentorship and career development",
    ],
  },
]

const whyMatters = [
  {
    title: "Capability transfer, not dependency",
    description:
      "Every Crown deployment includes structured training so licensee teams can operate, extend and govern their own platforms.",
  },
  {
    title: "Built for African realities",
    description:
      "Curricula are shaped around the operational contexts, regulatory requirements and infrastructure constraints our clients face.",
  },
  {
    title: "Continuous learning",
    description:
      "Training evolves with the platform. New modules are added as 1Gov, CuBOSS and CICOD Enterprise Cloud capabilities expand.",
  },
]

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Solutions</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">Training & Capability</span>
            </div>
            <h1 className="type-display text-white">Training & Capability</h1>
            <p className="mt-2 text-lg font-semibold text-white/50">
              Building sovereign technology capability across Africa.
            </p>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Capability transfer is part of every Crown deployment. From government
              digital academies to utility operations training and graduate engineering
              programmes, we invest in the people who run Africa&apos;s digital
              infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/contact" variant="primary" size="lg">
                Talk to our training team
              </Button>
              <Button as="link" href="/company" variant="outline-white" size="lg">
                About Crown
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Programmes</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Four capability-building paths
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {programmes.map(({ icon: Icon, title, description, audience, topics }) => (
              <div
                key={title}
                className="rounded-lg border border-[#dde2ea] bg-white p-6 md:p-8"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#0b1a2e]">{title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#8898aa]">
                  For: {audience}
                </div>
                <ul className="mt-4 space-y-2">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-[#4b5a6e]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]"
                        aria-hidden
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Why it matters</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Sovereignty requires capable local teams
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMatters.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#dde2ea] bg-white p-6"
              >
                <h3 className="text-base font-bold text-[#0b1a2e]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Training enquiries"
        title="Build capability with us"
        description="For 1Gov Academy, CuBOSS Training, enterprise upskilling and graduate programme enquiries."
        primaryLabel="Talk to our training team"
        primaryHref="/contact"
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions"
      />
    </>
  )
}
