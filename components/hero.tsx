"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
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
    <section
      ref={sectionRef}
      className="min-h-[70vh] flex items-center justify-center pt-32 pb-12 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Olá, eu sou <span className="text-primary">Esdras</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
          Desenvolvedor em formação apaixonado por tecnologia, design e criação de soluções digitais
        </p>
      </div>
    </section>
  )
}
