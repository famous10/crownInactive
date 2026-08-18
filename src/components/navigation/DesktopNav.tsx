"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { navigation } from "@/data/navigation"
import type { NavItem, NavDropdownItem } from "@/types"

interface DropdownProps {
  item: NavItem
  isActive: boolean
  onOpen: (id: string) => void
  onClose: () => void
  openId: string | null
}

function NavDropdown({ item, onOpen, onClose, openId }: DropdownProps) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const isOpen = openId === item.label

  const isCurrentSection = item.children
    ? item.children.some((c) => pathname.startsWith(c.href))
    : pathname === item.href

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handler)
    }
    return () => document.removeEventListener("mousedown", handler)
  }, [isOpen, onClose])

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`type-body-sm font-semibold transition-colors duration-150 px-1 py-2 ${
          pathname === item.href || pathname.startsWith(item.href + "/")
            ? "text-[#e8272a]"
            : "text-white/80 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => (isOpen ? onClose() : onOpen(item.label))}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose()
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1 type-body-sm font-semibold transition-colors duration-150 px-1 py-2 ${
          isCurrentSection
            ? "text-white"
            : "text-white/80 hover:text-white"
        }`}
      >
        {item.label}
<ChevronDown
            size={14}
            className={`transition-transform duration-200 text-white/60 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden
          />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-1 min-w-[260px] rounded-lg border border-[#1a2f4a] bg-white py-1.5 shadow-xl shadow-black/30 z-50"
        >
          {item.children.map((child) => {
            const childHasChildren = child.children && child.children.length > 0
            
            return childHasChildren ? (
              <NestedDropdown
                key={child.href}
                item={child}
                pathname={pathname}
                onClose={onClose}
              />
            ) : (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={onClose}
                className={`block px-4 py-3 transition-colors duration-150 hover:bg-[#f5f6f8] ${
                  pathname === child.href || pathname.startsWith(child.href)
                    ? "bg-[#f5f6f8]"
                    : ""
                }`}
              >
                <span className="block text-sm font-semibold text-[#0b1a2e]">
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-xs text-[#0b1a2e]/60">
                    {child.description}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

interface NestedDropdownProps {
  item: NavDropdownItem
  pathname: string
  onClose: () => void
}

function NestedDropdown({ item, pathname, onClose }: NestedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handler)
    }
    return () => document.removeEventListener("mousedown", handler)
  }, [isOpen])

  const isCurrentSection = item.children
    ? item.children.some((c) => pathname.startsWith(c.href))
    : pathname === item.href

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false)
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`block w-full px-4 py-3 transition-colors duration-150 hover:bg-gray-100 ${
          isCurrentSection
            ? "bg-gray-100"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0b1a2e]">{item.label}</span>
          <ChevronRight
            size={14}
            className={`text-[#0b1a2e]/50 transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
            aria-hidden
          />
        </div>
        {item.description && (
          <span className="mt-0.5 block text-xs text-[#0b1a2e]/50">
            {item.description}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-full top-0 ml-1 min-w-[240px] rounded-lg border border-[#1a2f4a] bg-white py-1.5 shadow-xl shadow-black/30 z-50"
        >
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={onClose}
              className={`block px-4 py-3 transition-colors duration-150 hover:bg-gray-50 ${
                pathname === child.href || pathname.startsWith(child.href)
                  ? "bg-gray-50"
                  : ""
              }`}
            >
              <span className="block text-sm font-medium text-[#0b1a2e]">
                {child.label}
              </span>
              {child.description && (
                <span className="mt-0.5 block text-xs text-[#0b1a2e]/50">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DesktopNav() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleOpen = useCallback((id: string) => setOpenId(id), [])
  const handleClose = useCallback(() => setOpenId(null), [])

  return (
    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
      {navigation.map((item) => (
        <NavDropdown
          key={item.label}
          item={item}
          isActive={openId === item.label}
          openId={openId}
          onOpen={handleOpen}
          onClose={handleClose}
        />
      ))}
    </nav>
  )
}