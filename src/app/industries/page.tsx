import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import { industries } from "@/data/industries"
import Link from "next/link"
import { Building2, Zap, Landmark, Gauge, Server, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries — Government, Utilities, Banking, Oil & Gas, Enterprise",
  description: "Crown Interactive serves government, utilities & energy, banking & finance, oil & gas, and enterprise sectors with sovereign digital infrastructure platforms.",
  alternates: {
    canonical: "https://www.crowninteractive.com/industries",
  },
}

const iconMap: Record<string, React.ElementType> = {
  "building-2": Building2,
  zap: Zap,
  landmark: Landmark,
  gauge: Gauge,
  server: Server,
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Industries</p>
            <h1 className="type-display text-white">
              Engaged across government,
              <br />
              energy and enterprise
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive works alongside sovereign hosting authorities,
              electricity distribution companies, and enterprise clients on
              critical technology infrastructure across Nigeria and Kenya.
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

      {/* Industry Cards */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Sector engagement"
            title="Engaged across government, energy and enterprise"
            description="Crown Interactive works alongside sovereign hosting authorities, electricity distribution companies, and enterprise clients on critical technology infrastructure across Nigeria and Kenya."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Server
              return (
                <Link
                  key={industry.id}
                  href={industry.href}
                  className="group relative rounded-lg border border-[#dde2ea] bg-white p-6 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-lg hover:shadow-[#0b1a2e]/5"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                    <Icon size={24} className="text-[#0b1a2e]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b1a2e] mb-2">{industry.title}</h3>
                  <p className="text-sm text-[#4b5a6e] leading-relaxed mb-6 line-clamp-3">{industry.description}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] group-hover:gap-2.5 transition-all">
                    {industry.solution}
                    <ArrowRight size={14} aria-hidden />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <div className="space-y-20">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Server
              return (
                <div key={industry.id} className="rounded-xl border border-[#dde2ea] bg-white p-8 md:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                          <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                        </div>
                        <div>
                          <p className="type-eyebrow text-[#e8272a]">{industry.solution}</p>
                          <h3 className="type-h3 text-[#0b1a2e]">{industry.title}</h3>
                        </div>
                      </div>
                      <p className="type-body text-[#4b5a6e] max-w-lg">{industry.description}</p>
                      <div className="mt-6">
                        <Link
                          href={industry.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] hover:text-[#c01e21] transition-colors"
                        >
                          Explore {industry.title} <ArrowRight size={14} aria-hidden />
                        </Link>
                      </div>
                    </div>
                    <div className="hidden lg:block flex items-center justify-center">
                      <div className="relative w-[200px] h-[200px]">
                        <svg
                          viewBox="0 0 200 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full opacity-50"
                          aria-hidden
                        >
                          <circle cx="100" cy="100" r="90" stroke="#e8272a" strokeWidth="2" strokeDasharray="565" strokeDashoffset="565" fill="none" style={{ strokeDasharray: 565, strokeDashoffset: 0 }} />
                          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#e8272a" opacity="0.3">
                            {industry.title.split(" ").map(w => w[0]).join("")}
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1a2e] py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="type-eyebrow text-[#e8272a] mb-3">Let&apos;s talk</p>
            <h2 className="type-h2 text-white">
              Building critical infrastructure for Africa
            </h2>
            <p className="mt-4 type-body text-white/65">
              Whether you&apos;re a government, a utility, a bank, or a partner — tell
              us what you&apos;re building.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-[#e8272a] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#c01e21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8272a]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1a2e]"
              >
                Talk to our team
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-base font-semibold text-white/70 transition-colors hover:text-white"
              >
                See our platforms <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}