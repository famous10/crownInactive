import { type ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "article" | "main" | "header" | "footer"
  narrow?: boolean
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${
        narrow ? "max-w-4xl" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
