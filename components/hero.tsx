"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Cpu, Cloud, Code2, Globe, Command } from "lucide-react"
import { motion } from "framer-motion"

const techTags = [
  { name: "Full-stack", icon: Code2 },
  { name: "MERN", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "Scrapers", icon: Globe },
  { name: "Cloud", icon: Cloud },
]

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Core Identity */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold tracking-widest uppercase"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for Freelance Projects
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-[0.9] text-balance"
            >
              We build things <br /> 
              <span className="text-indigo-500">you want.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl space-y-3"
            >
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                We are developers who build things you want and contribute to the project if needed.
              </p>
              <p className="text-sm md:text-base text-indigo-400 font-bold border-l-2 border-indigo-500/50 pl-4">
                Students who are eager to build real-world projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hire the Bros
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-card/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] text-muted-foreground font-mono ml-2 tracking-widest uppercase">BroLog.v1</div>
              </div>
              
              <div className="space-y-3 font-mono text-[11px] leading-snug">
                <p className="text-indigo-400">$ bro --build --faster</p>
                <p className="text-muted-foreground"># Optimizing UX...</p>
                <div className="p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                  <p className="text-foreground font-bold mb-1">Status: Active</p>
                  <div className="h-1 w-full bg-indigo-500/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-indigo-500" 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
                <p className="text-green-400"># All systems green.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


