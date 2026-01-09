import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Technologies } from "@/components/technologies"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
