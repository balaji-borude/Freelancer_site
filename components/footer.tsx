export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-lg">DevTeam</span>
            </div>
            <p className="text-primary-foreground/80">College developers building modern web solutions</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition">
                  Portfolio Sites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition">
                  Student Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary-foreground transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-primary-foreground transition">
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>
                <a href="mailto:hello@devteam.com" className="hover:text-primary-foreground transition">
                  Email
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>© {currentYear} DevTeam. Made with ❤️ by college developers</p>
        </div>
      </div>
    </footer>
  )
}
