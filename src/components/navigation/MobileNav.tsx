"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { navigation } from "@/data/navigation"
import type { NavDropdownItem } from "@/types"

interface MobileNavItemProps {
  items: NavDropdownItem[]
  openSections: Set<string>
  toggleSection: (href: string) => void
  pathname: string
  depth?: number
}

function MobileNavItemList({
  items,
  openSections,
  toggleSection,
  pathname,
  depth = 0,
}: MobileNavItemProps) {
  const indentClass = depth === 0 ? "px-5" : depth === 1 ? "pl-8 pr-5" : "pl-11 pr-5"

  return (
    <div className={depth > 0 ? "bg-[#071020] pb-2" : undefined}>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0
        const isOpen = openSections.has(item.href)

        return (
          <div
            key={item.href}
            className={`border-b border-[#1a2f4a] last:border-0 ${
              depth > 0 ? "border-[#132238]" : ""
            }`}
          >
            {hasChildren ? (
              <>
                <button
                  onClick={() => toggleSection(item.href)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between py-3.5 text-sm font-semibold transition-colors hover:bg-white/5 ${indentClass} ${
                    pathname.startsWith(item.href)
                      ? "text-[#e8272a]"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-white/50 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <MobileNavItemList
                    items={item.children!}
                    openSections={openSections}
                    toggleSection={toggleSection}
                    pathname={pathname}
                    depth={depth + 1}
                  />
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`block py-3.5 text-sm transition-colors hover:bg-white/5 ${indentClass} ${
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-[#e8272a] font-semibold"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  // Close on route change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      setIsOpen(false)
      setOpenSections(new Set())
    }
  }, [pathname])

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSection = (href: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(href)) {
        next.delete(href)
      } else {
        next.add(href)
      }
      return next
    })
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="flex items-center justify-center w-10 h-10 rounded text-white hover:bg-white/10 transition-colors"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[min(340px,90vw)] bg-[#0b1a2e] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#1a2f4a] px-5 h-16">
          <span className="text-sm font-semibold text-white/60">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="flex items-center justify-center w-9 h-9 rounded text-white/60 hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav
          aria-label="Mobile navigation"
          className="overflow-y-auto h-[calc(100%-4rem)] py-4"
        >
          {navigation.map((item) => {
            const hasChildren = !!item.children
            const isSectionOpen = openSections.has(item.href)

            return (
              <div key={item.label} className="border-b border-[#1a2f4a] last:border-0">
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleSection(item.href)}
                      aria-expanded={isSectionOpen}
                      className={`w-full flex items-center justify-between px-5 py-4 text-sm font-semibold transition-colors hover:bg-white/5 ${
                        pathname.startsWith(item.href)
                          ? "text-[#e8272a]"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 text-white/50 ${
                          isSectionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSectionOpen && (
                      <MobileNavItemList
                        items={item.children!}
                        openSections={openSections}
                        toggleSection={toggleSection}
                        pathname={pathname}
                        depth={1}
                      />
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-5 py-4 text-sm font-semibold transition-colors hover:bg-white/5 ${
                      pathname === item.href
                        ? "text-[#e8272a]"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}

          {/* CTA */}
          <div className="px-5 pt-6 pb-8">
            <Link
              href="/contact"
              className="block w-full text-center rounded bg-[#e8272a] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c01e21]"
            >
              Talk to our team
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
