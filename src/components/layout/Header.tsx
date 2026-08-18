import Link from "next/link"
import Container from "@/components/ui/Container"
import DesktopNav from "@/components/navigation/DesktopNav"
import MobileNav from "@/components/navigation/MobileNav"
import Button from "@/components/ui/Button"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dde2ea] bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Crown Interactive home"
          >
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#0b1a2e]">CROWN</span>
              <span className="text-[#e8272a]">interactive</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <DesktopNav />

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button as="link" href="/contact" variant="primary" size="sm">
              Get in touch
            </Button>
          </div>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
