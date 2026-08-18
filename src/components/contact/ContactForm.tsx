"use client"

import { useState, type FormEvent } from "react"
import Button from "@/components/ui/Button"
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organisation: String(formData.get("organisation") || "").trim(),
      enquiryType: String(formData.get("enquiryType") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      privacy: formData.get("privacy") === "on",
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Thank you. Your message has been sent.")
        form.reset()
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Unable to send your message. Please check your connection and try again.")
    }
  }

  return (
    <section className="py-20 bg-[#f5f6f8]">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="type-eyebrow text-[#e8272a] mb-3">Or send us a message</p>
        <h2 className="type-h2 text-[#0b1a2e] mb-8">
          We&apos;ll route it to the right team
        </h2>

        {status === "success" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
            <CheckCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
            <p className="text-sm">{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
            <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
            <p className="text-sm">{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#0b1a2e] mb-1.5"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#0b1a2e] mb-1.5"
              >
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
            <label
              htmlFor="organisation"
              className="block text-sm font-semibold text-[#0b1a2e] mb-1.5"
            >
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
            <label
              htmlFor="enquiryType"
              className="block text-sm font-semibold text-[#0b1a2e] mb-1.5"
            >
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
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#0b1a2e] mb-1.5"
            >
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
              I have read and agree to the{" "}
              <a href="/privacy" className="text-[#e8272a] hover:underline">
                Privacy Policy
              </a>{" "}
              and consent to Crown Interactive processing my data for this enquiry.
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <Loader2 size={18} className="animate-spin" aria-hidden />
            ) : (
              <Send size={18} aria-hidden />
            )}
            {status === "submitting" ? "Sending..." : "Send message"}
          </Button>

          <p className="text-xs text-[#8898aa] text-center">
            By submitting, you agree to our Privacy Policy. We never share your data
            with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}
