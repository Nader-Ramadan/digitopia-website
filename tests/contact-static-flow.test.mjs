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
  'Contact form should use the published Digitopia contact email'
)
assert.match(
  contact,
  /mailto:\$\{CONTACT_EMAIL\}\?subject=/,
  'Contact form should hand static submissions to a prefilled mailto URL'
)
assert.match(
  contact,
  /window\.location\.href = buildContactMailtoHref\(formData\)/,
  'Contact form submit should open the prefilled mailto URL'
)
assert.doesNotMatch(
  contact,
  /alert\(/,
  'Contact form must not claim success without transmitting the lead'
)
assert.doesNotMatch(
  contact,
  /setFormData\(\{\s*name: '',\s*email: '',\s*message: '',?\s*\}\)/s,
  'Contact form must not clear unsent lead data'
)
assert.match(
  about,
  /href="\/contact"/,
  'About CTA should route to the contact page'
)
assert.match(
  logoDesign,
  /href="\/contact"/,
  'Logo design CTA should route to the contact page'
)
assert.doesNotMatch(
  `${about}\n${logoDesign}`,
  /href="#contact"/,
  'Conversion CTAs must not target a missing in-page contact anchor'
)
assert.equal(
  publicCname,
  'digitopiainc.com',
  'GitHub Pages static export should include the custom domain CNAME'
)
