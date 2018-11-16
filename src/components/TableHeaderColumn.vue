<script>
import _ from 'lodash'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    header: {
      default () {
        return _.startCase(this.name)
      }
    }
  },
  computed: {
    headerText () {
      let headerText = _.startCase(this.name)
      if (typeof this.header === 'object') {
        if (typeof this.header.label !== 'undefined') {
          headerText = this.header.label
        }
      } else if (typeof this.header !== 'undefined') {
        headerText = this.header
      }

      return headerText
    }
  },
  render (createElement) {
    let content = this.$slots.default || [this.headerText]
    let headerOptions = typeof this.header === 'object' ? this.header : {}
    return createElement('th', headerOptions, content)
  }
}
</script>
