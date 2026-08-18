import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { layerStack } from "@/data/solutions"

export default function PrincipleSection() {
  return (
    <section className="bg-[#f5f6f8] py-20" aria-labelledby="principle-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="type-eyebrow text-[#e8272a] mb-3">Our principle</p>
            <h2
              id="principle-heading"
              className="type-h2 text-[#0b1a2e] max-w-lg"
            >
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
              <Button as="link" href="/why-crown" variant="ghost">
                Why sovereignty matters →
              </Button>
            </div>
          </div>

          {/* Architecture visual */}
          <div className="rounded-lg border border-[#dde2ea] bg-white p-8">
            <div className="space-y-4">
              {layerStack.map((layer, i) => (
                <div key={layer.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#0b1a2e]">
                      {layer.label}
                    </span>
                    <span className="text-xs text-[#8898aa]">
                      Licensee-owned
                    </span>
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
  )
}
