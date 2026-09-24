"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BarChart3, Code, Workflow, ShieldCheck, type LucideIcon } from "lucide-react"

type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

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
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skillGroups: SkillGroup[] = [
    {
      title: "Datos",
      icon: BarChart3,
      skills: ["Power BI", "Excel avanzado", "SQL", "MySQL", "SQL Server", "MongoDB", "Python (análisis de datos)", "Modelado de datos"],
    },
    {
      title: "Desarrollo de Software",
      icon: Code,
      skills: ["Java", "TypeScript", "React", "Angular", "Node.js + Express", "Spring Boot", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Microsoft 365 y Automatización",
      icon: Workflow,
      skills: ["Microsoft Graph API", "Excel Online / SharePoint", "Power Automate", "Microsoft Forms", "MSAL (autenticación)"],
    },
    {
      title: "Calidad, Nube e Infraestructura",
      icon: ShieldCheck,
      skills: ["Pruebas de software (QA)", "Documentación funcional", "AWS Cloud Foundations", "Redes (IPv6, Cisco)", "Linux"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0c1425] to-[#0f172a]">
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
            Herramientas y tecnologías con las que trabajo en análisis de datos, desarrollo de software y automatización.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              className="skill-card rounded-lg bg-slate-800/80 border border-blue-900/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-blue-900/30 text-blue-400 skill-icon">
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-slate-300 mt-10"
        >
          <span className="text-blue-400 font-medium">Idiomas:</span> Español (nativo) · Inglés (nivel bueno en lectura,
          habla y escritura)
        </motion.p>
      </div>
    </section>
  )
}
