import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const readProjectFile = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('contact form opens a prefilled email draft instead of discarding leads', async () => {
  const source = await readProjectFile('components/Contact.tsx')

  assert.match(source, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(source, /mailto:\$\{CONTACT_EMAIL\}/)
  assert.match(source, /encodeURIComponent\(\s*subject\s*\)/)
  assert.match(source, /encodeURIComponent\(body\)/)
  assert.doesNotMatch(source, /console\.log\('Form submitted:'[,)]/)
  assert.doesNotMatch(source, /setFormData\(\{\s*name:\s*'',\s*email:\s*'',\s*message:\s*''\s*\}\)/)
})

test('routed pages do not link CTAs to a missing #contact anchor', async () => {
  const [aboutSource, logoDesignSource] = await Promise.all([
    readProjectFile('components/About.tsx'),
    readProjectFile('components/LogoDesign.tsx'),
  ])

  assert.doesNotMatch(aboutSource, /href="#contact"/)
  assert.doesNotMatch(logoDesignSource, /href="#contact"/)
  assert.match(aboutSource, /href="\/contact"/)
  assert.match(logoDesignSource, /href="\/contact"/)
})

test('GitHub Pages static export includes the custom domain CNAME', async () => {
  const [rootCname, publicCname] = await Promise.all([
    readProjectFile('CNAME'),
    readProjectFile('public/CNAME'),
  ])

  assert.equal(publicCname.trim(), rootCname.trim())
})
