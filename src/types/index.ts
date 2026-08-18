export interface NavItem {
  label: string
  href: string
  children?: NavDropdownItem[]
}

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
  children?: NavDropdownItem[]
}

export interface Solution {
  id: string
  title: string
  tagline: string
  description: string
  href: string
  features: string[]
  sector: string
}

export interface Industry {
  id: string
  title: string
  description: string
  solution: string
  href: string
  icon: string
}

export interface BoardMember {
  name: string
  role: string
  bio: string
}

export interface Deployment {
  country: string
  partner?: string
  status: "live" | "pipeline"
  detail: string
}

export interface Division {
  name: string
  description: string
}