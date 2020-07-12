const rule = require('../../../lib/rules/min-comment-lines')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run(
  'min-comment-lines',
  rule,
  {
    valid: [
      {
        code: [
          '// test comment',
          'var abc',
          'var def'
        ].join('\n')
      }
    ],
    invalid: [
      {
        code: 'var xyz;\nvar xyz;\nvar xyz;',
        errors: [
          {
            messageId: 'below',
            data: {
              percentage: '0.00%',
              minimum: 10
            }
          }
        ]
      }
    ]
  }
)
