import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import CTASection from "@/components/sections/CTASection"
import { Users, Award, Globe, BookOpen, GraduationCap, Zap, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers — Building Africa's Sovereign Digital Infrastructure",
  description: "Join Crown Interactive. We build 1Gov, CuBOSS and CICOD Enterprise Cloud — sovereign technology platforms for African governments, utilities and enterprises.",
  alternates: {
    canonical: "https://www.crowninteractive.com/careers",
  },
}

const benefits = [
  {
    icon: Shield,
    title: "Sovereign Mission",
    description: "Build technology that matters — platforms where African governments and enterprises own their data and digital destiny.",
  },
  {
    icon: Award,
    title: "ISO 27001 Environment",
    description: "Work on a certified technology stack deployed at national scale across government, utilities and banking.",
  },
  {
    icon: Globe,
    title: "Multi-Country Impact",
    description: "Nigeria, Kenya, and expanding across Africa. Your work crosses borders and sectors.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to 1Gov Academy, CuBOSS Training, Crown Digital Skills Institute, and Graduate Technology Accelerator.",
  },
  {
    icon: Users,
    title: "Expert Colleagues",
    description: "Work alongside engineers, architects and domain specialists who have built and deployed sovereign platforms at scale.",
  },
  {
    icon: Heart,
    title: "African Founded & Led",
    description: "Crown is African-founded, African-built, with IP retained in Africa. Your career builds African technology sovereignty.",
  },
]

const culture = [
  {
    icon: Zap,
    title: "Product Over Projects",
    description: "We build configurable platforms, not customisation debt. Continuous evolution, not handover-and-leave.",
  },
  {
    icon: Shield,
    title: "Engineering Excellence",
    description: "ISO 27001 certified stack. Infrastructure-agnostic architecture. Sovereign by design, not by marketing.",
  },
  {
    icon: GraduationCap,
    title: "Capability Transfer",
    description: "We don't just deliver — we train. 1Gov Academy, Graduate Technology Accelerator, Crown Digital Skills Institute.",
  },
  {
    icon: Globe,
    title: "Government-to-Government DNA",
    description: "Our platforms are deployed in partnership with sovereign hosting authorities. Real G2G delivery experience.",
  },
]

