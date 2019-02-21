<template>
  <VueTemplateSourceCode
    @update:sourceCode="$emit('update:sourceCode', $event)"
    @update:jsCode="$emit('update:jsCode', $event)"
  >
    <table-js-source
      slot="script"
      :columns="tableOptions.columns"
      :lowerFormattersPresent="lowerFormattersPresent"
      :upperFormattersPresent="upperFormattersPresent"
      :emailFormattersPresent="emailFormattersPresent"
      :paginated="tableOptions.paginated"
      :per-page="tableOptions.perPage"
      :manual-pagination="manualPagination"
      :automatic-pagination="automaticPagination"
    />
    <table-html-source
      :table-options="tableOptions"
      :manual-pagination="manualPagination"
      :automatic-pagination="automaticPagination"
      :total-columns="totalColumns"
      :header="header"
    />
  </VueTemplateSourceCode>
</template>

<script>
import VueTemplateSourceCode from '../source_code_builder/VueTemplateSourceCode'
import HtmlTag from '../source_code_builder/HtmlTag'
import HtmlTagAttribute from '../source_code_builder/HtmlTagAttribute'
import TextElement from '../source_code_builder/TextElement'
import TableHtmlSource from './TableHtmlSource'
import TableJsSource from './TableJsSource'
import TableColumnSource from './TableColumnSource'

export default {
  components: {
    VueTemplateSourceCode,
    // eslint-disable-next-line vue/no-unused-components
    HtmlTag,
    // eslint-disable-next-line vue/no-unused-components
    HtmlTagAttribute,
    // eslint-disable-next-line vue/no-unused-components
    TextElement,
    TableHtmlSource,
    TableJsSource,
    // eslint-disable-next-line vue/no-unused-components
    TableColumnSource
  },
  props: {
    tableOptions: {
      type: Object,
      required: true
    }
  },
  computed: {
    header() {
      return `{ formatter: ${this.tableOptions.defaultHeaderFormatter} }`
    },
    automaticPagination() {
      return this.tableOptions.paginated && this.tableOptions.paginateInternally
    },
    manualPagination() {
      return (
        this.tableOptions.paginated && !this.tableOptions.paginateInternally
      )
    },
    totalColumns() {
      let selected = 0
      Object.values(this.tableOptions.columns).forEach(isSelected => {
        if (isSelected) {
          selected = selected + 1
        }
      })
      return selected
    },
    upperFormattersPresent() {
      return (
        Object.values(this.tableOptions.columnFormatters).filter(
          formatter => formatter === 'upper'
        ).length > 0
      )
    },
    lowerFormattersPresent() {
      return (
        Object.values(this.tableOptions.columnFormatters).filter(
          formatter => formatter === 'lower'
        ).length > 0
      )
    },
    emailFormattersPresent() {
      return (
        Object.values(this.tableOptions.columnFormatters).filter(
          formatter => formatter === 'email'
        ).length > 0
      )
    },
    fullNameContent() {
      let content = null
      if (
        this.tableOptions.fullNameContentProperty &&
        this.tableOptions.defaultScopedSlot
      ) {
        content = '`${record.first_name} ${record.last_name}`'
      }
      return content
    }
  }
}
</script>

<style>
pre[class*='language-'] {
  border-radius: 6px;
  margin: 0 0 30px 0 !important;
}

code[class*='language-'] {
  font-size: 1.6rem;
  line-height: 26px;
}

.language-markup .token.attr-name {
  color: #b294bb;
}
.language-markup .token.attr-value {
  color: #b5bd68;
}
.language-markup .token.tag,
.language-markup .token.keyword {
  color: #d75a64;
}
.language-markup .token.punctuation {
  color: #8abeb7;
}
.language-javascript .token.function {
  color: #81a2be;
}
.language-javascript .token.string {
  color: #b5bd68;
}
</style>
