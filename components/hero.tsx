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
      className="min-h-[90vh] md:min-h-[80vh] flex items-center justify-center pt-16 pb-8 md:pt-20 md:pb-12 px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[20%] right-[15%] w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[20%] left-[20%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[10%] right-[10%] w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-4 h-4 border-2 border-primary/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-[30%] left-[15%] w-5 h-5 border-2 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-[20%] right-[20%] w-4 h-4 bg-accent/20 rotate-12 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 px-2">
        <div className="inline-block mb-4 md:mb-6 px-4 py-2 md:px-5 md:py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-medium text-primary flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Disponível para projetos</span>
            <span className="sm:hidden">Online</span>
          </span>
        </div>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance">
          Olá, eu sou <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Esdras</span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8 md:mb-10">
          Paixão por tecnologia, design e criação de soluções digitais inovadoras
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
          <a 
            href="#projetos" 
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group"
          >
            <span className="flex items-center gap-2">
              Ver Projetos
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>
          <a 
            href="#contato" 
            className="px-8 py-3.5 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center gap-2">
              Entre em Contato
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
          </a>
        </div>

        {/* Scroll Indicator - Fixed */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-4">
          <a href="#sobre" className="flex flex-col items-center gap-0.5 text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer">
            <span className="text-[8px] uppercase tracking-widest hidden sm:block">Scroll</span>
            <div className="w-4 h-6 border border-current rounded-full flex justify-center">
              <div className="w-0.5 h-1.5 bg-current rounded-full animate-bounce mt-1"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
