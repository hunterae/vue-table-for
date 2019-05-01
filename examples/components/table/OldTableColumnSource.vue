<template functional>
  <element-node tag="td" v-bind="data.attrs">
    <element-node-attribute
      name=":formatter"
      :value="props.formatter"
      v-if="props.formatter"
    />
    <element-node-attribute
      name="header"
      :value="props.header"
      v-if="props.header"
    />
    <element-node-attribute
      name=":header"
      :value="false"
      v-else-if="props.noHeader"
    />
    <element-node-attribute
      name="field"
      :value="props.field"
      v-if="props.field"
    />
    <element-node-attribute
      name=":content"
      :value="props.content"
      v-if="props.content"
    />
    <element-node tag="template" :skip-tag="!props.templateSyntax">
      <element-node-attribute name="slot-scope" value="{ record }" />
      <text-node> <slot /> </text-node>
    </element-node>
  </element-node>
</template>

<script>
export default {
  props: {
    formatter: String,
    header: {},
    field: {},
    content: {},
    templateSyntax: {
      type: Boolean,
      default: false
    },
    noHeader: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
