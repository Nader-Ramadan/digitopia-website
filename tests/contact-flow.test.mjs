import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const readText = (path) => readFileSync(path, 'utf8')

test('contact form hands submissions to email without discarding user input', () => {
  const contact = readText('components/Contact.tsx')

  assert.match(contact, /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}/)
  assert.doesNotMatch(contact, /alert\(/)
  assert.doesNotMatch(
    contact,
    /setFormData\(\{\s*name:\s*'',\s*email:\s*'',\s*message:\s*''\s*\}\)/
  )
})

test('lead capture CTAs navigate to the contact page', () => {
  assert.match(readText('components/About.tsx'), /href="\/contact"/)
  assert.match(readText('components/LogoDesign.tsx'), /href="\/contact"/)
})

test('GitHub Pages static export includes the custom domain source file', () => {
  assert.equal(readText('public/CNAME').trim(), 'digitopiainc.com')
})
