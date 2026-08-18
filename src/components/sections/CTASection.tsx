import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

interface CTASectionProps {
  eyebrow?: string
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  light?: boolean
}

export default function CTASection({
  eyebrow = "Get started",
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  light = false,
}: CTASectionProps) {
  if (light) {
    return (
      <section className="bg-[#f5f6f8] py-20" aria-label="Call to action">
        <Container>
          <div className="rounded-xl bg-[#0b1a2e] px-8 py-14 text-center md:px-16">
            {eyebrow && (
              <p className="type-eyebrow text-[#e8272a] mb-3">{eyebrow}</p>
            )}
            <h2 className="type-h2 text-white max-w-xl mx-auto">{title}</h2>
            <p className="mt-4 type-body text-white/65 max-w-lg mx-auto">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="link" href={primaryHref} variant="primary" size="lg">
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button
                  as="link"
                  href={secondaryHref}
                  variant="outline-white"
                  size="lg"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="bg-[#0b1a2e] py-24" aria-label="Call to action">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {eyebrow && (
            <p className="type-eyebrow text-[#e8272a] mb-3">{eyebrow}</p>
          )}
          <h2 className="type-h2 text-white">{title}</h2>
          <p className="mt-4 type-body text-white/65">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as="link" href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                as="link"
                href={secondaryHref}
                variant="outline-white"
                size="lg"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
