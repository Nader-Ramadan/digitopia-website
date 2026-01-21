'use client'

import { motion } from 'framer-motion'
import { Users, Award, TrendingUp, Heart } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '1000+', label: 'Projects Completed' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Heart, value: '10+', label: 'Years Experience' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DigitalForge
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a passionate team of designers, developers, and strategists
              dedicated to creating digital experiences that make a difference.
              With years of experience and a commitment to excellence, we help
              businesses thrive in the digital landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines creativity with data-driven insights to
              deliver solutions that not only look great but also drive real
              business results. We believe in building long-term partnerships
              with our clients.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Work With Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg text-center border border-primary-100"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
