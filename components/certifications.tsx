"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Network, Terminal, HardDrive, Brain, Database, Cloud, Code, type LucideIcon } from "lucide-react"

type Certification = {
  title: string
  organization: string
  date: string
  hours?: number
  credentialId?: string
  icon: LucideIcon
}

export default function Certifications() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const certifications: Certification[] = [
    {
      title: "MongoDB Overview: Core Concepts and Architecture",
      organization: "MongoDB",
      date: "Septiembre 2026",
      icon: Database,
    },
    {
      title: "AWS Academy Cloud Foundations",
      organization: "Amazon Web Services (AWS)",
      date: "2026",
      hours: 20,
      icon: Cloud,
    },
    {
      title: "Full Stack Empresarial con Spring Boot 4 y Angular 21",
      organization: "Dev Senior Code",
      date: "2026",
      icon: Code,
    },
    {
      title: "Introducción a gestión de redes – Edición 1",
      organization: "LACNIC Campus",
      date: "2025",
      hours: 65,
      icon: Network,
    },
    {
      title: "IPv6 básico – 1ra edición 2025",
      organization: "LACNIC Campus",
      date: "Abril 2025",
      hours: 20,
      credentialId: "R5cUSTesI9",
      icon: Globe,
    },
    {
      title: "Networking Basics",
      organization: "Cisco Networking Academy",
      date: "Marzo 2025",
      hours: 20,
      icon: Network,
    },
    {
      title: "Google AI Essentials",
      organization: "Google",
      date: "2025",
      hours: 20,
      credentialId: "H2TYQE63X88O",
      icon: Brain,
    },
    {
      title: "Linux Essentials",
      organization: "Cisco Networking Academy",
      date: "Noviembre 2024",
      icon: Terminal,
    },
    {
      title: "Operating Systems Basics",
      organization: "Cisco Networking Academy",
      date: "Septiembre 2024",
      icon: HardDrive,
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden bg-blue-50 dark:bg-slate-900/50">
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
              Certificaciones
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4">
            Mis <span className="text-gradient">Cursos</span> y Certificaciones
          </motion.h2>
          <motion.p variants={item} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Formación continua y desarrollo de habilidades técnicas
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={item}>
              <Card className="border-0 shadow-xl overflow-hidden bg-white dark:bg-slate-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                      <cert.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-1">{cert.organization}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        Expedición: {cert.date}
                        {cert.hours && ` · ${cert.hours} horas`}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                          ID de la credencial: {cert.credentialId}
                        </p>
                      )}
                    </div>
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
