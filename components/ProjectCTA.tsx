'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCTA() {
  return (
    <section
      aria-label="Project call to action"
      className="py-20 md:py-24 bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium text-white tracking-tight"
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-white/90"
        >
          Let&apos;s bring your vision to life with cutting-edge digital solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1220] px-8 py-4 text-white font-semibold shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-white/0 px-8 py-4 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              See Our Work
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

