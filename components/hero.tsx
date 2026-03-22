"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Create particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden hero-pattern min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="animated-bg-shape"></div>
        <div className="animated-bg-shape"></div>
        <div className="animated-bg-shape"></div>
        <div className="animated-bg-shape"></div>
        <div className="animated-bg-shape"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -500],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              <div className="bg-slate-900 rounded-full px-4 py-1">
                <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                  Estudiante de Ingeniería de Sistemas
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hola, soy <span className="text-gradient">Andres Felipe</span>{" "}
              <span className="text-gradient">Beltran Assaf</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Enfoque en Análisis de Datos, Ingeniería de Datos y Quality Assurance (QA)
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20"
              >
                <a href="#projects">
                  Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full border-blue-700 hover:bg-blue-900/30">
                <a href="#contact">Contacto</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://github.com/FelipeB17" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-slate-800 shadow-md hover:shadow-lg hover:bg-slate-700 transition-all"
                >
                  <Github className="h-5 w-5 text-blue-400" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/andres-felipe-beltran-assaf-4221b0215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-slate-800 shadow-md hover:shadow-lg hover:bg-slate-700 transition-all"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:andresfelipebeltranassaf@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12 bg-slate-800 shadow-md hover:shadow-lg hover:bg-slate-700 transition-all"
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-blue-500/20 glow">
              <Image src="/profile.jpg" alt="Andres Felipe Beltran Assaf" fill className="object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-slate-400 mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}
