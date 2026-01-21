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
}

const projects: Project[] = [
  {
    title: "Obshop",
    description:
      "Prototipação de uma loja online de roupas do estilo streetwear, focada em um público jovem e descolado.",
    image: "/Obshop.png",
    technologies: ["Figma", "Design Responsivo", "Prototipação", "Design de UI/UX"],
    github:
      "https://www.figma.com/design/eJBENEDHonxCfKt8Zlf9J7/Obshop?node-id=3-2&m=dev&t=f3KkZLwKqz7bhgci-1",
    demo:
      "https://www.figma.com/design/eJBENEDHonxCfKt8Zlf9J7/Obshop?node-id=3-2&m=dev&t=f3KkZLwKqz7bhgci-1",
    isFigma: true,
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Site de portfólio moderno e responsivo desenvolvido com as mais recentes tecnologias web.",
    image: "/sitepessoal.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/esdrasbdev/Site-pessoal.git",
    demo: "#",
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
    <section id="projetos" ref={sectionRef} className="py-20 px-4">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-item opacity-0">
          Projetos
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-item opacity-0">
          Alguns dos projetos que desenvolvi durante minha jornada
        </p>

        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide pb-4 gap-6 snap-x snap-mandatory -mx-4 px-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card min-w-[300px] md:min-w-[380px] flex-shrink-0 snap-center overflow-hidden fade-in-item opacity-0 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent"
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

                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full h-10 w-10 shadow-md z-10 transition-opacity animate-in fade-in duration-300"
              onClick={() => handleNav("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full h-10 w-10 shadow-md z-10 transition-opacity animate-in fade-in duration-300"
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
