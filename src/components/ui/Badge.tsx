import { type ReactNode } from "react"

type BadgeVariant = "red" | "navy" | "gray" | "green"

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  red: "bg-[#e8272a]/10 text-[#e8272a]",
  navy: "bg-[#0b1a2e]/10 text-[#0b1a2e]",
  gray: "bg-[#f5f6f8] text-[#4b5a6e]",
  green: "bg-emerald-50 text-emerald-700",
}

export default function Badge({
  children,
  variant = "gray",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
