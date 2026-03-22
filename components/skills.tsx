"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const skills = [
    { name: "Power BI", level: 75 },
    { name: "Excel Avanzado", level: 80 },
    { name: "SQL / MySQL", level: 70 },
    { name: "Python (Análisis de Datos)", level: 55 },
    { name: "ETL y Pipelines de Datos", level: 50 },
    { name: "QA / Testing de Software", level: 60 },
    { name: "Análisis de Datos", level: 70 },
    { name: "Documentación Técnica", level: 65 },
    { name: "Control de Procesos", level: 70 },
    { name: "Visualización de Datos", level: 65 },
    { name: "React / TypeScript", level: 45 },
    { name: "Modelado de Datos", level: 50 },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0c1425] to-[#0f172a]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-900 rounded-full opacity-20 blur-3xl" />
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
            <span className="inline-block px-3 py-1 bg-blue-900/40 text-blue-400 rounded-full text-sm font-medium">
              Habilidades
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Mis <span className="text-gradient">Competencias</span> Técnicas
          </motion.h2>
          <motion.p variants={item} className="text-slate-300 max-w-2xl mx-auto">
            Herramientas y tecnologías enfocadas en análisis de datos, ingeniería de datos y aseguramiento de calidad.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <div className="mb-2 flex justify-between items-center">
                <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
              </div>
              <div className="skill-progress-bar">
                <motion.div
                  className="skill-progress-value"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">En proceso de aprendizaje</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
