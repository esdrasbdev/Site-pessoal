export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">© {currentYear} Esdras de Souza Brito. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
