import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { ChevronRight, Mail, Phone, MapPin, Send, Building2, Globe, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — Crown Interactive",
  description: "Get in touch with Crown Interactive. General enquiries, partnerships, government enquiries, careers. Headquarters: 45B Admiralty Road, Lekki Phase 1, Lagos.",
  alternates: {
    canonical: "https://www.crowninteractive.com/contact",
  },
}

const contactInfo = [
  {
    id: "general",
    icon: Mail,
    title: "General Enquiries",
    description: "For all general enquiries about Crown Interactive, our platforms, and services.",
    email: "info@crowninteractive.com",
    href: "mailto:info@crowninteractive.com",
  },
  {
    id: "partner",
    icon: Users,
    title: "Partner with Us",
    description: "For partnership proposals, channel partner enquiries, and ecosystem collaboration.",
    email: "partnerships@crowninteractive.com",
    href: "mailto:partnerships@crowninteractive.com",
  },
  {
    id: "government",
    icon: Building2,
    title: "Government Enquiries",
    description: "For sovereign hosting authorities, government agencies, and G2G partnership discussions.",
    email: "government@crowninteractive.com",
    href: "mailto:government@crowninteractive.com",
  },
  {
    id: "careers",
    icon: Globe,
    title: "Careers",
    description: "For recruitment enquiries and open applications. See /careers for current roles.",
    email: "careers@crowninteractive.com",
    href: "mailto:careers@crowninteractive.com",
  },
]

