import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import { industries } from "@/data/industries"
import Link from "next/link"
import { Building2, Zap, Landmark, Gauge, Server, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "building-2": Building2,
  zap: Zap,
  landmark: Landmark,
  gauge: Gauge,
  server: Server,
}

export default function SectorSection() {
  return (
    <section
      className="bg-[#f5f6f8] py-20"
      aria-labelledby="sector-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Sector engagement"
          title="Engaged across government, energy and enterprise"
          description="Crown Interactive works alongside sovereign hosting authorities, electricity distribution companies, and enterprise clients on critical technology infrastructure across Nigeria and Kenya."
          id="sector-heading"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Server
            return (
              <Link
                key={industry.id}
                href={industry.href}
                className="group rounded-lg border border-[#dde2ea] bg-white p-6 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-md hover:shadow-[#0b1a2e]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8272a]/60"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <Icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed line-clamp-3">
                  {industry.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#e8272a]">
                  {industry.solution}
                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
