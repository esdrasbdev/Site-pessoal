"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, MapPin, Calendar, GraduationCap } from "lucide-react"

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
    <section id="sobre" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-item opacity-0">
          Sobre Mim
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-item opacity-0 max-w-2xl mx-auto">
          Descubra mais sobre minha jornada e paixões
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 fade-in-item opacity-0">
            <Card className="p-8 h-full bg-gradient-to-br from-card to-card/50 border-none shadow-xl">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse opacity-30 blur-xl"></div>
                  <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden shadow-2xl">
                      <img
                        src="/esdrasbrito.jpg"
                        alt="Esdras de Souza Brito"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1">Esdras de Souza Brito</h3>
                <p className="text-primary font-medium mb-6">Desenvolvedor Full Stack</p>

                {/* Info Items */}
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Russas, Ceará - Brasil</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>22 anos</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border/50 w-full">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Conecte-se comigo</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://github.com/esdrasbdev" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com/in/esdrasbrito" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="mailto:esdrasbrito.dev@gmail.com" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Text */}
            <Card className="p-8 fade-in-item opacity-0 hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Olá! Sou <span className="text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded">Esdras de Souza Brito</span>, desenvolvedor em
                  formação apaixonado por tecnologia, design e criação de soluções digitais.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Busco constantemente aprimorar minhas habilidades e transformar ideias em experiências reais na web.
                  Acredito no poder da tecnologia para criar impacto positivo e facilitar a vida das pessoas.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Atualmente, estou cursando <span className="text-secondary font-semibold">Engenharia de Software</span> na UFC Campus Russas, 
                  buscando sempre aprender novas tecnologias e desenvolver projetos que fazem a diferença.
                </p>
              </div>
            </Card>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6 fade-in-item opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Desenvolvimento</h3>
                  <p className="text-sm text-muted-foreground">Criação de aplicações web modernas e responsivas</p>
                </div>
              </Card>

              <Card className="p-6 fade-in-item opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Palette className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold">Design</h3>
                  <p className="text-sm text-muted-foreground">Interfaces intuitivas com foco na experiência do usuário</p>
                </div>
              </Card>

              <Card className="p-6 fade-in-item opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Inovação</h3>
                  <p className="text-sm text-muted-foreground">Sempre buscando novas tecnologias e soluções criativas</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
