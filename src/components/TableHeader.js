import TableHeaderColumn from './TableHeaderColumn'
import { pick } from 'vue-slot-hooks/src/utils/HelperUtils'

import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'

export default {
  functional: true,
  props: {
    ...pick(TableHeaderColumn.props, ['header', 'recordVariable'])
  },
  render(h, context) {
    let columns
    let scopedSlots = context.data.scopedSlots || {}
    let scopedSlot = scopedSlots.default
    let { recordVariable } = context.props

    if (scopedSlot) {
      let proxyHash = new Proxy({}, { get: () => '' })
      columns = scopedSlot({ [recordVariable]: proxyHash })
    } else {
      columns = context.slots().default
    }
    columns = columns.filter(column => column.tag === 'td')

    let header = h(
      RenderWithSlotHooks,
      {
        props: {
          inheritSlots: true,
          slotName: 'header',
          tag: 'thead',
          passSlotsToTag: false
        }
      },
      h(
        RenderWithSlotHooks,
        {
          props: {
            inheritSlots: true,
            slotName: 'header_row',
            tag: 'tr',
            passSlotsToTag: false
          }
        },
        columns.map(columnDefinition =>
          h(TableHeaderColumn, {
            props: {
              ...pick(context.props, Object.keys(TableHeaderColumn.props)),
              columnDefinition
            }
          })
        )
      )
    )

    return header
  }
}
