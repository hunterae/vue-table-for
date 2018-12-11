import flattenDeep from 'lodash/flattenDeep'
import TableDataColumn from '@/components/TableDataColumn'
import TableHeaderColumn from '@/components/TableHeaderColumn'
import deepMerge from 'deepmerge'
import omit from 'lodash/omit'
import pick from 'lodash/pick'

export default {
  components: {
    TableDataColumn,
    TableHeaderColumn
  },
  props: {
    records: {
      type: Array,
      required: true
    },
    recordVariable: {
      type: String,
      default: 'record'
    },
    formatter: {
      type: Function
    },
    header: {
      default() {
        return {}
      }
    },
    row: {
      default() {
        return {}
      }
    }
  },
  methods: {
    // This method is a WIP. It will be updated shortly to utilize a separate Vue Plugin I am
    //  writing called vue-slot-hooks
    renderFirstSlotOrChildrenWithHooks({
      tag,
      children = [],
      // wrapper = null,
      data = {},
      slotName = null
    } = {}) {
      let slots = null
      if (slotName) {
        slots = this.$slots[slotName]
      }

      if (slots) {
        let slot = slots[0]
        return this.$createElement(
          slot.tag,
          deepMerge(data, slot.data),
          slot.children
        )
        // return this.$createElement(RenderWithHooks, deepMerge(slot.data || {}, { props: { suffix: `_${slotName}`, tag: slot.tag, wrapper: wrapper } }), slot.children)
      } else {
        return this.$createElement(tag, data, children)
        // return this.$createElement(RenderWithHooks, { props: { suffix: `_${slotName}`, tag: tag, wrapper: wrapper } }, children)
      }
    },
    createHeaderColumn(column) {
      if (column.tag === 'td') {
        let columnName = column.data.attrs.name
        let header = this.header
        if (typeof this.header === 'function') {
          header = this.header(column)
        }
        let headerOptions = {
          props: {
            name: columnName,
            ...pick(header, Object.keys(TableHeaderColumn.props))
          },
          attrs: omit(header, Object.keys(TableHeaderColumn.props))
        }

        if (column.data.attrs.hasOwnProperty('header')) {
          header = column.data.attrs.header
          if (typeof header === 'object') {
            headerOptions = deepMerge.all([
              headerOptions,
              { props: pick(header, Object.keys(TableHeaderColumn.props)) },
              { attrs: omit(header, Object.keys(TableHeaderColumn.props)) }
            ])
          } else {
            headerOptions.props.content = header
          }
        }
        return this.renderFirstSlotOrChildrenWithHooks({
          slotName: columnName,
          tag: TableHeaderColumn,
          data: headerOptions
        })
      }
    },
    createDataColumn(column, record) {
      if (column.tag === 'td') {
        let dataOptions = deepMerge.all([
          omit(column.data, 'attrs'),
          {
            attrs: omit(
              column.data.attrs,
              ...Object.keys(TableDataColumn.props),
              ...Object.keys(TableHeaderColumn.props)
            )
          },
          {
            props: {
              ...pick(this.$props, ...Object.keys(TableDataColumn.props)),
              ...pick(column.data.attrs, ...Object.keys(TableDataColumn.props)),
              record: record
            }
          }
        ])

        return this.$createElement(
          TableDataColumn,
          dataOptions,
          column.children
        )
      }
    },
    createDataRow(columns, record) {
      let dataColumns = columns.map(column => {
        return this.createDataColumn(column, record)
      })
      let rowOptions
      if (typeof this.row === 'function') {
        rowOptions = { attrs: this.row(record) }
      } else {
        rowOptions = { attrs: this.row }
      }

      return this.$createElement('tr', rowOptions, dataColumns)
    }
  },
  render(createElement) {
    let columns, headerColumns, dataRows, footer
    let scopedSlot = this.$scopedSlots.default
    if (scopedSlot) {
      let proxyHash = new Proxy({}, { get: () => '' })
      columns = flattenDeep(
        scopedSlot({ [this.recordVariable]: proxyHash, table: this })
      )
      headerColumns = columns.map(this.createHeaderColumn)
      dataRows = this.$props.records.map(record => {
        columns = flattenDeep(
          scopedSlot({ [this.recordVariable]: record, table: this })
        )
        return this.createDataRow(columns, record)
      })
    } else {
      columns = this.$slots.default
      headerColumns = columns.map(this.createHeaderColumn)
      dataRows = this.$props.records.map(record => {
        return this.createDataRow(columns, record)
      })
    }

    // let header = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'header', tag: 'tr', children: headerColumns, wrapper: 'thead' })
    let header = (
      <thead>
        <tr>{headerColumns}</tr>
      </thead>
    )
    // let body = this.renderFirstSlotOrChildrenWithHooks({ slotName: 'body', tag: 'tbody', children: dataRows })
    let body = <tbody>{dataRows}</tbody>

    if (this.$scopedSlots.footer) {
      footer = this.$scopedSlots.footer({ columns: headerColumns, table: this })
    } else if (this.$slots.footer) {
      footer = this.$slots.footer
    }

    return createElement('table', this.$attrs, [header, body, footer])
  }
}
