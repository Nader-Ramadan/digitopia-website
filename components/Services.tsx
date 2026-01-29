'use client'

import { motion } from 'framer-motion'
import { Brush, Code2, CreditCard, Globe, Layout } from 'lucide-react'

const services = [
  {
    icon: Brush,
    title: 'Logo Design',
    description:
      'Distinctive brand identities that capture your enterprise essence and resonate with your target market.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description:
      'Intuitive, user-centered interfaces that deliver exceptional experiences and drive engagement.',
  },
  {
    icon: Globe,
    title: 'Marketing Websites',
    description:
      'High-converting websites optimized for lead generation and brand storytelling.',
  },
  {
    icon: CreditCard,
    title: 'Platform Development',
    description:
      'Scalable, full-featured platforms built to handle enterprise-level requirements.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Modern, performant web applications using cutting-edge technologies and best practices.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#070b14] via-[#050914] to-[#070b14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for enterprise success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLastRowCentered =
              services.length === 5 && index >= 3 && index <= 4

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={[
                  'p-10 rounded-2xl',
                  'bg-gradient-to-br from-white/5 to-white/0',
                  'border border-white/10',
                  'shadow-[0_20px_60px_rgba(0,0,0,0.45)]',
                  'backdrop-blur-sm',
                  'transition-all',
                  'hover:border-white/20 hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)]',
                  // Center last row (2 cards) on large screens
                  isLastRowCentered ? 'lg:col-span-1 lg:col-start-2' : '',
                ].join(' ')}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-7 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
