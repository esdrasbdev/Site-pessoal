"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Network } from "lucide-react"

export function Education() {
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
    <section id="formacao" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in-item opacity-0">Formação Acadêmica</h2>

        <Card className="p-8 fade-in-item opacity-0">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-lg shrink-0">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Sistemas de Informação</h3>
              <p className="text-lg text-primary font-medium">Instituto Federal do Ceará (IFCE)</p>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente curso Sistemas de Informação no Instituto Federal do Ceará (IFCE), com foco em
                desenvolvimento de software, análise de sistemas e gestão de tecnologia da informação. Durante o curso,
                tenho a oportunidade de aprender e aplicar conceitos fundamentais da programação, banco de dados,
                engenharia de software e desenvolver projetos práticos que consolidam meu aprendizado.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Desenvolvimento Web</p>
                    <p className="text-sm text-muted-foreground">React, Angular, Node.js, Vue.js</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded">
                    <Network className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Interface e Experiência do Usuário</p>
                    <p className="text-sm text-muted-foreground">UI/UX, Figma, Design Responsivo </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
