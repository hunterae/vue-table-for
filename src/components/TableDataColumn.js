export default {
  props: {
    record: {
      default() {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    field: {
      type: String,
      default() {
        return this.name
      }
    },
    content: {},
    formatter: {
      type: Function
    }
  },
  computed: {
    formattedContent() {
      let formattedContent = this.content
      if (
        typeof formattedContent === 'undefined' &&
        this.record.hasOwnProperty(this.field)
      ) {
        formattedContent = this.record[this.field]
      }

      if (this.formatter && typeof formattedContent !== 'undefined') {
        formattedContent = this.formatter(formattedContent, {
          column: this,
          record: this.record
        })
      }
      return formattedContent
    }
  },
  render(createElement) {
    let element
    let customContent = this.$slots.default
    let content = this.formattedContent
    if (customContent) {
      element = createElement('td', {}, customContent)
    } else if (typeof content === 'object' && content.hasOwnProperty('tag')) {
      element = createElement('td', {}, [content])
    } else {
      element = createElement('td', {
        domProps: {
          innerHTML: content
        }
      })
    }

    return element
  }
}
