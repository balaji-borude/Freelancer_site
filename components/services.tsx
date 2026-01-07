import { Card } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap, Bug, Cloud } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom static and dynamic websites built with modern technologies",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Showcase your work with stunning portfolio sites",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional sites for startups and established businesses",
  },
  {
    icon: GraduationCap,
    title: "Student Projects",
    description: "Complete academic and final-year project development",
  },
  {
    icon: Bug,
    title: "Project Guidance",
    description: "Expert help debugging and optimizing your code",
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting",
    description: "Seamless deployment and hosting setup on modern platforms",
  },
]

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.title} className="p-6 hover:border-primary/50 transition-colors">
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
