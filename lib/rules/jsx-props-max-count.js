module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'limit react component props count'
    },
    messages: {
      overflow: 'Expected the count of jsx elements props to be <= {{needed}}, but found {{found}}.'
    }
  },
  create(context) {
    const option = context.options[0]
    // 默认最多 10 个属性值
    let maximum = 10
    // 不参与计算的白名单组件名称
    let ignoreComponent = []

    // 提取配置项设置的最大数量
    if (
      typeof option === 'object' &&
      Object.prototype.hasOwnProperty.call(option, 'max')
    ) {
      maximum = option.max
      ignoreComponent = Array.isArray(option.ignore)
        ? option.ignore
        : []
    } else if (typeof option === 'number') {
      maximum = option
    }

    return {
      JSXOpeningElement(node) {
        const { name, attributes } = node

        // 组件的属性值数量，若为 展开属性值，则计算为一个
        const len = attributes.length
        // 组件的名称
        const nodeName = name.name

        if (len > maximum && !ignoreComponent.includes(nodeName)) {
          return context.report({
            node,
            messageId: 'overflow',
            data: {
              needed: maximum,
              found: len
            }
          })
        }
      }
    }
  }
}
