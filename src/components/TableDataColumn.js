export default {
  props: {
    record: {
      default () {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    field: {
      type: String,
      default () {
        return this.name
      }
    },
    content: String,
    formatter: {
      type: Function
    }
  },
  computed: {
    value () {
      let value
      if (this.content) {
        value = this.content
      } else {
        value = this.record[this.field]
      }

      if (this.formatter && value) {
        value = this.formatter(value, { column: this, record: this.record })
      }
      return value
    }
  },
  render (createElement) {
    let defaultContent = this.$slots.default
    if (defaultContent) {
      return createElement('td', {}, defaultContent)
    } else {
      return createElement('td', { domProps: {
        innerHTML: this.value
      } })
    }
  }
}
