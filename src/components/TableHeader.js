import TableHeaderColumn from './TableHeaderColumn'
import { pick, omit } from 'vue-slot-hooks/src/utils/HelperUtils'

import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'

export default {
  functional: true,
  props: {
    ...pick(TableHeaderColumn.props, ['header', 'recordVariable'])
  },
  render(h, context) {
    let columns
    let scopedSlots = context.scopedSlots || {}
    let scopedSlot = scopedSlots.default
    scopedSlots = omit(scopedSlots, ['default'])
    // let testSlots = scopedSlots //pick(scopedSlots, ['body'])
    let { recordVariable } = context.props
    // debugger

    let proxyHash = {}
    columns = scopedSlot({ [recordVariable]: proxyHash })
    columns = columns.filter(column => column.tag === 'td')
    columns = columns.map(columnDefinition =>
      h(TableHeaderColumn, {
        scopedSlots: { ...scopedSlots },
        props: {
          ...pick(context.props, Object.keys(TableHeaderColumn.props)),
          columnDefinition
        }
      })
    )

    let headerRow = h(
      RenderWithSlotHooks,
      {
        props: {
          scopedSlots,
          slotName: 'header_row',
          tag: 'tr'
        }
      },
      columns
    )

    let header = h(
      RenderWithSlotHooks,
      {
        props: {
          scopedSlots,
          slotName: 'header',
          tag: 'thead'
        }
      },
      headerRow
    )

    return header
  }
}
