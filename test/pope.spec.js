const test = require('japa')
const { pope } = require('../dist/pope.js')

test.group('pope', function () {
  test('should parse a template and replace mustache like placeholders', (assert) => {
    const template = pope('Hello {{name}}', ['Bob'])
    assert.equal(template, 'Hello Bob')
  })

  test('give priority to throwOnUndefined over skipUndefined', (assert) => {
    try {
      pope('Hello {{ user_name }}',[], false, true)
    } catch (error) {
      assert.equal(error.message, 'Missing value for {{ user_name }}')
    }
  })

  test('should replace a value whose value is zero', (assert) => {
    const template = pope('Zero value {{index}}', [])
    assert.equal(template, 'Zero value')
  })
})
