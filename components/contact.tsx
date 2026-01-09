"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">The Line</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Direct link to the station. No bots. Just code.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:bro@brocodes.dev" 
              className="group flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                <p className="text-base font-black text-foreground">bro@brocodes.dev</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="group flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">WhatsApp</p>
                <p className="text-base font-black text-foreground">+1 (bro) codes</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-1">Ping Sent</h3>
                <p className="text-sm text-muted-foreground">We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Bros handle?"
                  required
                  className="h-14 px-4 rounded-xl bg-background/50 border-white/5 focus:border-indigo-500/50 transition-all text-sm"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Where to reply?"
                  required
                  className="h-14 px-4 rounded-xl bg-background/50 border-white/5 focus:border-indigo-500/50 transition-all text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are we building?"
                  required
                  rows={3}
                  className="w-full p-4 rounded-xl bg-background/50 border border-white/5 focus:border-indigo-500/50 focus:outline-none transition-all text-sm placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black group"
                >
                  Send Ping <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

