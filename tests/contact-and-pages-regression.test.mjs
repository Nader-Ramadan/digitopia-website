import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('contact form submits via a prefilled mailto without discarding the message', () => {
  const contact = read('components/Contact.tsx')

  assert.match(contact, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(contact, /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}/)
  assert.match(contact, /encodeURIComponent\(\s*subject\s*\)/)
  assert.match(contact, /encodeURIComponent\(body\)/)
  assert.doesNotMatch(contact, /alert\('Thank you for your message!/)
  assert.doesNotMatch(contact, /console\.log\('Form submitted:'/)
  assert.doesNotMatch(
    contact,
    /setFormData\(\{\s*name: '',\s*email: '',\s*message: '',?\s*\}\)/
  )
})

test('conversion CTAs on routed pages navigate to the real contact page', () => {
  const about = read('components/About.tsx')
  const logoDesign = read('components/LogoDesign.tsx')

  assert.doesNotMatch(about, /href="#contact"/)
  assert.doesNotMatch(logoDesign, /href="#contact"/)
  assert.match(about, /href="\/contact"/)
  assert.match(logoDesign, /href="\/contact"/)
})

test('custom domain is included in the static export source directory', () => {
  const rootCname = read('CNAME').trim()
  const publicCname = read('public/CNAME').trim()

  assert.equal(rootCname, 'digitopiainc.com')
  assert.equal(publicCname, rootCname)
})
