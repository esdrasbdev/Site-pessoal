"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, MapPin, Calendar, Github, Linkedin, Mail } from "lucide-react"

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
                    <span>Cedro, Ceará - Brasil</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>19 anos</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border/50 w-full">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Conecte-se comigo</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://github.com/esdrasbdev" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors text-foreground hover:text-primary">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://br.linkedin.com/in/esdrasbrito-frontend" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors text-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:esdrassouzabrito1@gmail.com" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors text-foreground hover:text-primary">
                      <Mail className="h-5 w-5" />
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
