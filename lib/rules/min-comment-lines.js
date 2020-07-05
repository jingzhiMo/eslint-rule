module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'limit minimum percentage comment lines'
    },
    messages: {
      below: 'Add some comment lines in file. Comment lines percentage {{percentage}} below setting {{minimum}}%'
    },
    schema: [
      {
        oneOf: [
          {
            type: 'integer',
            minimum: 0,
            maximum: 100
          }
        ]
      }
    ]
  },
  create(context) {
    // 默认值为 注释代码行数，占文件占比 10%
    const minimum = context.options[0] || 10
    const sourceCode = context.getSourceCode()

    return {
      "Program:exit"() {
        const fileLines = sourceCode.lines.length
        // 统计注释的行数
        const commentLine = sourceCode
          .getAllComments()
          .reduce((base, line) => {
            return base + line.loc.end.line - line.loc.start.line + 1
          }, 0)
        const percentage = commentLine / fileLines * 100

        // 不符合要求
        if (!!fileLines && percentage < minimum) {
          context.report({
            loc: {
              start: {
                line: 0,
                column: 0
              },
              end: {
                line: sourceCode.lines.length,
                column: 0
              }
            },
            messageId: 'below',
            data: {
              percentage: percentage.toFixed(2) + '%',
              minimum
            }
          })
        }
      }
    }
  }
}
