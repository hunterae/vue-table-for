<script>
import TableFor from './TableFor'
import PaginationLinks from './PaginationLinks'
import _ from 'lodash'

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
      return _.flatten(Object.values(slots)).map(slot => {
        let data = slot.data
        return createElement(slot.tag, slot.data, slot.children)
      })
    }

    const scopedSlot = this.$scopedSlots.default
    let columns = scopedSlot({ record: {} })
    let footer = createElement("tfoot", { slot: 'footer' }, [
      createElement("tr", [
        createElement("td", { attrs: { colspan: columns.length }}, [
          createElement(PaginationLinks, { props: this.$props, on: { "update:currentPage": this.handleUpdatePage } })
        ])
      ])
    ])

    return createElement(TableFor, { scopedSlots: this.$scopedSlots, props: this.$props, attrs: this.$attrs }, [
      ...mapSlotsToChildren(this.$slots, createElement),
      footer
    ])

  }
}
</script>