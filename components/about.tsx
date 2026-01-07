export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We're a team of passionate college developers dedicated to building modern, efficient web solutions. With
            hands-on experience in real-world projects, we understand both the technical and business sides of web
            development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-bold text-xl text-foreground mb-2">Practical Experience</h3>
              <p className="text-muted-foreground">Built and deployed real applications using modern tech stacks</p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-bold text-xl text-foreground mb-2">Student Friendly</h3>
              <p className="text-muted-foreground">
                Affordable pricing tailored for college students and budding developers
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-bold text-xl text-foreground mb-2">Learning Focused</h3>
              <p className="text-muted-foreground">We teach as we build, helping you understand every step</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
