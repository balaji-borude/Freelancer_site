"use client"

import { motion } from "framer-motion"
import { 
  Code2, Terminal, Cpu, Cloud, Globe, Database, 
  Layers, Zap, Shield, Layout, Server, Boxes
} from "lucide-react"

const categories = [
  {
    name: "Frontend",
    icon: Layout,
    techs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    name: "Backend",
    icon: Server,
    techs: ["Node.js", "Express", "Python", "FastAPI", "Web Scrapers"],
  },
  {
    name: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: "Workshop Tools",
    icon: Boxes,
    techs: ["Docker", "AWS", "GitHub Actions", "Vercel", "CI/CD"],
  },
]

export function Technologies() {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">The Stack</h2>
          <p className="text-lg text-muted-foreground">Modern execution. No legacy fluff.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 rounded-[2rem] bg-card/50 border border-white/5 hover:border-indigo-500/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <cat.icon className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4 font-bold text-indigo-400">
                <cat.icon className="w-5 h-5" />
              </div>
              
              <h3 className="text-lg font-black text-foreground mb-3">{cat.name}</h3>
              
              <ul className="space-y-2">
                {cat.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground text-xs font-medium hover:text-foreground transition-colors">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

