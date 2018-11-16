<script>
import _ from 'lodash'
import TableDataColumn from '@/components/TableDataColumn'
import TableHeaderColumn from '@/components/TableHeaderColumn'
import deepMerge from 'deepmerge'

export default {
  components: {
    TableDataColumn,
    TableHeaderColumn
  },
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  methods: {
    renderFirstSlotOrChildrenWithHooks ({ tag, children = [], wrapper = null, data = {}, slotName = null } = {}) {
      let slots = null
      if (slotName) {
        slots = this.$slots[slotName]
      }

      if (slots) {
        let slot = slots[0]
        return this.$createElement(slot.tag, deepMerge(data, slot.data), slot.children)
        // return this.$createElement(RenderWithHooks, deepMerge(slot.data || {}, { props: { suffix: `_${slotName}`, tag: slot.tag, wrapper: wrapper } }), slot.children)
      } else {
        return this.$createElement(tag, data, children)
        // return this.$createElement(RenderWithHooks, { props: { suffix: `_${slotName}`, tag: tag, wrapper: wrapper } }, children)
      }
    }
  },
  render (createElement) {
    const scopedSlot = this.$scopedSlots.default
    let columns = _.flattenDeep(scopedSlot({ record: {} }))
    const headerColumns = columns.map((column) => {
      if (column.tag === 'td') {
        return this.renderFirstSlotOrChildrenWithHooks({ slotName: column.data.attrs.name, tag: TableHeaderColumn, data: { ...column.data, props: { ...this.$props, ...this.$attrs, ...column.data.attrs } } })
      }
    })
    const dataRows = this.$props.records.map((record) => {
      let columns = _.flattenDeep(scopedSlot({ record: record }))
      return createElement('tr', columns.map((column) => {
        if (column.tag === 'td') {
          return createElement(TableDataColumn, { ...column.data, props: { ...this.$props, ...column.data.attrs, record: record } }, column.children)
        }
      }))
    })

    // let header = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'header', tag: 'tr', children: headerColumns, wrapper: 'thead' })
    let header = createElement('thead', [createElement('tr', headerColumns)])
    // let body = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'body', tag: 'tbody', children: dataRows })
    let body = createElement('tbody', dataRows)
    let footer = this.$slots.footer

    return createElement('table', this.$attrs, [
      header,
      body,
      footer
    ])
  }
}
</script>
