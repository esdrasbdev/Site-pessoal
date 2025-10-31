"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".fade-in-item")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in-up")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const whatsappNumber = "5588998127580"
  const whatsappMessage = "Olá! Vim através do seu portfólio e gostaria de conversar."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contato" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-item opacity-0">Contato</h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-item opacity-0">
          Vamos conversar? Entre em contato comigo!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 fade-in-item opacity-0 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fale Comigo no WhatsApp</h3>
              <p className="text-muted-foreground">
                Clique no botão abaixo para iniciar uma conversa diretamente pelo WhatsApp
              </p>
            </div>
            <Button onClick={handleWhatsAppClick} size="lg" className="gap-2 w-full max-w-xs">
              <MessageCircle className="h-5 w-5" />
              Abrir WhatsApp
            </Button>
          </Card>

          <div className="space-y-6 fade-in-item opacity-0">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/esdrasbdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@esdrasbdev</p>
                  </div>
                </a>

                <a
                  href="https://br.linkedin.com/in/esdrasbrito-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Esdras de Souza Brito</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/_esdrasb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Instagram className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@_esdrasb</p>
                  </div>
                </a>

                <a
                  href="mailto:seu-email@exemplo.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-sm text-muted-foreground">esdrassouzabrito1@gmail.com</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
