import TableDataColumn from './TableDataColumn'
import TableHeaderColumn from './TableHeaderColumn'

import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'

import { omit, pick } from 'vue-slot-hooks/src/utils/HelperUtils'

export default {
  functional: true,
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataRow: {
      default() {
        return {}
      }
    },
    ...pick(TableDataColumn.props, ['record', 'formatter', 'recordVariable'])
  },

  render(h, context) {
    let { columns, dataRow, record } = context.props

    if (typeof dataRow === 'function') {
      dataRow = dataRow(record)
    } else {
      dataRow = { ...dataRow }
    }
    if (!dataRow.key) dataRow.key = `record-${record.id}`
    dataRow.props = {
      record: record
    }

    return h(
      RenderWithSlotHooks,
      {
        props: {
          inheritSlots: true,
          slotName: 'data_row',
          tag: 'tr',
          tagData: dataRow,
          passSlotsToTag: false
        }
      },
      columns.map(column => {
        let dataColumnOptions = {
          ...column.data,
          attrs: omit(column.data.attrs, [
            ...Object.keys(TableDataColumn.props),
            ...Object.keys(TableHeaderColumn.props)
          ]),
          props: {
            ...pick(context.props, Object.keys(TableDataColumn.props)),
            ...pick(column.data.attrs, Object.keys(TableDataColumn.props))
          }
        }

        return h(TableDataColumn, dataColumnOptions, column.children)
      })
    )
  }
}
