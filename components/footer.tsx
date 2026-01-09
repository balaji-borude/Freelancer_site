export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white">B</div>
            <div>
              <p className="font-black text-foreground">BroCodes</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Built for Bros</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Station</a>
            <a href="#services" className="hover:text-foreground transition-colors">Execution</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Rules</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Ping</a>
          </div>

          <div className="text-sm text-muted-foreground text-right">
            <p>© {currentYear} BroCodes. Just code.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

