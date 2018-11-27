import startCase from 'lodash/startCase'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    content: {
      default() {
        return startCase(this.name)
      }
    },
    formatter: {
      type: Function
    }
  },
  computed: {
    formattedContent() {
      let formattedContent = this.content
      if (typeof formattedContent === 'boolean' && !formattedContent) {
        formattedContent = null
      } else if (this.formatter && typeof formattedContent !== 'undefined') {
        formattedContent = this.formatter(formattedContent, {
          column: this
        })
      }
      return formattedContent
    }
  },
  render(createElement) {
    let content = this.$slots.default || [this.formattedContent]
    return createElement('th', {}, content)
  }
}
