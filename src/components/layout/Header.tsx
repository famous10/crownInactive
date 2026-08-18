import Link from "next/link"
import Container from "@/components/ui/Container"
import DesktopNav from "@/components/navigation/DesktopNav"
import MobileNav from "@/components/navigation/MobileNav"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1a2f4a] bg-[#0b1a2e]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none hover:opacity-80 transition-opacity"
            aria-label="Crown Interactive home"
          >
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">CROWN</span>
              <span className="text-crown-red">interactive</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-white/40">
              Maximizing Potential Value
            </span>
          </Link>

          {/* Desktop Nav */}
          <DesktopNav />

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
