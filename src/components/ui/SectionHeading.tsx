import { type ReactNode } from "react"

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  light?: boolean
  className?: string
  id?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : ""
  const maxW = align === "center" ? "max-w-2xl" : "max-w-3xl"

  return (
    <div className={`${alignClass} ${maxW} ${className}`}>
      {eyebrow && (
        <p
          className={`type-eyebrow mb-3 ${
            light ? "text-[#e8272a]" : "text-[#e8272a]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`type-h2 ${
          light ? "text-white" : "text-[#0b1a2e]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 type-body-lg ${
            light ? "text-white/70" : "text-[#4b5a6e]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
