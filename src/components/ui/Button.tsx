import Link from "next/link"
import { type ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-white"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button"
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link"
  href: string
  type?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#e8272a] text-white hover:bg-[#c01e21] focus-visible:ring-[#e8272a]/50",
  secondary:
    "bg-[#0b1a2e] text-white hover:bg-[#071020] focus-visible:ring-[#0b1a2e]/50",
  ghost:
    "bg-transparent text-[#0b1a2e] hover:bg-[#0b1a2e]/5 focus-visible:ring-[#0b1a2e]/20 border border-[#dde2ea]",
  "outline-white":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-white/30",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded font-semibold leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (rest.as === "link") {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
