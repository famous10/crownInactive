import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import { solutions, layerStack } from "@/data/solutions"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions — 1Gov, CuBOSS, CICOD Enterprise Cloud",
  description: "Crown Interactive builds three sovereign platforms: 1Gov for government, CuBOSS for utilities, CICOD Enterprise Cloud for banking and enterprise. All on one sovereign engine.",
  alternates: {
    canonical: "https://www.crowninteractive.com/solutions",
  },
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Solutions</p>
            <h1 className="type-display text-white">
              Three platforms.
              <br />
              <span className="text-[#e8272a]">One sovereign engine.</span>
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive builds 1Gov, CuBOSS and CICOD Enterprise Cloud —
              each deployed on infrastructure the licensee owns or trusts. Data is
              always owned by the licensee. Never by Crown.
            </p>
          </div>
        </Container>
      </section>

      {/* Layer stack */}
      <section className="bg-[#071020] py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              A layered enterprise architecture
            </span>
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

      {/* Platform Cards */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Three platforms, one sovereign engine"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group relative rounded-lg border border-[#dde2ea] bg-white p-8 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-lg hover:shadow-[#0b1a2e]/5"
              >
                <div className="mb-4">
                  <span className="type-eyebrow text-[#e8272a]">{solution.sector}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0b1a2e] mb-2">{solution.title}</h3>
                <p className="text-base font-medium text-[#4b5a6e] mb-4">{solution.tagline}</p>
                <p className="text-sm text-[#4b5a6e] leading-relaxed mb-6 line-clamp-3">{solution.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {solution.features.slice(0, 4).map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded border border-[#dde2ea] text-[#4b5a6e]">
                      {f}
                    </span>
                  ))}
                  {solution.features.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded border border-[#dde2ea] text-[#8898aa]">
                      +{solution.features.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight size={14} aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Principle */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="type-eyebrow text-[#e8272a] mb-3">Our principle</p>
              <h2 className="type-h2 text-[#0b1a2e] max-w-lg">
                Data is always owned by the licensee.{" "}
                <span className="text-[#e8272a]">Never by Crown.</span>
              </h2>
              <p className="mt-5 type-body text-[#4b5a6e] max-w-lg">
                Crown Interactive designs and develops the platform. We do not
                operate it, and we never hold client data. Every deployment —
                government, utility or enterprise — runs on infrastructure the
                licensee owns or trusts, with Crown providing the technology layer
                alone.
              </p>
              <div className="mt-8">
                <Link
                  href="/why-crown"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] hover:text-[#c01e21] transition-colors"
                >
                  Why sovereignty matters <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-[#dde2ea] bg-white p-8">
              <div className="space-y-4">
                {layerStack.map((layer, i) => (
                  <div key={layer.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-[#0b1a2e]">{layer.label}</span>
                      <span className="text-xs text-[#8898aa]">Licensee-owned</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#eceef2]">
                      <div
                        className="h-full rounded-full bg-[#0b1a2e]"
                        style={{
                          width: layer.width,
                          opacity: 0.15 + i * 0.17,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-[#8898aa] leading-relaxed">
                Infrastructure-agnostic. ISO 27001 certified. Data ownership,
                always.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Deployments */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Where we operate"
            title="Live in Nigeria. Expanding across Africa."
          />

          <div className="mt-12">
            <div className="rounded-xl border border-[#dde2ea] bg-[#f5f6f8] p-8 md:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="type-eyebrow text-[#e8272a] mb-3">Live deployments</p>
                  <h3 className="type-h3 text-[#0b1a2e] mb-4">
                    Active sovereign partnerships
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      { label: "Nigeria", partner: "Galaxy Backbone" },
                      { label: "Kenya", partner: "Konza (KoTDA)" },
                    ].map((d) => (
                      <span key={d.label} className="inline-flex items-center rounded-full border border-[#0b1a2e]/20 bg-[#0b1a2e]/5 px-3.5 py-1.5 text-xs font-semibold text-[#0b1a2e]">
                        {d.label} — {d.partner}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "Uganda" },
                      { label: "Zambia" },
                      { label: "Ghana" },
                    ].map((d) => (
                      <span key={d.label} className="inline-flex items-center rounded-full border border-[#dde2ea] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4b5a6e]">
                        {d.label} — Pipeline
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="relative w-[260px] h-[360px]">
                    <svg
                      viewBox="0 0 260 360"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                      aria-label="Africa map showing Crown Interactive deployments"
                      role="img"
                    >
                      <path
                        d="M130 18 C100 18 72 28 55 48 C38 68 32 95 30 118 C28 140 32 162 38 180 C44 198 42 218 52 238 C62 258 80 278 100 295 C115 308 125 316 135 312 C148 306 162 292 172 274 C182 256 184 236 182 216 C180 196 174 178 172 158 C170 136 168 112 176 92 C184 72 194 50 175 30 C162 16 146 18 130 18Z"
                        fill="#eceef2"
                        stroke="#dde2ea"
                        strokeWidth="1.5"
                      />
                      <circle cx="95" cy="195" r="6" fill="#e8272a" />
                      <circle cx="95" cy="195" r="12" fill="#e8272a" opacity="0.2" />
                      <circle cx="155" cy="210" r="6" fill="#e8272a" />
                      <circle cx="155" cy="210" r="12" fill="#e8272a" opacity="0.2" />
                      <circle cx="148" cy="195" r="5" fill="#e8272a" opacity="0.35" />
                      <circle cx="145" cy="240" r="5" fill="#e8272a" opacity="0.35" />
                      <circle cx="95" cy="183" r="5" fill="#e8272a" opacity="0.35" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
              Whether you&apos;re a government, a utility, a bank, or a partner &mdash; tell
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
                href="/why-crown"
                className="inline-flex items-center gap-2 text-base font-semibold text-white/70 transition-colors hover:text-white"
              >
                Why sovereignty matters <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}