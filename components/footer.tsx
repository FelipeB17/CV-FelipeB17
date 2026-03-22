"use client"

import Link from "next/link"
import { Github, Mail, ArrowUp, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <div className="flex items-center mb-4">
              <Logo />
              <h3 className="text-2xl font-bold ml-3 text-white">Andres Felipe Beltran Assaf</h3>
            </div>
            <p className="text-blue-200 max-w-md">
              Estudiante de Ingeniería de Sistemas con enfoque en Análisis de Datos, Ingeniería de Datos y QA.
              Competente en Power BI, SQL, Excel avanzado y pruebas de software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex gap-4 mb-6">
              <Link href="https://github.com/FelipeB17" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-white/10 hover:bg-white/20 text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/andres-felipe-beltran-assaf-4221b0215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-white/10 hover:bg-white/20 text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:andresfelipebeltranassaf@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-white/10 hover:bg-white/20 text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 text-sm text-center w-full">
              © {currentYear} Andres Felipe Beltran Assaf. Portafolio profesional - Todos los derechos reservados.
            </p>
          </motion.div>
        </div>

        <div className="absolute right-8 bottom-16 md:bottom-4">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Volver arriba</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
