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

assert(
  contact.includes("const CONTACT_EMAIL = 'hello@digitopiainc.com'"),
  'Contact form should use the public Digitopia contact email.'
)
assert(
  contact.includes('window.location.href = buildMailtoHref(formData)'),
  'Contact form should hand off submissions instead of pretending they were sent.'
)
assert(
  contact.includes('mailto:${CONTACT_EMAIL}'),
  'Contact form should build a mailto URL with the configured contact email.'
)
assert(
  !contact.includes("console.log('Form submitted:', formData)"),
  'Contact form should not only log submitted leads.'
)
assert(
  !contact.includes("alert('Thank you for your message! We will get back to you soon.')"),
  'Contact form should not show a success message before sending.'
)
assert(
  !contact.includes("setFormData({ name: '', email: '', message: '' })"),
  'Contact form should not erase unsent lead details.'
)
assert(
  !about.includes('href="#contact"') && about.includes('href="/contact"'),
  'About CTA should route to the contact page.'
)
assert(
  !logoDesign.includes('href="#contact"') && logoDesign.includes('href="/contact"'),
  'Logo Design CTA should route to the contact page.'
)

const rootCname = read('CNAME').trim()
const publicCnamePath = path.join(root, 'public', 'CNAME')

assert(fs.existsSync(publicCnamePath), 'public/CNAME should exist for static export.')
assert(
  fs.readFileSync(publicCnamePath, 'utf8').trim() === rootCname,
  'public/CNAME should match the root custom domain.'
)

console.log('Regression checks passed.')
