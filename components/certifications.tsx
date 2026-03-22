"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Network, Terminal, HardDrive, Brain } from "lucide-react"

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

  const certifications = [
    {
      id: 1,
      title: "IPv6 básico - 1ra edición 2025",
      organization: "LACNIC",
      url: "http://campus.lacnic.net/",
      date: "Abril 2025",
      credentialId: "R5cUSTesI9",
      icon: "globe",
    },
    {
      id: 2,
      title: "Networking Basics",
      organization: "Cisco",
      url: "#",
      date: "Marzo 2025",
      icon: "network",
    },
    {
      id: 3,
      title: "Linux Essentials",
      organization: "Cisco",
      url: "#",
      date: "Noviembre 2024",
      icon: "terminal",
    },
    {
      id: 4,
      title: "Operating Systems Basics",
      organization: "Cisco",
      url: "#",
      date: "Septiembre 2024",
      icon: "hardDrive",
    },
    {
      id: 5,
      title: "Google AI Essentials",
      organization: "Google",
      url: "#",
      date: "Agosto 2024",
      credentialId: "H2TYQE63X88O",
      icon: "brain",
    },
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case "globe":
        return <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      case "network":
        return <Network className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      case "terminal":
        return <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      case "hardDrive":
        return <HardDrive className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      case "brain":
        return <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      default:
        return <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
    }
  }

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
            <motion.div key={cert.id} variants={item}>
              <Card className="border-0 shadow-xl overflow-hidden bg-white dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                      {getIcon(cert.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-1">{cert.organization}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Expedición: {cert.date}</p>
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
