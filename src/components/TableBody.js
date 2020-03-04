import TableDataRow from './TableDataRow'
import { pick, omit } from 'vue-slot-hooks/src/utils/HelperUtils'

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
    let scopedSlots = context.scopedSlots || {}
    let scopedSlot = scopedSlots.default
    let { recordVariable, records, body } = context.props
    scopedSlots = omit(scopedSlots, ['default'])

    return h(
      RenderWithSlotHooks,
      {
        scopedSlots,
        props: {
          slotName: 'body',
          tag: 'tbody',
          tagData: body
        }
      },
      records.map(record => {
        let columns
        columns = scopedSlot({ [recordVariable]: record })

        columns = columns.filter(column => column.tag === 'td')

        return h(TableDataRow, {
          scopedSlots,
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
