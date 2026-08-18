import type { Metadata } from "next"
import Container from "@/components/ui/Container"

export const metadata: Metadata = {
  title: "Privacy Policy — Crown Interactive",
  description: "Crown Interactive Privacy Policy. How we collect, use, and protect your personal data. Compliance with NDPR, GDPR and applicable data protection laws.",
  alternates: {
    canonical: "https://www.crowninteractive.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Legal</p>
            <h1 className="type-display text-white">
              Privacy Policy
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Last updated: January 2025. Crown Interactive Limited (&ldquo;Crown&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data.
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

      {/* Content */}
      <section className="py-20 bg-white">
        <Container narrow>
          <article className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">1. Data Controller</h2>
              <p className="type-body text-[#4b5a6e]">
                Crown Interactive Limited, RC 795100, registered at 45B Admiralty
                Road, Lekki Phase 1, Lagos, Nigeria. Email: info@crowninteractive.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">2. Data We Collect</h2>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li><strong>Contact form data:</strong> Name, email, organisation, enquiry type, message.</li>
                <li><strong>Technical data:</strong> IP address, browser type, operating system, referral source, pages visited, time spent.</li>
                <li><strong>Cookies:</strong> Essential session cookies, analytics cookies (with consent).</li>
                <li><strong>Correspondence:</strong> Emails and communications you send to us.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">3. Lawful Basis (NDPR / GDPR)</h2>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li><strong>Legitimate interest:</strong> Responding to enquiries, improving our website, security.</li>
                <li><strong>Consent:</strong> Marketing communications, non-essential analytics cookies.</li>
                <li><strong>Contract:</strong> Processing necessary for contractual relationships.</li>
                <li><strong>Legal obligation:</strong> Compliance with applicable laws.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">4. How We Use Your Data</h2>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>Route and respond to your enquiry.</li>
                <li>Improve our website and services.</li>
                <li>Send relevant communications (with consent).</li>
                <li>Comply with legal obligations.</li>
                <li>Security and fraud prevention.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">5. Data Sharing</h2>
              <p className="type-body text-[#4b5a6e] mb-3">
                We do not sell your personal data. We may share data with:
              </p>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>Internal teams who need it to handle your enquiry.</li>
                <li>Service providers (hosting, analytics, email) under data processing agreements.</li>
                <li>Legal authorities when required by law.</li>
                <li>Professional advisers (legal, audit) under confidentiality.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">6. International Transfers</h2>
              <p className="type-body text-[#4b5a6e]">
                Our website is hosted on infrastructure in Nigeria and Kenya. Any
                international transfer relies on adequacy decisions, standard
                contractual clauses, or your explicit consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">7. Data Retention</h2>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>Contact form submissions: 2 years from last interaction.</li>
                <li>Analytics data: 26 months (Google Analytics default).</li>
                <li>Correspondence: 6 years for legal/contractual compliance.</li>
                <li>Technical logs: 12 months for security.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">8. Your Rights (NDPR / GDPR)</h2>
              <p className="type-body text-[#4b5a6e] mb-3">You have the right to:</p>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>Access your personal data.</li>
                <li>Rectify inaccurate data.</li>
                <li>Erasure (&ldquo;right to be forgotten&rdquo;) where applicable.</li>
                <li>Restrict processing.</li>
                <li>Data portability.</li>
                <li>Object to processing based on legitimate interest.</li>
                <li>Withdraw consent at any time.</li>
                <li>Lodge a complaint with NDPB (Nigeria) or relevant supervisory authority.</li>
              </ul>
              <p className="mt-4 type-body text-[#4b5a6e]">
                To exercise these rights, email: privacy@crowninteractive.com
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">9. Cookies</h2>
              <p className="type-body text-[#4b5a6e] mb-3">
                We use essential cookies for site functionality. With your consent,
                we use analytics cookies (Google Analytics) to understand site
                usage. You can manage preferences via your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">10. Security</h2>
              <p className="type-body text-[#4b5a6e]">
                Crown Interactive is ISO 27001 certified. We implement
                appropriate technical and organisational measures to protect
                personal data against unauthorised access, loss, or alteration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">11. Children&apos;s Data</h2>
              <p className="type-body text-[#4b5a6e]">
                Our services are not directed at children under 16. We do not
                knowingly collect data from children. If you believe we have,
                contact us and we will delete it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">12. Changes to This Policy</h2>
              <p className="type-body text-[#4b5a6e]">
                We may update this policy. Material changes will be posted on
                this page with an updated &ldquo;Last updated&rdquo; date. Continued use
                constitutes acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">13. Contact</h2>
              <p className="type-body text-[#4b5a6e]">
                Data Protection Officer: privacy@crowninteractive.com<br />
                Crown Interactive Limited, 45B Admiralty Road, Lekki Phase 1,
                Lagos, Nigeria.
              </p>
            </section>
          </article>
        </Container>
      </section>
    </>
  )
}