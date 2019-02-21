<template>
  <accordion>
    <template slot-scope="{ activeSection }">
      <accordion-section title="Records" :active-section="activeSection">
        <text-area-input v-model="rawRecords" rows="10" />
      </accordion-section>
      <accordion-section title="Columns" :active-section="activeSection">
        <checkbox-input
          v-model="tableOptions.columns.id"
          label="Include ID column"
          :disabled="tableOptions.columns.id && totalColumns === 1"
        />
        <hr />
        <checkbox-input
          v-model="tableOptions.columns.firstName"
          label="Include First Name column"
          :disabled="tableOptions.columns.firstName && totalColumns === 1"
        />
        <select-input
          v-model="tableOptions.columnFormatters.firstName"
          label="Formatter"
          :options="[null, 'upper', 'lower']"
          v-if="tableOptions.columns.firstName"
        />
        <hr />
        <checkbox-input
          v-model="tableOptions.columns.lastName"
          label="Include Last Name column"
          :disabled="tableOptions.columns.lastName && totalColumns === 1"
        />
        <select-input
          v-model="tableOptions.columnFormatters.lastName"
          label="Formatter"
          :options="[null, 'upper', 'lower']"
          v-if="tableOptions.columns.lastName"
        />
        <hr />
        <checkbox-input
          v-model="tableOptions.columns.fullName"
          label="Include Full Name column"
          :disabled="tableOptions.columns.fullName && totalColumns === 1"
          help="Full name is a custom column definition that combines first_name and last_name from the record"
        />
        <checkbox-input
          v-model="tableOptions.fullNameContentProperty"
          label="Define Full Name content using a Property"
          v-if="tableOptions.columns.fullName"
          :disabled="!tableOptions.defaultScopedSlot"
        />
        <hr />
        <checkbox-input
          v-model="tableOptions.columns.email"
          label="Include Email column"
          :disabled="tableOptions.columns.email && totalColumns === 1"
        />
        <select-input
          v-model="tableOptions.columnFormatters.email"
          label="Formatter"
          :options="[null, 'upper', 'lower', 'email']"
          v-if="tableOptions.columns.email"
        />
        <hr />
        <checkbox-input
          v-model="tableOptions.defaultScopedSlot"
          label="Surround all columns with a default scoped slot?"
        />

        <checkbox-input
          v-model="tableOptions.specifyDataFieldSeparately"
          label="Specify Data Field as a separate Property"
        />

        <select-input
          v-model="tableOptions.defaultColumnFormatter"
          label="Default Column Formatter"
          :options="[null, 'upper', 'lower']"
        />
      </accordion-section>
      <accordion-section title="Pagination" :active-section="activeSection">
        <checkbox-input
          v-model="tableOptions.paginated"
          label="Paginate the Data"
        />
        <select-input
          v-model="tableOptions.perPage"
          label="Per Page"
          :options="[1, 5, 10, 20, 25]"
          :disabled="!tableOptions.paginated"
        />
        <checkbox-input
          v-model="tableOptions.paginateInternally"
          label="Have VueTableFor paginate the data internally?"
          :disabled="!tableOptions.paginated"
          help="If you need to paginate the data outside of the
                      VueTableFor component (such as when fetching pages from a
                      remote api, uncheck this flag"
        />
      </accordion-section>
      <accordion-section title="Headers" :active-section="activeSection">
        <template v-if="tableOptions.columns.id">
          <checkbox-input
            v-model="tableOptions.includeCustomIdHeader"
            label="Include a Custom ID header"
          />
          <hr />
        </template>
        <template v-if="tableOptions.columns.firstName">
          <checkbox-input
            v-model="tableOptions.includeCustomFirstNameHeader"
            label="Include a Custom First Name header"
          />
          <hr />
        </template>
        <template v-if="tableOptions.columns.lastName">
          <checkbox-input
            v-model="tableOptions.includeCustomLastNameHeader"
            label="Include a Custom Last Name header"
          />
          <hr />
        </template>
        <template v-if="tableOptions.columns.fullName">
          <checkbox-input
            v-model="tableOptions.includeCustomFullNameHeader"
            label="Include a Custom Full Name header"
          />
          <hr />
        </template>

        <checkbox-input
          v-model="tableOptions.specifyColumnHeadersSeparately"
          label="Specify Column Headers as a property on the column"
        />

        <select-input
          v-model="tableOptions.defaultHeaderFormatter"
          label="Default Header Formatter"
          :options="[null, 'upper', 'lower']"
        />
      </accordion-section>
      <accordion-section title="Rows" :active-section="activeSection">
        <select-input
          v-model="tableOptions.dataRowOptions"
          label="Apply different classes to each data row?"
          :options="[null, 'fourValueCycle', 'evenOddCycle']"
        />
      </accordion-section>
      <accordion-section title="Footer" :active-section="activeSection">
        <checkbox-input
          v-model="tableOptions.includeCustomFooter"
          label="Include a Custom Footer"
        />
        <checkbox-input
          v-model="tableOptions.slotScopedFooter"
          label="Use a scoped slot to define the footer"
          v-if="tableOptions.includeCustomFooter"
        />
      </accordion-section>
    </template>
  </accordion>
</template>

<script>
import samplePeopleRecords from '../../people.json'
import Accordion from '../Accordion'
import AccordionSection from '../AccordionSection.vue'
import CheckboxInput from '../inputs/CheckboxInput'
import SelectInput from '../inputs/SelectInput'
import TextAreaInput from '../inputs/TextAreaInput'

export default {
  components: {
    Accordion,
    AccordionSection,
    CheckboxInput,
    SelectInput,
    TextAreaInput
  },
  data() {
    return {
      rawRecords: JSON.stringify(samplePeopleRecords, null, 2),
      tableOptions: {
        columns: {
          id: false,
          firstName: true,
          lastName: true,
          fullName: true,
          email: false
        },
        paginated: true,
        paginateInternally: true,
        perPage: 10,
        specifyDataFieldSeparately: false,
        specifyColumnHeadersSeparately: false,
        defaultScopedSlot: false,
        includeCustomIdHeader: false,
        includeCustomFirstNameHeader: false,
        includeCustomLastNameHeader: false,
        includeCustomFullNameHeader: false,
        includeCustomEmailHeader: false,
        includeCustomFooter: false,
        slotScopedFooter: true,
        columnFormatters: {
          firstName: null,
          lastName: null,
          fullName: null,
          email: null
        },
        defaultColumnFormatter: null,
        defaultHeaderFormatter: null,
        fullNameContentProperty: false,
        dataRowOptions: false
      }
    }
  },
  computed: {
    totalColumns() {
      let selected = 0
      Object.values(this.tableOptions.columns).forEach(isSelected => {
        if (isSelected) {
          selected = selected + 1
        }
      })
      return selected
    }
  },
  watch: {
    rawRecords: {
      handler() {
        this.$emit('update:records', JSON.parse(this.rawRecords))
      },
      immediate: true
    },
    tableOptions: {
      handler() {
        this.$emit('update:tableOptions', this.tableOptions)
      },
      immediate: true
    }
  }
}
</script>

<style></style>
