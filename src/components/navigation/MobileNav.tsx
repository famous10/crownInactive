"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { navigation } from "@/data/navigation"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  // Close on route change
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      setIsOpen(false)
      setOpenSection(null)
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

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="flex items-center justify-center w-10 h-10 rounded text-[#0b1a2e] hover:bg-[#f5f6f8] transition-colors"
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
        className={`fixed top-0 right-0 z-50 h-full w-[min(340px,90vw)] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#dde2ea] px-5 h-16">
          <span className="text-sm font-semibold text-[#4b5a6e]">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="flex items-center justify-center w-9 h-9 rounded text-[#4b5a6e] hover:bg-[#f5f6f8]"
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
            const isSectionOpen = openSection === item.label

            return (
              <div key={item.label} className="border-b border-[#f5f6f8] last:border-0">
                {hasChildren ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSection(isSectionOpen ? null : item.label)
                      }
                      aria-expanded={isSectionOpen}
                      className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-[#0b1a2e] hover:bg-[#f5f6f8] transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 text-[#4b5a6e] ${
                          isSectionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSectionOpen && (
                      <div className="bg-[#f5f6f8] pb-2">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-8 py-3 text-sm transition-colors hover:text-[#e8272a] ${
                              pathname === child.href
                                ? "text-[#e8272a] font-semibold"
                                : "text-[#4b5a6e]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-5 py-4 text-sm font-semibold transition-colors hover:bg-[#f5f6f8] ${
                      pathname === item.href
                        ? "text-[#e8272a]"
                        : "text-[#0b1a2e]"
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
