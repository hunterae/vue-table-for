<template functional>
  <html-tag tag="td" v-bind="data.attrs">
    <html-tag-attribute name=":formatter" :value="props.formatter" v-if="props.formatter"/>
    <html-tag-attribute name="header" :value="props.header" v-if="props.header"/>
    <html-tag-attribute name=":header" :value="false" v-else-if="props.noHeader"/>
    <html-tag-attribute name="field" :value="props.field" v-if="props.field"/>
    <html-tag-attribute name=":content" :value="props.content" v-if="props.content"/>
    <html-tag tag="template" :skip-tag="!props.templateSyntax">
      <html-tag-attribute name="slot-scope" value="{ record }"/>
      <text-element>
        <slot/>
      </text-element>
    </html-tag>
  </html-tag>
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
