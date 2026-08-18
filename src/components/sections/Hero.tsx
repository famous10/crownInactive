import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { layerStack } from "@/data/solutions"

const africaMap = (
  <svg
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-full text-white/5"
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
      className="relative overflow-hidden bg-crown-navy py-20 md:py-28 lg:py-32"
      aria-label="Hero"
    >
      {/* Faint Africa map watermark behind the right side */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-end lg:flex"
        aria-hidden
      >
        <div className="aspect-[2/3] h-full max-h-[90%]">{africaMap}</div>
      </div>

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
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: content */}
          <div>
            <p className="type-eyebrow text-crown-red mb-4">
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

            <div className="mt-8">
              <Button as="link" href="/solutions" variant="primary" size="lg">
                Explore our solutions
              </Button>
            </div>
          </div>

          {/* Right: stacked horizontal bar chart */}
          <div className="relative w-full">
            <div
              className="space-y-3"
              role="img"
              aria-label="Technology stack layers"
            >
              {layerStack.map((layer, i) => {
                // Top bar darkest, progressively lighter toward the bottom.
                const opacity = 0.16 + i * 0.08
                return (
                  <div key={layer.label} className="flex items-center gap-4">
                    <div
                      className="relative h-11 rounded-md md:h-12"
                      style={{
                        width: layer.width,
                        backgroundColor: `rgba(255,255,255,${opacity})`,
                      }}
                    >
                      <span
                        className="absolute left-0 top-0 h-full w-1.5 rounded-l-md bg-crown-red"
                        aria-hidden
                      />
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white/50">
                      {layer.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="mt-6 type-caption text-white/40 max-w-md">
              Every layer is licensee-owned. Crown builds the stack; it never
              holds what runs on it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
