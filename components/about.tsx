"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Users, Timer } from "lucide-react"

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">How we work</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            We operate as a high-density freelance station. Our logic is simple: minimal friction, maximum execution. No boardrooms—just results.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { 
                title: "Execution Only", 
                desc: "We don't talk about building. We build. Every line of code is a step toward your goal.",
                icon: Zap
              },
              { 
                title: "Direct Link", 
                desc: "No middle managers or account executives. You speak directly to the engineers building your vision.",
                icon: Users
              },
              { 
                title: "Bros first", 
                desc: "We aren't just contractors; we're your partners. We treat your project like our own and build for the long-term.",
                icon: ShieldCheck
              },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-muted/20 border border-white/5 hover:border-indigo-500/20 hover:bg-muted/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base uppercase tracking-tight mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Station Report Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="relative p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">Station Report</p>
                  <h3 className="text-2xl font-black text-foreground">Operational Stats</h3>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold">
                  LIVE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Uptime", val: "99.9%", sub: "Reliable builds" },
                  { label: "Velocity", val: "Fast", sub: "Rapid delivery" },
                  { label: "Reviews", val: "5.0", sub: "Top rated" },
                  { label: "Commitment", val: "100%", sub: "No distractions" },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-xl font-black text-foreground mb-0.5">{stat.val}</p>
                    <p className="text-[9px] text-indigo-400/60 font-medium">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Timer className="w-4 h-4 text-indigo-400" />
                  <p className="text-xs font-bold text-foreground uppercase tracking-tight">Average Response Time</p>
                </div>
                <div className="h-2 w-full bg-indigo-500/10 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-indigo-500"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <span>Fast</span>
                  <span className="text-indigo-400">Under 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
