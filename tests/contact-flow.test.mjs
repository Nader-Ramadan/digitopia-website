import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const contact = readFileSync(new URL('../components/Contact.tsx', import.meta.url), 'utf8')
const about = readFileSync(new URL('../components/About.tsx', import.meta.url), 'utf8')
const logoDesign = readFileSync(new URL('../components/LogoDesign.tsx', import.meta.url), 'utf8')
const exportedCname = readFileSync(new URL('../public/CNAME', import.meta.url), 'utf8').trim()

test('static contact form hands off populated inquiries without clearing them', () => {
  assert.match(contact, /mailto:\$\{CONTACT_EMAIL\}\?subject=\$\{subject\}&body=\$\{body\}/)
  assert.match(contact, /Name: \$\{formData\.name\}/)
  assert.match(contact, /Email: \$\{formData\.email\}/)
  assert.doesNotMatch(contact, /console\.log\('Form submitted:'/)
  assert.doesNotMatch(contact, /setFormData\(\{ name: '', email: '', message: '' \}\)/)
})

test('conversion CTAs navigate to the rendered contact page', () => {
  assert.doesNotMatch(about, /href="#contact"/)
  assert.doesNotMatch(logoDesign, /href="#contact"/)
  assert.match(about, /href="\/contact"/)
  assert.match(logoDesign, /href="\/contact"/)
})

test('static export includes the GitHub Pages custom domain', () => {
  assert.equal(exportedCname, 'digitopiainc.com')
})
