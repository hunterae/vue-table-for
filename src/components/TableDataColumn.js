import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'
import { omit } from 'vue-slot-hooks/src/utils/HelperUtils'

export default {
  props: {
    record: {
      default() {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    },
    field: {
      type: String,
      default: null
    },
    content: {},
    formatter: {
      type: Function
    },
    recordVariable: {
      type: String,
      default: 'record'
    }
  },
  functional: true,
  render(createElement, context) {
    let { record, content, formatter, name, field } = context.props
    let scopedSlots = context.data.scopedSlots || {}

    let defaultSlot = context.slots().default
    field = field || name
    if (typeof content === 'undefined' && record.hasOwnProperty(field)) {
      content = record[field]
    }
    if (formatter && typeof content !== 'undefined') {
      content = formatter(content, {
        ...context.data,
        record
      })
    }
    let children
    if (scopedSlots.default) {
      children = scopedSlots.default({ record: record })
    } else if (defaultSlot) {
      children = defaultSlot
    } else {
      children = [content]
    }

    return createElement(
      RenderWithSlotHooks,
      {
        props: {
          inheritSlots: true,
          slotName: name,
          tag: 'td',
          tagData: omit(context.data, ['props']),
          passSlotsToTag: false
        }
      },
      children
    )
  }
}
