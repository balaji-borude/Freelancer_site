"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            We Build Websites. We Help Students. We Deliver Results.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Professional web development services for startups, businesses, and students. From concept to deployment, we
            deliver high-quality solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-8 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-12 px-8 text-base border-border hover:bg-muted bg-transparent"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-4xl">&lt;/&gt;</span>
              </div>
              <p className="text-muted-foreground text-lg">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
