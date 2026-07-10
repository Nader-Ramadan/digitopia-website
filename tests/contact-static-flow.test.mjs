import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

const contact = read('components/Contact.tsx')
const about = read('components/About.tsx')
const logoDesign = read('components/LogoDesign.tsx')
const publicCname = read('public/CNAME').trim()

assert.match(
  contact,
  /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/,
  'contact email should use the public business inbox'
)

assert.match(
  contact,
  /window\.location\.href = `mailto:\$\{CONTACT_EMAIL\}\?subject=\$\{subject\}&body=\$\{body\}`/,
  'static form submissions should open a prefilled mail client handoff'
)

assert.doesNotMatch(
  contact,
  /setFormData\(\{\s*name:\s*'',\s*email:\s*'',\s*message:\s*'',?\s*\}\)/,
  'contact form must not clear unsent lead details after submit'
)

assert.doesNotMatch(
  contact,
  /console\.log\('Form submitted:',\s*formData\)/,
  'contact form must not treat console logging as submission persistence'
)

for (const [name, source] of [
  ['About', about],
  ['LogoDesign', logoDesign],
]) {
  assert.match(
    source,
    /href="\/contact"/,
    `${name} CTA should route to the real contact page`
  )
  assert.doesNotMatch(
    source,
    /href="#contact"/,
    `${name} CTA should not target a missing in-page contact anchor`
  )
}

assert.equal(
  publicCname,
  'digitopiainc.com',
  'GitHub Pages export should include the custom domain CNAME from public/'
)
