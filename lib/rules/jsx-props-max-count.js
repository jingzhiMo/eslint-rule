module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'limit react component props count'
    },
    messages: {
      overflow: 'Expected the count of jsx elements props to be > {{needed}}, but found {{found}}.'
    }
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const len = node.attributes.length

        if (len > 3) {
          return context.report({
            node,
            messageId: 'overflow',
            data: {
              needed: 3,
              found: len
            }
          })
        }
      }
    }
  }
}
