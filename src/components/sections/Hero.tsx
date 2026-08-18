import Link from "next/link"
import Container from "@/components/ui/Container"
import { layerStack } from "@/data/solutions"
import { ArrowRight } from "lucide-react"

const africaMap = (
  <svg
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-full text-white/10"
  >
    <path
      d="M100 10 C60 10 30 40 25 80 C20 110 25 140 30 160 C35 180 30 200 40 220 C50 240 70 260 90 275 C100 282 110 285 120 280 C140 270 160 250 170 225 C180 200 178 175 175 155 C172 135 165 115 165 95 C165 65 155 35 100 10Z"
      fill="currentColor"
    />
  </svg>
)

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0b1a2e] py-20 md:py-28 lg:py-32"
      aria-label="Hero"
    >
      {/* Layer stack badges - horizontal at top */}
      <Container>
        <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-2" role="img" aria-label="Technology stack layers">
          {layerStack.map((layer, i) => (
            <span
              key={layer.label}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: `rgba(255,255,255,${0.25 + i * 0.12})` }}
            >
              {layer.label}
            </span>
          ))}
          <span className="text-xs text-white/25 ml-auto hidden md:inline">
            Every layer is licensee-owned. Crown builds the stack; it never holds what runs on it.
          </span>
        </div>
      </Container>

      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(232,39,42,0.04) 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: content */}
          <div>
            <p className="type-eyebrow text-[#e8272a] mb-4">
              Sovereign Digital Public Infrastructure
            </p>

            <h1 className="type-display text-white max-w-xl">
              One platform.{" "}
              <span className="block">Every layer.</span>
              <span className="block">Owned by you, always.</span>
            </h1>

            <p className="mt-6 type-body-lg text-white/65 max-w-lg">
              Crown Interactive builds the sovereign technology stack behind
              governments, utilities and enterprises across Africa: 1Gov, CuBOSS
              and CICOD Enterprise Cloud, engineered so the data never leaves the
              licensee&apos;s hands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded bg-[#e8272a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c01e21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8272a]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1a2e]"
              >
                Explore our solutions
              </Link>
              <Link
                href="/why-crown"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                Why sovereignty matters{" "}
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right: Africa map */}
          <div className="hidden lg:block relative w-full max-w-md mx-auto lg:mx-0">
            <div className="aspect-[2/3] max-w-md">
              {africaMap}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}