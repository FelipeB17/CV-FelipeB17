"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Shield, Lightbulb, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden dark-section">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0c1425] to-[#0f172a]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-900 rounded-full opacity-20 blur-3xl" />
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
              Sobre Mí
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4">
            Conoce mi <span className="text-gradient">historia</span>
          </motion.h2>
          <motion.p variants={item} className="text-slate-300 max-w-2xl mx-auto">
            Estudiante de Ingeniería de Sistemas con enfoque en Análisis de Datos, Ingeniería de Datos y QA
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Mi Historia</h3>
                <p className="text-slate-300 mb-4">
                  ¡Hola! Soy Andrés Felipe Beltrán Assaf, orgullosamente de Cúcuta, Norte de Santander,
                  Colombia. Actualmente estudio Ingeniería de Sistemas desde el año 2022, un camino que elegí no por
                  casualidad, sino por pasión.
                </p>
                <p className="text-slate-300 mb-4">
                  Cuento con experiencia en gestión administrativa, seguimiento de procedimientos y manejo de información
                  organizacional. Soy competente en Excel avanzado, Power BI y bases de datos para la elaboración de reportes,
                  análisis de indicadores y apoyo en la toma de decisiones.
                </p>
                <p className="text-slate-300">
                  Mi perfil es analítico, orientado a la mejora continua, optimización de recursos y cumplimiento de
                  lineamientos internos. Me apasiona transformar datos en información valiosa para la toma de decisiones.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Educación y Experiencia</h3>
                <ul className="space-y-6">
                  <li className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div className="absolute left-2 top-4 w-[1px] h-[calc(100%+10px)] bg-gradient-to-b from-blue-600 to-transparent"></div>
                    <h4 className="font-bold text-lg">Estudiante de Ingeniería de Sistemas</h4>
                    <p className="text-sm text-blue-400 font-medium">
                      Universidad Francisco de Paula Santander • 2022 - Presente
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Desarrollando competencias en programación, trabajo colaborativo y gestión de TI.
                    </p>
                  </li>
                  <li className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div className="absolute left-2 top-4 w-[1px] h-[calc(100%+10px)] bg-gradient-to-b from-blue-600 to-transparent"></div>
                    <h4 className="font-bold text-lg">Fundación Conexión Paz</h4>
                    <p className="text-sm text-blue-400 font-medium">Cúcuta, Colombia • 2022 - 2024</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Seguimiento y control de procesos administrativos. Análisis de datos y optimización operativa.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="quote-container mx-auto max-w-4xl"
          >
            <p className="quote-text text-lg md:text-xl text-slate-300">
              Si estás aprendiendo algo nuevo y sientes que no eres lo suficientemente bueno todavía, recuerda esto:
              nadie nace siendo experto. Cada línea de código que no funciona, cada error, cada intento, es parte del
              proceso. La clave está en no rendirse. Aprende a tu ritmo, cree en ti, y sigue adelante. ¡El progreso es
              inevitable si no dejas de intentarlo!
            </p>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          Mis <span className="text-gradient">Intereses</span>
        </motion.h3>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Análisis de Datos</h3>
                <p className="text-slate-300 text-center">
                  Transformo datos en información valiosa para la toma de decisiones estratégicas usando Power BI y Excel.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Database className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Ingeniería de Datos</h3>
                <p className="text-slate-300 text-center">
                  Diseño de pipelines ETL, modelado de datos y gestión de bases de datos SQL para sistemas escalables.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Shield className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">QA y Testing</h3>
                <p className="text-slate-300 text-center">
                  Diseño de casos de prueba, validación funcional, documentación de incidencias y aseguramiento de calidad.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Cpu className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Control de Procesos</h3>
                <p className="text-slate-300 text-center">
                  Seguimiento y optimización de procedimientos operativos para mejorar eficiencia organizacional.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Code className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Desarrollo Web</h3>
                <p className="text-slate-300 text-center">
                  Conocimientos en React y TypeScript para crear aplicaciones web modernas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="skill-card">
            <Card className="border-0 shadow-lg hover:shadow-xl bg-slate-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                    <Globe className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Visualización de Datos</h3>
                <p className="text-slate-300 text-center">
                  Creación de dashboards interactivos y reportes visuales para comunicar insights de manera efectiva.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
