"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "María García",
      role: "CEO, Empresa XYZ",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Trabajar con este desarrollador fue una experiencia excepcional. Entregó el proyecto a tiempo y superó todas nuestras expectativas. Su atención al detalle y capacidad para entender nuestras necesidades fue impresionante.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Director de Marketing, Empresa ABC",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Un profesional increíble que transformó nuestra visión en realidad. Su conocimiento técnico y habilidades de diseño nos ayudaron a crear una plataforma que nuestros clientes adoran usar.",
    },
    {
      id: 3,
      name: "Laura Martínez",
      role: "Fundadora, Startup DEF",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Encontrar un desarrollador que combine habilidades técnicas con una excelente comunicación es raro. Su capacidad para explicar conceptos complejos de manera sencilla hizo que el proceso fuera muy fluido.",
    },
  ]

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden bg-blue-50 dark:bg-slate-900/50">
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
              Testimonios
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4">
            Lo que <span className="text-gradient">dicen</span> de mí
          </motion.h2>
          <motion.p variants={item} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Opiniones de clientes y colaboradores con los que he trabajado.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-0 shadow-xl overflow-hidden bg-white dark:bg-slate-800">
                <CardContent className="p-8 md:p-12">
                  <div className="absolute top-8 right-8 text-blue-200 dark:text-blue-800">
                    <Quote className="h-16 w-16" />
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <Avatar className="h-20 w-20 border-4 border-blue-100 dark:border-blue-900">
                      <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                      <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 italic">
                        "{testimonials[activeIndex].quote}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                        <p className="text-blue-600 dark:text-blue-400">{testimonials[activeIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-blue-600 w-8" : "bg-blue-200 dark:bg-blue-800"
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
