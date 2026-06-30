import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const readSource = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('contact form hands static submissions to the business email without clearing data', () => {
  const contactSource = readSource('components/Contact.tsx')

  assert.match(contactSource, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(contactSource, /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}\?subject=\$\{subject\}&body=\$\{body\}`/)
  assert.match(contactSource, /encodeURIComponent\(/)
  assert.doesNotMatch(contactSource, /console\.log\('Form submitted:'/)
  assert.doesNotMatch(contactSource, /alert\('Thank you for your message!/)
  assert.doesNotMatch(contactSource, /setFormData\(\{ name: '', email: '', message: '' \}\)/)
})

test('conversion CTAs route to the real contact page', () => {
  const aboutSource = readSource('components/About.tsx')
  const logoDesignSource = readSource('components/LogoDesign.tsx')

  assert.match(aboutSource, /href="\/contact"/)
  assert.match(logoDesignSource, /href="\/contact"/)
  assert.doesNotMatch(aboutSource, /href="#contact"/)
  assert.doesNotMatch(logoDesignSource, /href="#contact"/)
})

test('GitHub Pages export includes the custom domain CNAME', () => {
  const rootCname = readSource('CNAME').trim()
  const publicCname = readSource('public/CNAME').trim()

  assert.equal(rootCname, 'digitopiainc.com')
  assert.equal(publicCname, rootCname)
})
