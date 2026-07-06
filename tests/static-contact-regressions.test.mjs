import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { test } from 'node:test'

const readProjectFile = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('contact form hands submitted leads to email instead of dropping them', async () => {
  const contact = await readProjectFile('components/Contact.tsx')

  assert.match(contact, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(contact, /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}\?subject=\$\{subject\}&body=\$\{body\}`/)
  assert.doesNotMatch(contact, /console\.log\('Form submitted:'/)
  assert.doesNotMatch(contact, /setFormData\(\{ name: '', email: '', message: '' \}\)/)
})

test('lead-generation CTAs route to the real contact page', async () => {
  const [about, logoDesign] = await Promise.all([
    readProjectFile('components/About.tsx'),
    readProjectFile('components/LogoDesign.tsx'),
  ])

  assert.match(about, /href="\/contact"/)
  assert.match(logoDesign, /href="\/contact"/)
  assert.doesNotMatch(about, /href="#contact"/)
  assert.doesNotMatch(logoDesign, /href="#contact"/)
})

test('GitHub Pages static export includes the custom domain', async () => {
  const cname = await readProjectFile('public/CNAME')

  assert.equal(cname.trim(), 'digitopiainc.com')
})