const openRoles = [
  {
    id: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Build and scale the sovereign engine powering 1Gov, CuBOSS and CICOD. Go, PostgreSQL, Kubernetes, distributed systems.",
    requirements: [
      "5+ years backend engineering",
      "Strong Go and/or Python",
      "PostgreSQL, Redis, message queues",
      "Kubernetes, Docker, CI/CD",
      "Distributed systems design",
      "Security-first mindset",
    ],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Build the experience layer for sovereign platforms used by governments, utilities and enterprises. React, TypeScript, Next.js.",
    requirements: [
      "3+ years frontend engineering",
      "React, TypeScript, Next.js",
      "Tailwind CSS, design systems",
      "Accessibility (WCAG 2.1 AA)",
      "State management, testing",
      "Performance optimisation",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps / Platform Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Own the deployment pipeline for infrastructure-agnostic sovereign platforms across Galaxy Backbone, Konza, on-premise and cloud.",
    requirements: [
      "4+ years DevOps/platform engineering",
      "Kubernetes (EKS, AKS, GKE, on-prem)",
      "Terraform, Ansible, GitOps",
      "Observability (Prometheus, Grafana, Loki)",
      "Security hardening, compliance",
      "Multi-environment deployments",
    ],
  },
  {
    id: "product-manager-govtech",
    title: "Product Manager — GovTech",
    department: "Product",
    location: "Lagos, Nigeria / Nairobi, Kenya",
    type: "Full-time",
    description: "Own the 1Gov product roadmap. Work with sovereign hosting authorities, government stakeholders, and engineering to deliver Digital Public Infrastructure.",
    requirements: [
      "5+ years product management",
      "GovTech / DPI experience preferred",
      "Government stakeholder management",
      "G2G delivery model understanding",
      "Technical fluency with engineering teams",
      "Willingness to travel across Africa",
    ],
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Design sovereign deployments for government, utility and enterprise clients. Bridge business requirements and platform capability.",
    requirements: [
      "5+ years solutions architecture",
      "Enterprise software / GovTech / Utilities",
      "Cloud architecture (multi-cloud, hybrid)",
      "Security & compliance frameworks",
      "Client-facing technical leadership",
      "Architecture documentation, diagrams",
    ],
  },
  {
    id: "graduate-technology-accelerator",
    title: "Graduate Technology Accelerator",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Graduate Programme",
    description: "12-month structured programme rotating through backend, frontend, DevOps and product. For top Computer Science / Engineering graduates.",
    requirements: [
      "Recent graduate (0-2 years)",
      "Computer Science, Engineering or related",
      "Strong programming fundamentals",
      "Passion for sovereign technology",
      "Willingness to learn across the stack",
      "Nigerian citizen or valid work authorisation",
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1a2e] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="type-eyebrow text-[#e8272a] mb-4">Careers</p>
            <h1 className="type-display text-white">
              Build the sovereign stack
              <br />
              <span className="text-[#e8272a]">for Africa.</span>
            </h1>
            <p className="mt-5 type-body-lg text-white/65 max-w-xl">
              Crown Interactive builds 1Gov, CuBOSS and CICOD Enterprise Cloud —
              sovereign technology platforms for African governments, utilities and
              enterprises. Join the team building Africa&apos;s digital infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="#open-roles" variant="primary" size="lg">
                View open roles
              </Button>
              <Button as="link" href="/company" variant="outline-white" size="lg">
                About Crown
              </Button>
            </div>
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

      {/* Why Crown */}
      <section className="py-20 bg-white">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Why Crown</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Not just another tech job. Sovereign infrastructure.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <b.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{b.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">How we work</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Culture built on sovereign principles
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((c) => (
              <div key={c.title} className="rounded-lg border border-[#dde2ea] bg-white p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1a2e]/5">
                  <c.icon size={20} className="text-[#0b1a2e]" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-[#0b1a2e]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#4b5a6e] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Training Academy */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-xl border border-[#dde2ea] bg-[#f5f6f8] p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="type-eyebrow text-[#e8272a] mb-3">Crown Training Academy</p>
              <h2 className="type-h2 text-[#0b1a2e] mb-4">
                Building sovereign technology capability
              </h2>
              <p className="type-body text-[#4b5a6e] mb-6">
                We don&apos;t just deliver platforms — we transfer capability. The Crown
                Training Academy runs structured programmes for government, utility
                and enterprise clients, plus our own team.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "1Gov Academy — Government digital skills",
                  "CuBOSS Training — Utility revenue cycle operations",
                  "Crown Digital Skills Institute — Broad technology upskilling",
                  "Graduate Technology Accelerator — 12-month engineering rotation",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3 text-sm text-[#4b5a6e]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-20 bg-[#f5f6f8]">
        <Container>
          <p className="type-eyebrow text-[#e8272a] mb-3">Open roles</p>
          <h2 className="type-h2 text-[#0b1a2e] max-w-xl mb-12">
            Current opportunities
          </h2>
          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="rounded-lg border border-[#dde2ea] bg-white p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="type-eyebrow text-[#e8272a]">{role.department}</span>
                      <span className="text-white/30">|</span>
                      <span className="type-eyebrow text-[#e8272a]">{role.type}</span>
                    </div>
                    <h3 className="type-h3 text-[#0b1a2e]">{role.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-[#4b5a6e]">
                      <span className="flex items-center gap-1.5">
                        <Globe size={14} aria-hidden />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <Button as="link" href={`/contact#careers?role=${role.id}`} variant="ghost" size="sm">
                    Apply
                  </Button>
                </div>
                <p className="mt-4 text-sm text-[#4b5a6e] leading-relaxed">{role.description}</p>
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[#4b5a6e] mb-3">
                    Requirements
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {role.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-[#4b5a6e]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8272a]" aria-hidden />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="No matching role?"
        title="We're always looking for exceptional talent"
        description="If you're passionate about sovereign digital infrastructure for Africa, tell us about yourself."
        primaryLabel="Send an open application"
        primaryHref="/contact#careers"
        secondaryLabel="Learn about Crown"
        secondaryHref="/company"
      />
    </>
  )
}