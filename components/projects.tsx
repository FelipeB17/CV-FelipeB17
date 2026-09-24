"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock } from "lucide-react"
import { Github } from "@/components/brand-icons"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // Los proyectos sin githubUrl son de clientes y su código es privado
  const projects: { id: number; title: string; description: string; image: string; tags: string[]; githubUrl?: string; demoUrl?: string }[] = [
    {
      id: 0,
      title: "Guías de Envío Kamakala",
      description:
        "Herramienta web para Kamakala (fábrica de calzado) que carga los pedidos de cada venta en vivo desde Google Sheets y genera las guías de envío listas para imprimir o guardar en PDF, eliminando el proceso manual y reduciendo los tiempos de despacho.",
      image: "/images/kamakala.png",
      tags: ["Next.js", "JavaScript", "Google Sheets", "Automatización"],
    },
    {
      id: 1,
      title: "Sitio web de orquesta Doggers de Colombia",
      description:
        "Página web oficial para una orquesta: presentación de la agrupación, temporada y conciertos, y canales de contacto. Diseño responsivo con énfasis en programación y comunicación con el público.",
      image: "/images/doggers-colombia.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      demoUrl: "https://doggersdecolombia.netlify.app/",
    },
    {
      id: 2,
      title: "Sistema de Control de Gastos Personales",
      description:
        "Aplicación para gestionar y controlar gastos personales, permitiendo un mejor manejo de las finanzas.",
      image: "/images/expense-tracker.jpeg",
      tags: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/FelipeB17/-Sistema-de-Control-de-Gastos-Personales.git",
    },
    {
      id: 3,
      title: "Chomsky To Greibach",
      description: "Conversor de gramáticas en Forma Normal de Chomsky a Forma Normal de Greibach.",
      image: "/images/converter.jpeg",
      tags: ["Java", "Algoritmos", "Teoría de Lenguajes"],
      githubUrl: "https://github.com/FelipeB17/Chomsky-TO-Greibach.git",
    },
    {
      id: 4,
      title: "Convertidor AFND TO AFD",
      description: "Herramienta para convertir Autómatas Finitos No Deterministas a Autómatas Finitos Deterministas.",
      image: "/images/converter.jpeg",
      tags: ["Java", "Autómatas", "Algoritmos"],
      githubUrl: "https://github.com/FelipeB17/CONVERTIDOR-AFND-A-AFD.git",
    },
    {
      id: 5,
      title: "Verificador de Gramática",
      description: "Aplicación que verifica si una gramática cumple con ciertas propiedades y reglas específicas.",
      image: "/images/grammar-checker.png",
      tags: ["Java", "Gramáticas", "Compiladores"],
      githubUrl: "https://github.com/FelipeB17/Verificador-de-Gramatica.git",
    },
    {
      id: 6,
      title: "Proyecto Inmobiliaria",
      description:
        "Uno de mis primeros proyectos desarrollado con tecnologías web básicas (HTML, CSS y JavaScript vanilla).",
      image: "/images/real-estate.png",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/FelipeB17/ProyectoInmobiliaria.git",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden projects-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="text-center mb-16"
        >
          <motion.div variants={item} className="inline-block mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Portafolio
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </motion.h2>
          <motion.p variants={item} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Una selección de mis trabajos y proyectos personales.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="card-hover">
              <Card className="border-0 shadow-xl overflow-hidden project-card bg-white dark:bg-slate-800 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover project-image"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-blue-800 text-slate-200 hover:bg-blue-900/30 hover:text-white"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Código
                        </a>
                      </Button>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-slate-700 text-sm text-slate-400"
                        title="Proyecto para un cliente: el código es privado"
                      >
                        <Lock className="h-4 w-4" />
                        Código privado
                      </span>
                    )}
                    {project.demoUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
