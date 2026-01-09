"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const rules = [
  { title: "Start Small", desc: "We prefer shipping a working MVP over a bloated, unfinished dream." },
  { title: "One Problem at a Time", desc: "Focused execution leads to better, faster results." },
  { title: "Clarity over Complexity", desc: "If we can't explain it simply, we shouldn't build it yet." },
  { title: "Learn, Ship, Repeat", desc: "Every project is built to be used, not just to look pretty." },
  { title: "Direct Communication", desc: "No middle managers. You talk directly to the builder." },
  { title: "Honest Delivery", desc: "We are students. We deliver value and learn together with you." },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="bg-indigo-600/5 border border-indigo-500/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">The Bro-Rules</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pragmatic principles for high-density delivery. We build systems that solve problems, not systems that look good in presentations.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Start Small, Scale Fast",
              "One Problem at a Time",
              "Clarity over Complexity",
              "Learn. Ship. Repeat.",
              "Direct Communication",
              "Honest Delivery",
            ].map((rule, i) => (
              <motion.div
                key={rule}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm font-bold text-foreground">{rule}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

