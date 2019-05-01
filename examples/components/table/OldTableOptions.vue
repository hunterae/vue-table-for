<template>
  <accordion>
    <accordion-section title="Preconfigured Examples">
      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Bare Bones"
        value="bare-bones"
        help="Three Simple columns with names matching a field on the records"
      />

      <hr />

      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Custom Data Column"
        value="custom-data-column"
        help="Custom definition provided for one of the table data columns"
      />

      <hr />

      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Basic Pagination"
        value="basic-paginated"
        help="Simple pagination example wherein the component internally handles the pagination. (This should only been done when all of the data if provided to the table upfront)"
      />

      <hr />

      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Manual Pagination"
        value="manually-paginated"
        help="Pagination logic is performed outside the component, such as when each page of data needs to be fetched from the server or the pagination is handled with a Vuex store"
      />

      <hr />

      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Custom Formatters"
        value="custom-formatters"
        help="Set a default formatter for all columns and override on a column by column basis"
      />
      <hr />

      <radio-input
        :checked="preset"
        @input="setPreset"
        label="Custom Headers"
        value="custom-headers"
        help="Configure the header label in the column definition or via a slot"
      />
      <hr />

      <radio-input
        :checked="preset"
        label="Custom Options"
        value="custom"
        help="Configure your own set of options below"
        disabled
      />
    </accordion-section>

    <accordion-section title="Configure Columns">
      <checkbox-input
        v-model="tableOptions.columns.id"
        value="id"
        label="Include ID column"
        :disabled="tableOptions.columns.id && totalColumns === 1"
      />
      <hr />
      <checkbox-input
        v-model="tableOptions.columns.first_name"
        label="Include First Name column"
        :disabled="tableOptions.columns.first_name && totalColumns === 1"
      />
      <select-input
        v-model="tableOptions.columnFormatters.firstName"
        label="Formatter"
        :options="[
          null,
          { value: 'upper', label: 'Uppercase' },
          { value: 'lower', label: 'Lowercase' }
        ]"
        v-if="tableOptions.columns.first_name"
      />
      <hr />
      <checkbox-input
        v-model="tableOptions.columns.last_name"
        label="Include Last Name column"
        :disabled="tableOptions.columns.last_name && totalColumns === 1"
      />
      <select-input
        v-model="tableOptions.columnFormatters.lastName"
        label="Formatter"
        :options="[
          null,
          { value: 'upper', label: 'Uppercase' },
          { value: 'lower', label: 'Lowercase' }
        ]"
        v-if="tableOptions.columns.last_name"
      />
      <hr />
      <checkbox-input
        v-model="tableOptions.columns.full_name"
        label="Include Full Name column"
        :disabled="tableOptions.columns.full_name && totalColumns === 1"
        help="Full name is a custom column definition that combines first_name and last_name from the record"
      />
      <checkbox-input
        v-model="tableOptions.fullNameContentProperty"
        label="Define Full Name content using a Property"
        v-if="tableOptions.columns.full_name"
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
        :options="[
          null,
          { value: 'upper', label: 'Uppercase' },
          { value: 'lower', label: 'Lowercase' },
          { value: 'email', label: 'Email Link' }
        ]"
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
        :options="[
          null,
          { value: 'upper', label: 'Uppercase' },
          { value: 'lower', label: 'Lowercase' }
        ]"
      />
    </accordion-section>

    <accordion-section title="Configure Pagination">
      <checkbox-input
        v-model="tableOptions.paginated"
        label="Paginate the Data"
      />
      <select-input
        v-model.number="tableOptions.perPage"
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

    <accordion-section title="Configure Headers">
      <template v-if="tableOptions.columns.id">
        <checkbox-input
          v-model="tableOptions.includeCustomIdHeader"
          label="Include a Custom ID header"
        />
        <hr />
      </template>
      <template v-if="tableOptions.columns.first_name">
        <checkbox-input
          v-model="tableOptions.includeCustomFirstNameHeader"
          label="Include a Custom First Name header"
        />
        <hr />
      </template>
      <template v-if="tableOptions.columns.last_name">
        <checkbox-input
          v-model="tableOptions.includeCustomLastNameHeader"
          label="Include a Custom Last Name header"
        />
        <hr />
      </template>
      <template v-if="tableOptions.columns.full_name">
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
        :options="[
          null,
          { value: 'upper', label: 'Uppercase' },
          { value: 'lower', label: 'Lowercase' }
        ]"
      />
    </accordion-section>

    <accordion-section title="Configure Rows">
      <select-input
        v-model="tableOptions.dataRowOptions"
        label="Apply
        different classes to each data row?"
        :options="[
          null,
          {
            value: 'fourValueCycle',
            label: 'Cycle between four different classes'
          },
          {
            value: 'evenOddCycle',
            label: 'Cycle between classes of \'even\' and \'odd\''
          }
        ]"
      />
    </accordion-section>

    <accordion-section title="Configure Footer">
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

    <accordion-section title="Configure Records">
      <text-area-input v-model="rawRecords" rows="10" />
    </accordion-section>
  </accordion>
