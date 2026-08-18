import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

export default function NotFound() {
  return (
    <section className="flex-1 bg-[#0b1a2e] py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="type-eyebrow text-[#e8272a] mb-4">404</p>
          <h1 className="type-display text-white">Page not found</h1>
          <p className="mt-5 type-body-lg text-white/65">
            We couldn&apos;t find the page you were looking for. It may have been moved,
            renamed, or is temporarily unavailable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button as="link" href="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button as="link" href="/contact" variant="outline-white" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
