const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

const contact = read('components/Contact.tsx')
const about = read('components/About.tsx')
const logoDesign = read('components/LogoDesign.tsx')
const rootCname = read('CNAME').trim()
const publicCname = read('public/CNAME').trim()

assert(
  contact.includes("const CONTACT_EMAIL = 'hello@digitopiainc.com'"),
  'Contact form must target the published Digitopia email address.'
)
assert(
  contact.includes('window.location.href = `mailto:${CONTACT_EMAIL}'),
  'Contact form submissions must open a prefilled email instead of being dropped.'
)
assert(
  !contact.includes("console.log('Form submitted:', formData)"),
  'Contact form must not treat console logging as submission handling.'
)
assert(
  !contact.includes("setFormData({ name: '', email: '', message: '' })"),
  'Contact form must not clear unsent user data after submit.'
)
assert(
  !about.includes('href="#contact"') && about.includes('href="/contact"'),
  'About CTA must route to the contact page, not a missing local anchor.'
)
assert(
  !logoDesign.includes('href="#contact"') && logoDesign.includes('href="/contact"'),
  'Logo design CTA must route to the contact page, not a missing local anchor.'
)
assert(
  rootCname === publicCname && publicCname === 'digitopiainc.com',
  'The custom domain CNAME must be present in public/ so static export includes it.'
)

console.log('Critical contact and deployment flow checks passed.')
