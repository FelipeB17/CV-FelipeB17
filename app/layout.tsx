import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Netlify define URL con el dominio del sitio durante el build
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title: "Andres Felipe Beltran Assaf | Estudiante de Ingeniería de Sistemas",
  description:
    "Portafolio de Andres Felipe Beltran Assaf, estudiante de décimo semestre de Ingeniería de Sistemas (UFPS) con enfoque en Análisis de Datos, Desarrollo de Software y Bases de Datos.",
  openGraph: {
    title: "Andres Felipe Beltran Assaf",
    description: "Análisis de Datos, Desarrollo de Software y Bases de Datos",
    images: ["/profile.jpg"],
    locale: "es_CO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
