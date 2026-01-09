"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Workshop", href: "#about" },
    { label: "Execution", href: "#services" },
    { label: "The Rules", href: "#why-us" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-[-10deg] transition-transform">
            <span className="text-white font-black text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground leading-tight">BroCodes</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Dev Station</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 bg-muted/50 px-6 py-2 rounded-full border border-white/5">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Let&apos;s Talk
        </Button>


        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
