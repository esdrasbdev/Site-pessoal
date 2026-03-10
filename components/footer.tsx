export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 border-t border-border bg-gradient-to-t from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </div>
          
          <p className="text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Desenvolvido por Esdras Brito
          </p>
          
          <p className="text-sm text-muted-foreground/60">
            © {currentYear} • Todos os direitos reservados
          </p>
        
        </div>
      </div>
    </footer>
  )
}
