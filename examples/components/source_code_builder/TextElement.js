export default {
  functional: true,
  props: {
    text: String,
    curlyBraces: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    var getChildrenTextContent = function(children) {
      return children
        .map(function(node) {
          return node.children
            ? getChildrenTextContent(node.children)
            : node.text
        })
        .join('')
    }
    let text = context.props.text
    let slots = context.slots()
    if (text && context.props.curlyBraces) {
      text = `{{ ${text} }} `
    } else if (slots && slots.default) {
      text = getChildrenTextContent(slots.default)
    } else {
      text = ''
    }
    return context._v(text)
  }
}
