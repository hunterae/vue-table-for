import { startCase } from '../utils/HelperUtils'
import { omit, pick } from 'vue-slot-hooks/src/utils/HelperUtils'
import { RenderWithSlotHooks } from 'vue-slot-hooks'
// import RenderWithSlotHooks from '../../../vue-slot-hooks/src/components/RenderWithSlotHooks'

export default {
  props: {
    columnDefinition: {
      type: Object,
      required: true
    },
    header: {
      type: Object,
      default() {
        return {}
      }
    },
    recordVariable: {
      type: String,
      default: 'record'
    }
  },
  functional: true,
  render(createElement, context) {
    let { columnDefinition } = context.props

    let { name, header } = columnDefinition.data.attrs
    let globalHeaderOptions = context.props.header
    if (typeof globalHeaderOptions === 'function') {
      globalHeaderOptions = globalHeaderOptions(columnDefinition)
    }

    let headerAttrs = omit(globalHeaderOptions, ['content', 'formatter'])

    let headerColumnOptions = pick(globalHeaderOptions, [
      'content',
      'formatter'
    ])

    if (typeof header !== 'undefined') {
      if (typeof header === 'object') {
        headerAttrs = {
          ...headerAttrs,
          ...omit(header, ['content', 'formatter'])
        }
        headerColumnOptions = {
          ...headerColumnOptions,
          ...pick(header, ['content', 'formatter'])
        }
      } else {
        headerColumnOptions.content = header
      }
    }

    let { content, formatter } = headerColumnOptions

    let slots = context.slots()
    if (slots.default) {
      content = slots.default
    } else {
      if (typeof content === 'undefined') {
        content = startCase(name)
      }

      if (typeof content === 'boolean' && !content) {
        content = null
      } else if (formatter) {
        content = formatter(content)
      }

      content = [content]
    }

    return createElement(
      RenderWithSlotHooks,
      {
        props: {
          inheritSlots: true,
          slotName: `${name}_header`,
          tag: 'th',
          tagData: { attrs: headerAttrs },
          passSlotsToTag: false
        }
      },
      content
    )
  }
}
