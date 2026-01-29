'use client'

import { Linkedin, MapPin, Phone, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const servicesLinks = [
  { name: 'Logo Design', href: '/services' },
  { name: 'UI/UX Design', href: '/services' },
  { name: 'Marketing Websites', href: '/services' },
  { name: 'Platform Development', href: '/services' },
  { name: 'Web Development', href: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#0a101c] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
                <span className="text-white font-bold tracking-tight">DI</span>
              </span>
              <span className="text-white font-semibold text-lg tracking-tight">
                Digitobia Inc
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Crafting digital excellence for enterprises through innovative design
              and development solutions.
            </p>

            <div className="mt-6 flex items-center gap-4 text-white/55">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-white/50" />
                <span className="text-white/60">
                  123 Innovation Drive, Tech Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/50" />
                <span className="text-white/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/50" />
                <span className="text-white/60">hello@digitobia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} Digitobia Inc. All rights reserved. |{' '}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
