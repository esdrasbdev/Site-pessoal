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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    // Cleanup on component unmount
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

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
    { label: "Habilidades", href: "#habilidades" },
    { label: "Formação Acadêmica", href: "#formacao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ]

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetHref = e.currentTarget.getAttribute("href")
    if (!targetHref) return

    setIsMobileMenuOpen(false)

    // Adiciona um atraso para permitir que a animação de fechamento do menu termine antes de rolar
    setTimeout(() => {
      const element = document.querySelector(targetHref)
      element?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative z-50">
          <a href="#" className="group relative">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient group-hover:bg-[length:100%_auto] transition-all duration-500">
              ESDRAS BRITO
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
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
            className={`md:hidden transition-colors ${isMobileMenuOpen ? "text-white" : "text-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full gap-8 pt-20 pb-10">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={handleMobileLinkClick}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="gap-2 mt-4"
                size="lg"
                onClick={() => {
                  handleDownloadResume()
                  setIsMobileMenuOpen(false)
                }}>
                <Download className="h-5 w-5" />
                Baixar Currículo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
