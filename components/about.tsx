"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket } from "lucide-react"

export function About() {
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

  return (
    <section id="sobre" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in-item opacity-0">Sobre Mim</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex justify-center fade-in-item opacity-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src="/esdrasbrito.jpg"
                    alt="Esdras de Souza Brito"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 fade-in-item opacity-0">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Olá! Sou <span className="text-primary font-semibold">Esdras de Souza Brito</span>, desenvolvedor em
              formação apaixonado por tecnologia, design e criação de soluções digitais.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Busco constantemente aprimorar minhas habilidades e transformar ideias em experiências reais na web.
              Acredito no poder da tecnologia para criar impacto positivo e facilitar a vida das pessoas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 fade-in-item opacity-0 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Desenvolvimento</h3>
              <p className="text-muted-foreground">Criação de aplicações web modernas e responsivas</p>
            </div>
          </Card>

          <Card className="p-6 fade-in-item opacity-0 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Design</h3>
              <p className="text-muted-foreground">Interfaces intuitivas com foco na experiência do usuário</p>
            </div>
          </Card>

          <Card className="p-6 fade-in-item opacity-0 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Inovação</h3>
              <p className="text-muted-foreground">Sempre buscando novas tecnologias e soluções criativas</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
