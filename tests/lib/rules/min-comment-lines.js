const rule = require('../../../lib/rules/min-comment-lines')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run(
  'min-comment-lines',
  rule,
  {
    valid: [
      {
        // 33.3%
        code: [
          '// test comment',
          'var a',
          'var b'
        ].join('\n')
      },
      {
        // 10%
        code: [
          '// test comment',
          'var a',
          'var b',
          'var c',
          'var d'
        ].join('\n')
      },
      {
        // 10%
        code: [
          'var a; // test comment',
          'var b',
          'var c',
          'var d',
          'var e',
        ].join('\n')
      },
      {
        // 20%
        code: [
          'var a; // test comment',
          '',
          'var b',
          'var c',
          'var d',
        ].join('\n'),
        options: [20]
      },
      {
        // 20%
        code: [
          'var a; // test comment',
          '',
          '',
          'var b',
          'var c',
          'var d',
        ].join('\n'),
        options: [{ skipBlankLines: true, min: 20 }]
      },
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
