const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

const contact = read('components/Contact.tsx')
const about = read('components/About.tsx')
const logoDesign = read('components/LogoDesign.tsx')
const cname = read('public/CNAME').trim()

assert.match(
  contact,
  /window\.location\.href\s*=\s*`mailto:\$\{contactEmail\}\?subject=\$\{subject\}&body=\$\{body\}`/,
  'contact form submissions must hand off the inquiry through a prefilled email'
)

assert.match(
  contact,
  /encodeURIComponent\([\s\S]*formData\.message[\s\S]*\)/,
  'contact email body must preserve the entered message'
)

assert.doesNotMatch(
  contact,
  /alert\(/,
  'contact form must not show false success before an inquiry is sent'
)

assert.doesNotMatch(
  contact,
  /setFormData\(\{\s*name:\s*['"]{2},\s*email:\s*['"]{2},\s*message:\s*['"]{2},?\s*\}\)/,
  'contact form must not erase an unsent inquiry'
)

for (const [fileName, source] of [
  ['components/About.tsx', about],
  ['components/LogoDesign.tsx', logoDesign],
]) {
  assert.doesNotMatch(
    source,
    /href="#contact"/,
    `${fileName} must not link to a missing local contact anchor`
  )
  assert.match(
    source,
    /href="\/contact"/,
    `${fileName} should route conversion CTAs to the contact page`
  )
}

assert.equal(cname, 'digitopiainc.com', 'GitHub Pages export must include the custom domain')
