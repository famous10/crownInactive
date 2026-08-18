import Link from "next/link"
import Container from "@/components/ui/Container"
import { Mail, Phone, MapPin, Link2, MessageSquare } from "lucide-react"

const footerSolutions = [
  { label: "1Gov", href: "/solutions/1gov" },
  { label: "CuBOSS", href: "/solutions/cuboss" },
  { label: "CICOD Enterprise Cloud", href: "/solutions/cicod" },
  { label: "Training & Capability", href: "/company#training" },
]

const footerCompany = [
  { label: "Why Crown", href: "/why-crown" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/company" },
  { label: "Careers", href: "/careers" },
]

const footerIndustries = [
  { label: "Government", href: "/industries/government" },
  { label: "Utilities & Energy", href: "/industries/utilities" },
  { label: "Banking & Finance", href: "/industries/banking" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "Enterprise", href: "/industries/enterprise" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2e] text-white">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr]">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">CROWN</span>
                <span className="text-[#e8272a]">interactive</span>
              </span>
            </Link>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/40">
              Maximizing Potential Value
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              Sovereign Digital Public Infrastructure for African governments
              and utilities. Founded 2005. Headquartered in Lagos.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="https://maps.google.com/?q=45B+Admiralty+Road,+Lekki+Phase+1,+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
                <span>45B Admiralty Road, Lekki Phase 1, Lagos</span>
              </a>
              <a
                href="tel:+2341454 1977"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={14} className="shrink-0 text-white/40" />
                +234 (1) 454 1977
              </a>
              <a
                href="mailto:info@crowninteractive.com"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={14} className="shrink-0 text-white/40" />
                info@crowninteractive.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com/company/crown-interactive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Crown Interactive on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-colors"
              >
                <Link2 size={14} />
              </a>
              <a
                href="https://twitter.com/crowninteractive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Crown Interactive on Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-colors"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerSolutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerIndustries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact#general"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  General enquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#partner"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#government"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Government enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Crown Interactive Limited. RC 795100.
              ISO 27001 certified. Data always owned by the licensee.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
