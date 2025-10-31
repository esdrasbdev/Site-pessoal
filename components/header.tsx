"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/curriculo-esdras-brito.pdf"
    link.download = "curriculo-esdras-brito.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Formação Acadêmica", href: "#formacao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Esdras Brito
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="gap-2" size="sm" onClick={handleDownloadResume}>
              <Download className="h-4 w-4" />
              Baixar Currículo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="gap-2 w-full" size="sm" onClick={handleDownloadResume}>
              <Download className="h-4 w-4" />
              Baixar Currículo
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
