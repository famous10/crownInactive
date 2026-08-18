import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { deployments } from "@/data/company"

export default function DeploymentsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="deployments-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: content */}
          <div>
            <p className="type-eyebrow text-[#e8272a] mb-3">Where we operate</p>
            <h2
              id="deployments-heading"
              className="type-h2 text-[#0b1a2e]"
            >
              Live in Nigeria.{" "}
              <span className="block">Expanding across Africa.</span>
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {deployments.map((d) => (
                <span
                  key={d.country}
                  className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                    d.status === "live"
                      ? "border-[#0b1a2e]/20 bg-[#0b1a2e]/5 text-[#0b1a2e]"
                      : "border-[#dde2ea] bg-white text-[#4b5a6e]"
                  }`}
                >
                  {d.country}
                  {d.partner && (
                    <span className="ml-1 opacity-60">
                      {" "}
                      — with {d.partner}
                    </span>
                  )}
                  {d.status === "pipeline" && (
                    <span className="ml-1 opacity-50">— pipeline</span>
                  )}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button as="link" href="/case-studies" variant="ghost">
                See deployments →
              </Button>
            </div>

            {/* Legend */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#e8272a]" />
                <span className="text-xs text-[#4b5a6e]">
                  Live — Nigeria, Kenya
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#e8272a]/30" />
                <span className="text-xs text-[#4b5a6e]">
                  Pipeline — Uganda, Zambia, Ghana
                </span>
              </div>
            </div>
          </div>

          {/* Right: Africa map (SVG schematic) */}
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
                {/* Simplified Africa continent shape */}
                <path
                  d="M130 18 C100 18 72 28 55 48 C38 68 32 95 30 118 C28 140 32 162 38 180 C44 198 42 218 52 238 C62 258 80 278 100 295 C115 308 125 316 135 312 C148 306 162 292 172 274 C182 256 184 236 182 216 C180 196 174 178 172 158 C170 136 168 112 176 92 C184 72 194 50 175 30 C162 16 146 18 130 18Z"
                  fill="#eceef2"
                  stroke="#dde2ea"
                  strokeWidth="1.5"
                />
                {/* Nigeria marker — approximately West Africa */}
                <circle cx="95" cy="195" r="6" fill="#e8272a" />
                <circle
                  cx="95"
                  cy="195"
                  r="12"
                  fill="#e8272a"
                  opacity="0.2"
                />
                {/* Kenya marker — approximately East Africa */}
                <circle cx="155" cy="210" r="6" fill="#e8272a" />
                <circle
                  cx="155"
                  cy="210"
                  r="12"
                  fill="#e8272a"
                  opacity="0.2"
                />
                {/* Uganda marker */}
                <circle cx="148" cy="195" r="5" fill="#e8272a" opacity="0.35" />
                {/* Zambia marker */}
                <circle cx="145" cy="240" r="5" fill="#e8272a" opacity="0.35" />
                {/* Ghana marker */}
                <circle cx="95" cy="183" r="5" fill="#e8272a" opacity="0.35" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hosting partners */}
        <div className="mt-14">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8898aa] mb-5">
            Sovereign Hosting Partners
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Galaxy Backbone", country: "Nigeria" },
              { name: "Konza (KoTDA)", country: "Kenya" },
            ].map((p) => (
              <div
                key={p.name}
                className="inline-flex items-center gap-3 rounded-lg border border-[#dde2ea] bg-white px-5 py-3.5"
              >
                <div className="h-8 w-8 rounded bg-[#f5f6f8] flex items-center justify-center text-[10px] font-bold text-[#4b5a6e]">
                  {p.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0b1a2e]">
                    {p.name}
                  </div>
                  <div className="text-xs text-[#8898aa] uppercase tracking-wide">
                    {p.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
