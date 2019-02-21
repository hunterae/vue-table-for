import PaginationLinks from './PaginationLinks'
import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'
import { pick } from '../../../vue-slot-hooks/src/utils/HelperUtils'

export default {
  props: {
    recordVariable: {
      type: String,
      default: 'record'
    },
    paginationLinksInFooter: {
      type: Boolean,
      default: true
    },
    paginated: {
      type: Boolean,
      default: false
    },
    ...PaginationLinks.props
  },
  functional: true,
  render(h, context) {
    let scopedSlots = context.data.scopedSlots || {}
    let listeners = context.listeners || {}
    let scopedSlot = scopedSlots.default
    let defaultSlot = context.slots().default
    let { recordVariable, paginated, totalPages } = context.props

    let columns
    if (scopedSlot) {
      let proxyHash = new Proxy({}, { get: () => '' })
      columns = scopedSlot({ [recordVariable]: proxyHash })
    } else {
      columns = defaultSlot
    }
    columns = columns.filter(column => column.tag === 'td')

    let childScopedSlots = {}
    if (paginated && totalPages > 1 && !context.slots().footer) {
      childScopedSlots.footer = () => {
        return h('tfoot', [
          h('tr', [
            h('td', { attrs: { colspan: columns.length } }, [
              h(PaginationLinks, {
                props: pick(context.props, Object.keys(PaginationLinks.props)),
                on: {
                  'update:currentPage': listeners['update:currentPage']
                }
              })
            ])
          ])
        ])
      }
    }

    return h(RenderWithSlotHooks, {
      props: {
        inheritSlots: true,
        slotName: 'footer',
        tag: null,
        passSlotsToTag: false,
        slotScopeData: {
          columns
        }
      },
      scopedSlots: childScopedSlots
    })
  }
}
