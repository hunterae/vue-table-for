export default {
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    value: {}
  },
  render(h, context) {
    let { name, value } = context.props
    if (typeof value !== 'undefined') {
      name = `${name}="${value}"`
    }
    return context._v(`ATTRIBUTE:${name}`)
  }
}
