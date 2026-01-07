import { Card } from "@/components/ui/card"

const techStack = [
  { category: "Frontend", tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", tech: ["Node.js", "Express", "Python"] },
  { category: "Database", tech: ["MongoDB", "PostgreSQL", "MySQL"] },
  { category: "Tools", tech: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"] },
]

export function Technologies() {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Technologies We Use</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((group) => (
          <Card key={group.category} className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.tech.map((tech) => (
                <li key={tech} className="text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {tech}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
