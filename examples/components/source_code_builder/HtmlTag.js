export default {
  functional: true,
  props: {
    tag: {
      required: true
    },
    skipTag: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    let { tag, skipTag } = context.props
    let slots = context.slots().default
    let attributes = ''
    let text = ''
    if (context.data) {
      let { attrs, style, staticClass } = context.data
      if (context.data.class) {
        if (staticClass) {
          attributes += `class="${context.data.class} ${staticClass}" `
        } else {
          attributes += `class="${context.data.class}" `
        }
      } else if (staticClass) {
        attributes += `class="${staticClass}" `
      }
      if (style) {
        attributes += `style="${style}" `
      }
      if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
          attributes += `${key}="${value}"`
        })
      }
    }

    if (slots) {
      attributes += slots
        .filter(node => node.text.match(/ATTRIBUTE:/))
        .map(node => node.text.replace(/ATTRIBUTE:/, ''))
        .join(' ')

      text = slots
        .filter(node => !node.text.match(/ATTRIBUTE:/))
        .map(node => node.text)
        .join(' ')
    }

    let html
    if (skipTag) {
      html = text
    } else {
      html = `<${tag} ${attributes}> ${text} </${tag}>`
    }

    return context._v(html)
  }
}
