"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Figma, ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  isFigma?: boolean
  demoLabel?: string
}

const projects: Project[] = [
  {
    title: "Landing Page Advocacia",
    description:
      "Landing page estratégica desenvolvida para uma advogada, focada em transmitir autoridade, apresentar serviços jurídicos e otimizar a captação de clientes.",
    image: "/advocacia.png",
    technologies: ["JavaScript", "Node.js", "CSS" , "Figma"],
    github: "#",
    demo: "https://www.gessicasampaioadvocacia.com#",
    demoLabel: "Site Oficial",
  },
  {
    title: "Coffe Shop",
    description:
      "Aplicação web que permite gerenciar e realizar compras de cafés de forma simples e intuitiva.",
    image: "/Coffe Shop.png",
    technologies: ["React", "TypeScript", "JavaScript", "Next.js"],
    github: "https://github.com/esdrasbdev/Coffe-Shop-2.0.git",
    demo: "https://coffe-shop-2-0.vercel.app/#",
  },
  {
    title: "Milk Log",
    description:
      "Aplicação para gerenciamento e rastreamento de produção de leite, otimizando o controle de qualidade.",
    image: "/milklog.png",
    technologies: ["React Native", "TypeScript", "Styled-Components", "Node.js"],
    github: "https://github.com/esdrasbdev/Milklog.git",
    demo: "https://milklog-demo.netlify.app",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleNav = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const card = container.querySelector<HTMLElement>(".project-card")
      if (card) {
        const scrollAmount = card.offsetWidth + 24 // 24px is gap-6
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const checkScrollability = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth)
    }

    // Initial check after a short delay to ensure layout is stable
    const timeoutId = setTimeout(checkScrollability, 100)
    container.addEventListener("scroll", checkScrollability)
    window.addEventListener("resize", checkScrollability)

    return () => {
      clearTimeout(timeoutId)
      container.removeEventListener("scroll", checkScrollability)
      window.removeEventListener("resize", checkScrollability)
    }
  }, [projects])

  return (
    <section id="projetos" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-item opacity-0">
          Projetos
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-item opacity-0">
          Alguns dos projetos que desenvolvi durante minha jornada
        </p>

        <div className="relative">
          <div ref={scrollContainerRef} className="grid grid-cols-1 md:flex md:overflow-x-auto scrollbar-hide pb-4 gap-6 md:snap-x md:snap-mandatory md:-mx-4 md:px-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card w-full md:w-[380px] flex-shrink-0 md:snap-center overflow-hidden fade-in-item opacity-0 hover:shadow-2xl transition-all duration-500 group flex flex-col hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 space-y-3 flex flex-col flex-1">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 mt-auto">
                  {project.github && project.github !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent group-hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      {project.isFigma ? (
                        <>
                          <Figma className="h-4 w-4" />
                          Figma
                        </>
                      ) : (
                        <>
                          <Github className="h-4 w-4" />
                          GitHub
                        </>
                      )}
                    </a>
                  </Button>
                  )}

                  <Button size="sm" className="flex-1 gap-2 group-hover:shadow-lg" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {project.demoLabel || "Demo"}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          </div>

          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full h-12 w-12 shadow-lg z-10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              onClick={() => handleNav("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full h-12 w-12 shadow-lg z-10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              onClick={() => handleNav("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
