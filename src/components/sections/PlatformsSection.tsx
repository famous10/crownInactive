import Link from "next/link"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import { solutions } from "@/data/solutions"
import { ArrowRight, Building2, Zap, Server, GraduationCap } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Government: Building2,
  Utilities: Zap,
  "Enterprise & Banking": Server,
  Training: GraduationCap,
}

export default function PlatformsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="platforms-heading">
      <Container>
        <SectionHeading
          eyebrow="What we build"
          title="Three platforms, one sovereign engine"
          id="platforms-heading"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 3).map((solution) => {
            const Icon = iconMap[solution.sector] ?? Server
            return (
              <Link
                key={solution.id}
                href={solution.href}
                className="group relative rounded-lg border border-[#dde2ea] bg-white p-6 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-lg hover:shadow-[#0b1a2e]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8272a]/60"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                    <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#e8272a]">
                      {solution.sector}
                    </p>
                    <h3 className="text-lg font-bold text-[#0b1a2e]">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#4b5a6e] mb-4">
                  {solution.tagline}
                </p>
                <p className="text-sm text-[#4b5a6e] leading-relaxed line-clamp-3">
                  {solution.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {solution.features.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded border border-[#dde2ea] text-[#4b5a6e]"
                    >
                      {f}
                    </span>
                  ))}
                  {solution.features.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded border border-[#dde2ea] text-[#8898aa]">
                      +{solution.features.length - 4} more
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#e8272a] group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight size={14} aria-hidden />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}