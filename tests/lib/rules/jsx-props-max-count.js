const rule = require('../../../lib/rules/jsx-props-max-count')
const RuleTester = require('eslint').RuleTester
const BabelEslintParser = require('babel-eslint')

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  },
  jsx: true
};

const ruleTester = new RuleTester({parserOptions})

ruleTester.run(
  'jsx-props-max-count',
  rule,
  {
    valid: [
      {
        code: '<Foo a />',
        parser: BabelEslintParser
      },
      {
        code: `<Foo a />`,
        parser: BabelEslintParser,
        options: [2]
      },
      {
        code: `<Foo a b c />`,
        parser: BabelEslintParser,
        options: [{ max: 2, ignore: ['Foo']}]
      },
    ],

    invalid: [
      {
        code: `<Foo a b c d e f g h i j k />`,
        parser: BabelEslintParser,
        errors: [
          {
            messageId: 'overflow',
            data: {
              needed: 10,
              found: 11
            }
          }
        ]
      },
      {
        code: `<Foo a b c />`,
        parser: BabelEslintParser,
        options: [2],
        errors: [
          {
            messageId: 'overflow',
            data: {
              needed: 2,
              found: 3
            }
          }
        ]
      },
      {
        code: `<Foo a b c />`,
        parser: BabelEslintParser,
        options: [{ max: 2, ignore: ['Bar']}],
        errors: [
          {
            messageId: 'overflow',
            data: {
              needed: 2,
              found: 3
            }
          }
        ]
      },
    ]
  }
)
