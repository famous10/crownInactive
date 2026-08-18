import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import PlatformsSection from "@/components/sections/PlatformsSection"
import PrincipleSection from "@/components/sections/PrincipleSection"
import DeploymentsSection from "@/components/sections/DeploymentsSection"
import SectorSection from "@/components/sections/SectorSection"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Crown Interactive — Sovereign Digital Public Infrastructure",
  description:
    "Crown Interactive builds the sovereign technology stack behind governments, utilities and enterprises across Africa: 1Gov, CuBOSS and CICOD Enterprise Cloud.",
  alternates: {
    canonical: "https://www.crowninteractive.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformsSection />
      <PrincipleSection />
      <DeploymentsSection />
      <SectorSection />
      {/* <CTASection
        light
        eyebrow="Let's talk"
        title="Building critical infrastructure for Africa"
        description="Whether you're a government, a utility, a bank, or a partner — tell us what you're building."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="See our solutions"
        secondaryHref="/solutions"
      /> */}
    </>
  )
}
