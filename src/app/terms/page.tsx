import type { Metadata } from "next"
import Container from "@/components/ui/Container"

export const metadata: Metadata = {
  title: "Terms of Use — Crown Interactive",
  description: "Crown Interactive Terms of Use. Governs use of our website, platforms (1Gov, CuBOSS, CICOD), and services. Applicable law: Federal Republic of Nigeria.",
  alternates: {
    canonical: "https://www.crowninteractive.com/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Legal</p>
            <h1 className="type-display text-white">
              Terms of Use
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Last updated: January 2025. By accessing crowninteractive.com and
              Crown Interactive platforms, you agree to these terms.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <Container narrow>
          <article className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">1. Acceptance of Terms</h2>
              <p className="type-body text-[#4b5a6e]">
                By accessing or using crowninteractive.com (&ldquo;Website&rdquo;) or any Crown
                Interactive platform &mdash; 1Gov, CuBOSS, CICOD Enterprise Cloud
                (collectively, &ldquo;Platforms&rdquo;) &mdash; you agree to be bound by these Terms
                of Use (&ldquo;Terms&rdquo;). If you do not agree, do not use the Website or
                Platforms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">2. Entity</h2>
              <p className="type-body text-[#4b5a6e]">
                Crown Interactive Limited (&ldquo;Crown&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a company
                incorporated in Nigeria (RC 795100), with registered office at 45B
                Admiralty Road, Lekki Phase 1, Lagos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">3. Platform Licensing</h2>
              <p className="type-body text-[#4b5a6e] mb-3">
                1Gov, CuBOSS, and CICOD Enterprise Cloud are proprietary platforms
                licensed to customers (&ldquo;Licensees&rdquo;) under separate written agreements.
                These Terms govern only the public Website; Platform use is governed
                by the applicable licence agreement.
              </p>
              <p className="type-body text-[#4b5a6e]">
                Key principle: <strong>Data is always owned by the Licensee. Never by Crown.</strong>
                Crown provides the technology layer; it does not operate the Platform
                or hold Licensee data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">4. Intellectual Property</h2>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>All content on the Website (text, graphics, logos, code, design) is owned by Crown or licensed to Crown.</li>
                <li>&ldquo;Crown Interactive&rdquo;, &ldquo;1Gov&rdquo;, &ldquo;CuBOSS&rdquo;, &ldquo;CICOD&rdquo;, and associated logos are trademarks of Crown Interactive Limited.</li>
                <li>No licence is granted to use Crown&apos;s IP without prior written consent.</li>
                <li>Licensees retain all rights to their data and content on the Platforms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">5. Acceptable Use</h2>
              <p className="type-body text-[#4b5a6e] mb-3">You agree not to:</p>
              <ul className="space-y-3 type-body text-[#4b5a6e] list-disc list-inside">
                <li>Use the Website for unlawful purposes.</li>
                <li>Attempt to gain unauthorised access to any Crown system.</li>
                <li>Interfere with Website security or availability.</li>
                <li>Scrape, crawl, or index the Website without permission.</li>
                <li>Transmit malware, viruses, or harmful code.</li>
                <li>Impersonate Crown or any third party.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">6. No Warranty</h2>
              <p className="type-body text-[#4b5a6e]">
                The Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
                of any kind, express or implied, including merchantability, fitness
                for a particular purpose, non-infringement, or uninterrupted access.
                Platform SLAs are defined in the applicable licence agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">7. Limitation of Liability</h2>
              <p className="type-body text-[#4b5a6e]">
                To the maximum extent permitted by law, Crown shall not be liable for
                any indirect, incidental, special, consequential, or punitive
                damages, or loss of profits, data, or business opportunities,
                arising from use of the Website. Liability for Platforms is governed
                by the applicable licence agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">8. Indemnification</h2>
              <p className="type-body text-[#4b5a6e]">
                You agree to indemnify and hold Crown harmless from any claims,
                damages, or expenses arising from your breach of these Terms or
                misuse of the Website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">9. Governing Law & Jurisdiction</h2>
              <p className="type-body text-[#4b5a6e]">
                These Terms are governed by the laws of the Federal Republic of
                Nigeria. Disputes shall be resolved in the courts of Lagos State,
                Nigeria. Platform agreements may specify alternative governing law
                and jurisdiction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">10. Changes to Terms</h2>
              <p className="type-body text-[#4b5a6e]">
                We may modify these Terms. Material changes will be posted on this
                page with an updated &ldquo;Last updated&rdquo; date. Continued use constitutes
                acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">11. Severability</h2>
              <p className="type-body text-[#4b5a6e]">
                If any provision is held unenforceable, the remaining provisions
                continue in full force.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="type-h3 text-[#0b1a2e] mb-4">12. Contact</h2>
              <p className="type-body text-[#4b5a6e]">
                Questions about these Terms: legal@crowninteractive.com<br />
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