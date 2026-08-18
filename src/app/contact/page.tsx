import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import ContactForm from "@/components/contact/ContactForm"
import { ChevronRight, Mail, Phone, MapPin, Building2, Globe, Users, Shield } from "lucide-react"

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
      <ContactForm />

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