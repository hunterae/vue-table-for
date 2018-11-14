<script>
import _ from 'lodash'

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
    }
  },
  render (createElement) {
    let content = this.$slots.default || [this.record[this.field]]

    return createElement('td', {}, content)
  }
}
</script>