</template>

<script>
import samplePeopleRecords from '../../people.json'
import Accordion from 'vue-source-code-builder/src/components/Accordion'
import AccordionSection from 'vue-source-code-builder/src/components/AccordionSection'
import CheckboxInput from '../../../../vue-source-code-builder/src/components/inputs/CheckboxInput'
import RadioInput from 'vue-source-code-builder/src/components/inputs/RadioInput'
import SelectInput from 'vue-source-code-builder/src/components/inputs/SelectInput'
import TextAreaInput from 'vue-source-code-builder/src/components/inputs/TextAreaInput'

let defaultTableOptions = (preset = 'bare-bones') => {
  let bareBones = preset === 'bare-bones'
  let customDataColumn = preset === 'custom-data-column'
  let basicPaginated = preset === 'basic-paginated'
  let manuallyPaginated = preset === 'manually-paginated'
  let customFormatters = preset === 'custom-formatters'
  let customHeaders = preset === 'custom-headers'

  return {
    columns: {
      id: customHeaders,
      first_name:
        bareBones || basicPaginated || manuallyPaginated || customFormatters,
      last_name:
        bareBones || basicPaginated || manuallyPaginated || customFormatters,
      full_name: customDataColumn || customHeaders,
      email:
        bareBones ||
        customDataColumn ||
        basicPaginated ||
        manuallyPaginated ||
        customFormatters ||
        customHeaders
    },
    paginated: basicPaginated || manuallyPaginated,
    paginateInternally: basicPaginated,
    perPage: 10,
    specifyDataFieldSeparately: false,
    specifyColumnHeadersSeparately: customHeaders,
    defaultScopedSlot: false,
    includeCustomIdHeader: false,
    includeCustomFirstNameHeader: false,
    includeCustomLastNameHeader: false,
    includeCustomFullNameHeader: false,
    includeCustomEmailHeader: customHeaders,
    includeCustomFooter: false,
    slotScopedFooter: true,
    columnFormatters: {
      firstName: null,
      lastName: customFormatters ? 'lower' : null,
      fullName: null,
      email: customFormatters ? 'email' : null
    },
    defaultColumnFormatter: customFormatters ? 'upper' : null,
    defaultHeaderFormatter: null,
    fullNameContentProperty: false,
    dataRowOptions: false
  }
}

export default {
  components: {
    Accordion,
    AccordionSection,
    CheckboxInput,
    SelectInput,
    TextAreaInput,
    RadioInput
  },
  props: {
    // preset: {
    //   type: String,
    //   default: 'bare-bones'
    // }
  },
  data() {
    return {
      rawRecords: JSON.stringify(samplePeopleRecords, null, 2),
      tableOptions: defaultTableOptions(),
      presetChoice: true,
      preset: 'bare-bones'
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
  methods: {
    setPreset(preset) {
      // this.$router.push({ name: 'presets', params: { preset: preset } })
      this.preset = preset
      if (preset !== 'custom') {
        this.presetChoice = true
        let tableOptions = defaultTableOptions(preset)
        this.tableOptions = tableOptions
      }
    }
  },
  mounted() {
    this.setPreset(this.preset)
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
        if (this.presetChoice) {
          this.presetChoice = false
        } else {
          this.setPreset('custom')
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style></style>
