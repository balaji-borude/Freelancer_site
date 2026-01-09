"use client"

import { Card } from "@/components/ui/card"
import { Code2, Cpu, Cloud, Globe, Sparkles, Terminal } from "lucide-react"
import { motion } from "framer-motion"

const executionItems = [
  {
    icon: Code2,
    title: "Full-stack from Scratch",
    description: "No templates. Just custom React, Next.js, and Node.js systems built for your specific problem.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    description: "Intelligent chatbots, automated workflows, and smart data flows that actually save time.",
  },
  {
    icon: Globe,
    title: "Scalable Web Apps",
    description: "MERN stack applications designed to handle growth without breaking.",
  },
  {
    icon: Terminal,
    title: "Automation & Scrapers",
    description: "Python-driven tools that turn manual tasks into background processes.",
  },
  {
    icon: Cloud,
    title: "Cloud-First Deploy",
    description: "Deployment on AWS/Vercel with proper CI/CD pipelines. No manual uploads.",
  },
  {
    icon: Cpu,
    title: "MVPs & Prototypes",
    description: "Fast iteration to get your idea from a sketch to a shipping product in weeks.",
  },
]

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Execution</h2>
        <p className="text-lg text-muted-foreground">The builds we ship. No filler.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {executionItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 h-full rounded-[2rem] bg-card/40 border-white/5 hover:border-indigo-500/30 transition-all flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
