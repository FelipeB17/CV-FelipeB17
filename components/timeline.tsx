"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap } from 'lucide-react'

export default function Timeline() {
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

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const timelineItems = [
    {
      id: 1,
      title: "Estudiante de Ingeniería de Sistemas",
      company: "Universidad Francisco de Paula Santander",
      location: "Cúcuta, Colombia",
      period: "2022 - Presente",
      description:
        "Desarrollando competencias en programación, trabajo colaborativo, resolución de problemas y gestión de tecnologías de la información.",
      type: "education",
    },
    {
      id: 2,
      title: "Gestión Administrativa y Análisis de Datos",
      company: "Fundación Conexión Paz",
      location: "Cúcuta, Colombia",
      period: "Enero 2022 - Diciembre 2024",
      description:
        "Seguimiento y control de procesos administrativos garantizando cumplimiento normativo. Análisis de tiempos de respuesta y optimización de procedimientos operativos. Elaboración de reportes administrativos con Power BI y Excel. Gestión de bases de datos y mejora de canales digitales de comunicación (+30% eficiencia).",
      type: "work",
    },
    {
      id: 3,
      title: "Bachiller",
      company: "Colegio Madre Carmen",
      location: "Cúcuta, Colombia",
      period: "2021",
      description:
        "Graduado como bachiller, donde desarrollé habilidades fundamentales y descubrí mi pasión por la tecnología y la informática.",
      type: "education",
    },
  ]

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
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
          <motion.div variants={itemAnimation} className="inline-block mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Trayectoria
            </span>
          </motion.div>
          <motion.h2 variants={itemAnimation} className="text-3xl md:text-5xl font-bold mb-4">
            Mi <span className="text-gradient">Recorrido</span> Profesional
          </motion.h2>
          <motion.p variants={itemAnimation} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un vistazo a mi formación académica y experiencia laboral.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent" />

          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={container} className="space-y-12">
            {timelineItems.map((timelineItem, index) => (
              <motion.div
                key={timelineItem.id}
                variants={itemAnimation}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
                  <div
                    className={`p-6 rounded-lg shadow-lg border border-blue-100 dark:border-blue-900 bg-white dark:bg-slate-800 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          timelineItem.type === "work"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        }`}
                      >
                        {timelineItem.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{timelineItem.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{timelineItem.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-1">{timelineItem.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{timelineItem.location}</p>
                    <p className="text-slate-600 dark:text-slate-300">{timelineItem.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

