"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <a href="#home" className="flex items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-sm opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
            rotate: [0, 0, 0, 0, 0, 0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <div className="relative bg-slate-900 border-2 border-blue-500 rounded-lg px-3 py-2 flex items-center justify-center z-10">
          <motion.span
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            FB
          </motion.span>
          <motion.div
            className="absolute -right-1 -top-1 w-3 h-3 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              y: [0, -3, 0],
              x: [0, 3, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-1 -bottom-1 w-2 h-2 bg-indigo-500 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.7, 1, 0.7],
              y: [0, 3, 0],
              x: [0, -3, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1 bottom-1 w-1.5 h-1.5 bg-purple-500 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              delay: 1,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </a>
  )
}
