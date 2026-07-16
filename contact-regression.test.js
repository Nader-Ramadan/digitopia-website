const assert = require('node:assert/strict')
const fs = require('node:fs')
const test = require('node:test')

const contact = fs.readFileSync('components/Contact.tsx', 'utf8')
const about = fs.readFileSync('components/About.tsx', 'utf8')
const logoDesign = fs.readFileSync('components/LogoDesign.tsx', 'utf8')
const publicCname = fs.readFileSync('public/CNAME', 'utf8').trim()

test('contact form hands off the full lead instead of dropping it', () => {
  assert.match(contact, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(
    contact,
    /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}\?subject=\$\{subject\}&body=\$\{body\}`/
  )
  assert.doesNotMatch(
    contact,
    /setFormData\(\{\s*name: '',\s*email: '',\s*message: '',\s*\}\)/
  )
  assert.doesNotMatch(contact, /alert\('Thank you for your message!/)
})

test('lead-generation CTAs route to the rendered contact page', () => {
  assert.match(about, /href="\/contact"/)
  assert.match(logoDesign, /href="\/contact"/)
  assert.doesNotMatch(about, /href="#contact"/)
  assert.doesNotMatch(logoDesign, /href="#contact"/)
})

test('GitHub Pages artifact preserves the custom domain', () => {
  assert.equal(publicCname, 'digitopiainc.com')
})
