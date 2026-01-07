import { Check } from "lucide-react"

const reasons = [
  "College-student friendly pricing",
  "Practical industry experience",
  "Clear communication & updates",
  "On-time delivery guaranteed",
  "Post-project support included",
  "Affordable & high quality",
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-4 bg-background rounded-lg p-6 border border-border">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
