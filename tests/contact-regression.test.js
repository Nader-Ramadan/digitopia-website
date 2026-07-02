const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function assertIncludes(source, expected, message) {
  assert.ok(source.includes(expected), message)
}

const contact = readProjectFile('components/Contact.tsx')

assertIncludes(
  contact,
  "const contactEmail = 'hello@digitopiainc.com'",
  'Contact form should use the published Digitopia contact address'
)
assertIncludes(
  contact,
  'window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`',
  'Static contact form should hand the inquiry to an email draft'
)
assertIncludes(
  contact,
  'action={`mailto:${contactEmail}`}',
  'Contact form should expose a mailto action fallback'
)
assertIncludes(contact, 'method="post"', 'Contact form should retain form-post semantics')
assertIncludes(contact, 'encType="text/plain"', 'Contact form should submit plain text to email clients')
assert.doesNotMatch(contact, /alert\(/, 'Contact form must not claim success without delivery')
assert.doesNotMatch(contact, /console\.log\(/, 'Contact form must not only log inquiries in the browser')
assert.doesNotMatch(
  contact,
  /setFormData\(\s*\{\s*name:\s*''\s*,\s*email:\s*''\s*,\s*message:\s*''\s*\}\s*\)/s,
  'Contact form must not clear the only copy of an unsent inquiry'
)

for (const file of ['components/About.tsx', 'components/LogoDesign.tsx']) {
  const source = readProjectFile(file)
  assert.doesNotMatch(source, /href=["']#contact["']/, `${file} should link to the contact page`)
  assertIncludes(source, 'href="/contact"', `${file} should route contact CTAs to /contact`)
}

assert.equal(
  readProjectFile('public/CNAME').trim(),
  readProjectFile('CNAME').trim(),
  'GitHub Pages custom domain must be present in the static export source'
)

console.log('contact regression checks passed')
