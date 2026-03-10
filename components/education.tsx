"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Network, Award } from "lucide-react"

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

        {/* UFC - Engenharia de Software */}
        <Card className="p-8 mb-6 fade-in-item opacity-0 border-l-4 border-l-primary">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-lg shrink-0">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl font-semibold">Engenharia de Software</h3>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full border border-green-500/20">
                  Ingressante 2026.2
                </span>
              </div>
              <p className="text-lg text-primary font-medium">Universidade Federal do Ceará (UFC) - Campus Russas</p>
              <p className="text-muted-foreground leading-relaxed">
                Ingressante no curso de Engenharia de Software na UFC Campus Russas. O curso visa formar profissionais
                capazes de desenvolver, manter e gerenciar sistemas de software complexos, com ênfase em práticas
                ágeis, engenharia de requisitos e arquitetura de software.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Engenharia de Software</p>
                    <p className="text-sm text-muted-foreground">Arquitetura, Métodos Ágeis, UML</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Desenvolvimento</p>
                    <p className="text-sm text-muted-foreground">Programação, Banco de Dados</p>
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
