import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { getFeatureBySlug } from "@/data/solutionFeatures"
import { ChevronRight, CheckCircle } from "lucide-react"

interface FeaturePageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({
  params,
}: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params
  const feature = getFeatureBySlug(slug[slug.length - 1])

  if (!feature) {
    return {
      title: "Not Found · Crown Interactive",
    }
  }

  return {
    title: `${feature.title} — ${feature.parent} · Crown Interactive`,
    description: feature.description,
    alternates: {
      canonical: `https://www.crowninteractive.com/solutions/${slug.join("/")}`,
    },
  }
}

export default async function SolutionFeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params

  // Only support /solutions/<solution>/<feature> paths
  if (slug.length < 2 || slug.length > 3) {
    notFound()
  }

  const featureSlug = slug[slug.length - 1]
  const feature = getFeatureBySlug(featureSlug)

  if (!feature) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="type-eyebrow text-[#e8272a]">Solutions</span>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <a
                href={feature.parentHref}
                className="type-eyebrow text-white/40 hover:text-white/60 transition-colors"
              >
                {feature.parent}
              </a>
              <ChevronRight size={14} className="text-white/30" aria-hidden />
              <span className="type-eyebrow text-white/40">{feature.title}</span>
            </div>
            <h1 className="type-display text-white">{feature.title}</h1>
            <p className="mt-2 text-lg font-semibold text-white/50">
              {feature.tagline}
            </p>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              {feature.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href={feature.cta.href} variant="primary" size="lg">
                {feature.cta.label}
              </Button>
              <Button as="link" href={feature.parentHref} variant="outline-white" size="lg">
                Back to {feature.parent}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="type-eyebrow text-[#e8272a] mb-3">Overview</p>
              <h2 className="type-h2 text-[#0b1a2e]">
                Part of the {feature.parent} platform
              </h2>
              {feature.overview.map((paragraph, index) => (
                <p key={index} className="mt-4 type-body text-[#4b5a6e]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-lg border border-[#dde2ea] bg-[#f5f6f8] p-8">
              <p className="type-eyebrow text-[#e8272a] mb-4">Capabilities</p>
              <ul className="space-y-3">
                {feature.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-sm text-[#4b5a6e]"
                  >
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-[#e8272a]"
                      aria-hidden
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Sovereignty callout */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <div className="rounded-xl bg-[#0b1a2e] p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-[#e8272a] mb-3">Our principle</p>
              <h2 className="type-h2 text-white">
                Data is always owned by the licensee. Never by Crown.
              </h2>
              <p className="mt-4 type-body text-white/65">
                Crown Interactive designs and develops the platform. We do not operate
                it, and we never hold client data. Every deployment runs on
                infrastructure the licensee owns or trusts, with Crown providing the
                technology layer alone.
              </p>
              <div className="mt-8">
                <Button as="link" href="/why-crown" variant="outline-white">
                  Why sovereignty matters →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Let's talk"
        title={`Discuss ${feature.title}`}
        description="Tell us what you're building. We'll connect you with the right team."
        primaryLabel={feature.cta.label}
        primaryHref={feature.cta.href}
        secondaryLabel="Explore all solutions"
        secondaryHref="/solutions"
      />
    </>
  )
}
