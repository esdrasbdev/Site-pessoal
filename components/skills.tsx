"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Layout, Smartphone } from "lucide-react"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".fade-in-item")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.remove("opacity-0", "translate-y-8")
                child.classList.add("opacity-100", "translate-y-0")
              }, index * 100)
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

  const categories = [
    {
      title: "Linguagens",
      icon: Code2,
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Backend & Banco de Dados",
      icon: Database,
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", className: "dark:invert" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section id="habilidades" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-item opacity-0 translate-y-8 transition-all duration-700">
          Habilidades
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-in-item opacity-0 translate-y-8 transition-all duration-700 delay-100">
          Tecnologias e ferramentas que utilizo no desenvolvimento de soluções
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-8 fade-in-item opacity-0 translate-y-8 transition-all duration-700 hover:shadow-lg border-none bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center gap-4 mb-8">
                <div className={`p-3 ${category.bgColor} rounded-xl`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-center">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center bg-background rounded-2xl shadow-sm border border-border/50 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out group-hover:-rotate-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`w-10 h-10 object-contain transition-transform duration-300 ${skill.className || ''}`}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
