const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const root = path.resolve(__dirname, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

test('contact form hands messages to email without clearing unsent data', () => {
  const contact = read('components/Contact.tsx')

  assert.match(contact, /const CONTACT_EMAIL = 'hello@digitopiainc\.com'/)
  assert.match(contact, /const mailtoUrl = `mailto:\$\{CONTACT_EMAIL\}/)
  assert.match(contact, /window\.location\.href = mailtoUrl/)
  assert.match(contact, /encodeURIComponent\(subject\)/)
  assert.match(contact, /encodeURIComponent\(body\)/)
  assert.doesNotMatch(contact, /console\.log\('Form submitted:'/)
  assert.doesNotMatch(contact, /alert\('Thank you for your message!/)
  assert.doesNotMatch(contact, /setFormData\(\{\s*name: '',\s*email: '',\s*message: '',?\s*\}\)/)
})

test('conversion CTAs route to the contact page that exists in the static export', () => {
  for (const relativePath of ['components/About.tsx', 'components/LogoDesign.tsx']) {
    const source = read(relativePath)

    assert.doesNotMatch(source, /href="#contact"/, `${relativePath} should not use a missing same-page contact anchor`)
    assert.match(source, /href="\/contact"/, `${relativePath} should link to the contact route`)
  }
})

test('GitHub Pages custom domain is copied into the exported public artifact', () => {
  assert.equal(read('public/CNAME').trim(), read('CNAME').trim())
})