const offices = [
  {
    country: "Nigeria (HQ)",
    address: "45B Admiralty Road, Lekki Phase 1, Lagos",
    phone: "+234 (1) 454 1977",
    email: "info@crowninteractive.com",
    mapsUrl: "https://maps.google.com/?q=45B+Admiralty+Road,+Lekki+Phase+1,+Lagos",
  },
  {
    country: "Kenya",
    address: "Konza Technopolis, Machakos County",
    phone: "+254 700 000 000",
    email: "kenya@crowninteractive.com",
    mapsUrl: "https://maps.google.com/?q=Konza+Technopolis,+Machakos+County,+Kenya",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Contact</p>
            <h1 className="type-display text-white">
              Let&apos;s talk
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Whether you&apos;re a government, a utility, a bank, or a partner — tell us
              what you&apos;re building. We&apos;ll connect you with the right team.
            </p>
          </div>
        </Container>
      </section>

      {/* Layer stack */}
      <section className="bg-[#071020] py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {["Experience", "Applications", "Integration", "Data", "Infrastructure"].map((layer, i) => (
              <span key={layer} className="text-xs font-semibold uppercase tracking-widest" style={{ color: `rgba(255,255,255,${0.25 + i * 0.12})` }}>
                {layer}
              </span>
            ))}
            <span className="text-xs text-white/25 ml-auto hidden md:inline">
              Every layer is licensee-owned. Crown builds the stack; it never holds what runs on it.
            </span>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Get in touch</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Choose the right channel for your enquiry
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c) => (
              <a
                key={c.id}
                href={c.href}
                className="rounded-lg border border-[#dde2ea] bg-white p-6 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-md hover:shadow-[#0b1a2e]/5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <c.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{c.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#e8272a] flex items-center gap-1.5">
                  {c.email}
                  <ChevronRight size={14} aria-hidden />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <p className="type-eyebrow text-[#e8272a] mb-3">Or send us a message</p>
            <h2 className="type-h2 text-[#0b1a2e] mb-8">
              We&apos;ll route it to the right team
            </h2>
            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0b1a2e] mb-1.5">
                    Full name <span className="text-[#e8272a]" aria-hidden>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-[#dde2ea] bg-white px-4 py-3 text-sm text-[#0b1a2e] placeholder:text-[#8898aa] focus:border-[#e8272a] focus:outline-none focus:ring-2 focus:ring-[#e8272a]/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0b1a2e] mb-1.5">
                    Email <span className="text-[#e8272a]" aria-hidden>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-[#dde2ea] bg-white px-4 py-3 text-sm text-[#0b1a2e] placeholder:text-[#8898aa] focus:border-[#e8272a] focus:outline-none focus:ring-2 focus:ring-[#e8272a]/20 transition-colors"
                    placeholder="you@organisation.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organisation" className="block text-sm font-semibold text-[#0b1a2e] mb-1.5">
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  autoComplete="organization"
                  className="w-full rounded-lg border border-[#dde2ea] bg-white px-4 py-3 text-sm text-[#0b1a2e] placeholder:text-[#8898aa] focus:border-[#e8272a] focus:outline-none focus:ring-2 focus:ring-[#e8272a]/20 transition-colors"
                  placeholder="Your organisation"
                />
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-sm font-semibold text-[#0b1a2e] mb-1.5">
                  Enquiry type <span className="text-[#e8272a]" aria-hidden>*</span>
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  className="w-full rounded-lg border border-[#dde2ea] bg-white px-4 py-3 text-sm text-[#0b1a2e] focus:border-[#e8272a] focus:outline-none focus:ring-2 focus:ring-[#e8272a]/20 transition-colors appearance-none"
                >
                  <option value="">Select enquiry type</option>
                  <option value="government">Government / Sovereign hosting authority</option>
                  <option value="utility">Utility / Electricity distribution</option>
                  <option value="banking">Banking / Financial services</option>
                  <option value="enterprise">Enterprise / Private sector</option>
                  <option value="partner">Partnership / Channel partner</option>
                  <option value="careers">Careers / Recruitment</option>
                  <option value="media">Media / Press</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0b1a2e] mb-1.5">
                  Message <span className="text-[#e8272a]" aria-hidden>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-[#dde2ea] bg-white px-4 py-3 text-sm text-[#0b1a2e] placeholder:text-[#8898aa] focus:border-[#e8272a] focus:outline-none focus:ring-2 focus:ring-[#e8272a]/20 transition-colors resize-y min-h-[120px]"
                  placeholder="Tell us what you're building..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#dde2ea] text-[#e8272a] focus:ring-[#e8272a] focus:ring-2"
                />
                <label htmlFor="privacy" className="text-sm text-[#4b5a6e]">
                  I have read and agree to the <a href="/privacy" className="text-[#e8272a] hover:underline">Privacy Policy</a> and consent to Crown Interactive processing my data for this enquiry.
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                <Send size={18} aria-hidden />
                Send message
              </Button>

              <p className="text-xs text-[#8898aa] text-center">
                By submitting, you agree to our Privacy Policy. We never share your data with third parties.
              </p>
            </form>
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Our offices</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Headquartered in Lagos. Operating across Africa.
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {offices.map((office) => (
              <div key={office.country} className="rounded-lg border border-[#dde2ea] bg-white p-6 md:p-8">
                <h3 className="text-lg font-bold text-[#0b1a2e]">{office.country}</h3>
                <div className="mt-6 space-y-4">
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-[#4b5a6e] hover:text-[#0b1a2e] transition-colors"
                  >
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[#e8272a]" aria-hidden />
                    <span>{office.address}</span>
                  </a>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-[#4b5a6e] hover:text-[#0b1a2e] transition-colors"
                  >
                    <Phone size={18} className="shrink-0 text-[#e8272a]" aria-hidden />
                    <span>{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 text-sm text-[#4b5a6e] hover:text-[#0b1a2e] transition-colors"
                  >
                    <Mail size={18} className="shrink-0 text-[#e8272a]" aria-hidden />
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Government enquiries",
                description: "G2G partnerships, sovereign hosting, Digital Public Infrastructure",
                href: "/contact#government",
              },
              {
                icon: Shield,
                title: "Utility partnerships",
                description: "CuBOSS for NESI DisCos, revenue cycle management",
                href: "/contact",
              },
              {
                icon: Globe,
                title: "Enterprise & Banking",
                description: "CICOD Enterprise Cloud, private cloud, managed services",
                href: "/contact",
              },
            ].map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="rounded-lg border border-[#dde2ea] bg-white p-6 transition-all duration-200 hover:border-[#c8d0db] hover:shadow-md hover:shadow-[#0b1a2e]/5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <link.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{link.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{link.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#e8272a] flex items-center gap-1.5">
                  Get in touch
                  <ChevronRight size={14} aria-hidden />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}