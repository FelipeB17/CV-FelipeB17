import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Timeline from "@/components/timeline"
import Certifications from "@/components/certifications"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Blog />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
