<script>
import TableFor from './TableFor'
import PaginationLinks from './PaginationLinks'
import flatten from 'lodash/flatten'

export default {
  components: {
    TableFor,
    PaginationLinks
  },
  props: {
    ...TableFor.props,
    ...PaginationLinks.props
  },
  methods: {
    handleUpdatePage (page) {
      this.$emit('update:currentPage', page)
    }
  },
  render (createElement) {
    let mapSlotsToChildren = (slots, createElement) => {
      return flatten(Object.values(slots)).map(slot => {
        return createElement(slot.tag, slot.data, slot.children)
      })
    }
    let footer = null

    // let scopedSlot = this.$scopedSlots.default
    // let columns
    // if (scopedSlot) {
    //   columns = scopedSlot({ record: {} })
    // } else {
    //   columns = this.$slots.default
    // }

    let scopedSlots = this.$scopedSlots
    if (!scopedSlots.footer && !this.$slots.footer) {
      footer = props => {
        return createElement('tfoot', [
          createElement('tr', [
            createElement('td', { attrs: { colspan: props.columns.length } }, [
              createElement(PaginationLinks, { props: this.$props, on: { 'update:currentPage': this.handleUpdatePage } })
            ])
          ])
        ])
      }
    }



    return createElement(
      TableFor,
      { scopedSlots: { footer, ...scopedSlots }, props: this.$props, attrs: this.$attrs },
      mapSlotsToChildren(this.$slots, createElement)
    )
  }
}
</script>
