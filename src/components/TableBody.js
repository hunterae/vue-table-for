import TableDataRow from './TableDataRow'
import { pick } from 'vue-slot-hooks/src/utils/HelperUtils'

import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'

export default {
  props: {
    records: {
      type: Array,
      required: true
    },
    body: {
      type: Object,
      default() {
        return {}
      }
    },
    ...pick(TableDataRow.props, ['recordVariable', 'formatter', 'dataRow'])
  },
  functional: true,
  render(h, context) {
    let scopedSlots = context.data.scopedSlots || {}
    let scopedSlot = scopedSlots.default
    let defaultSlot = context.slots().default
    let { recordVariable, records, body } = context.props

    return h(
      RenderWithSlotHooks,
      {
        props: {
          inheritSlots: true,
          slotName: 'body',
          tag: 'tbody',
          tagData: body,
          passSlotsToTag: false
        }
      },
      records.map(record => {
        let columns
        if (scopedSlot) {
          columns = scopedSlot({ [recordVariable]: record })
        } else {
          columns = defaultSlot
        }

        columns = columns.filter(column => column.tag === 'td')

        return h(TableDataRow, {
          props: {
            columns,
            record,
            ...pick(context.props, Object.keys(TableDataRow.props))
          }
        })
      })
    )
  }
}
