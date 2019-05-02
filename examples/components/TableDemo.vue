<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <h3>Step 1: Set the options</h3>
        <accordion>
          <accordion-section title="Configure Pagination">
            <checkbox-input v-model="paginated" label="Paginate the Data"/>
            <select-input
              v-model.number="perPage"
              label="Per Page"
              :options="[1, 5, 10, 20, 25]"
              :disabled="!paginated"
            />
            <checkbox-input
              v-model="paginateInternally"
              label="Have VueTableFor paginate the data internally?"
              :disabled="!paginated"
              help="If you need to paginate the data outside of the
                      VueTableFor component (such as when fetching pages from a
                      remote api, uncheck this flag"
            />
          </accordion-section>
          <accordion-section title="Configure Columns">
            <template v-for="column in availableColumns">
              <checkbox-input
                :key="`include-${column}`"
                v-model="selectedColumns"
                :value="column"
                :label="`Include ${titleize(column)} column`"
                :disabled="
                  showingColumn(column) && selectedColumns.length === 1
                "
              />
              <select-input
                v-model="columnConfigurations[column].formatter"
                :label="`${titleize(column)} Formatter`"
                :options="availableFormatters[column]"
                :key="`${column}-formatter`"
                v-if="showingColumn(column) && availableFormatters[column]"
              />
              <hr :key="`${column}-hr`">
            </template>
            <checkbox-input
              v-model="defaultScopedSlot"
              label="Surround all columns with a default scoped slot"
            />
            <checkbox-input
              v-model="specifyDataFieldAsProperty"
              label="Specify Data Field as a separate Property"
            />
            <select-input
              v-model="defaultColumnFormatter"
              label="Default Column Formatter"
              :options="defaultFormatters"
            />
          </accordion-section>
          <accordion-section title="Configure Headers">
            <template v-for="column in availableColumns">
              <checkbox-input
                :key="column"
                v-if="showingColumn(column)"
                v-model="columnConfigurations[column].customHeader"
                :label="`Include a Custom ${titleize(column)} header`"
              />
              <hr v-if="showingColumn(column)" :key="`${column}-hr`">
            </template>
            <checkbox-input
              v-model="specifyTableHeadersAsProperty"
              label="Specify Column Headers as a property on the column"
            />
            <select-input
              v-model="defaultHeaderFormatter"
              label="Default Header Formatter"
              :options="defaultFormatters"
            />
          </accordion-section>
          <accordion-section title="Configure Records">
            <text-area-input v-model="rawRecords" rows="10"/>
          </accordion-section>
        </accordion>
      </div>

      <div class="col-md-4">
        <h3>Step 2: View the Code</h3>
        <table-source-code-builder
          :columns="columns"
          @update:template="template = $event"
          @update:script="script = $event"
          @update:styles="styles = $event"
        >
          <element-node-attribute
            slot="prepend_table_tag"
            name="class"
            value="table table-bordered"
          />

          <!-- Pagination -->
          <template slot="append_table_tag" v-if="paginated">
            <element-node-attribute name="paginated"/>
            <element-node-attribute name="paginateInternally" v-if="paginateInternally"/>
            <element-node-attribute name=":per-page" value="perPage" v-if="paginateInternally"/>

            <element-node-attribute
              name=":records"
              value="currentPageRecords"
              v-if="!paginateInternally"
            />
            <element-node-attribute
              name=":current-page"
              value="currentPage"
              v-if="!paginateInternally"
            />
            <element-node-attribute
              name="@update:currentPage='setCurrentPage'"
              v-if="!paginateInternally"
            />
            <element-node-attribute
              name=":total-pages"
              value="totalPages"
              v-if="!paginateInternally"
            />
          </template>
          <template slot="append_data_content" v-if="paginated">
            <text-node :text="`perPage: ${perPage},`"/>
            <text-node :text="`currentPage: 1,`" v-if="!paginateInternally"/>
          </template>
          <template slot="append_computed_content" v-if="paginated && !paginateInternally">
            <pre is="text-node" :text="functions.totalPages"/>
            <pre is="text-node" :text="functions.currentPageRecords"/>
          </template>

          <template slot="append_methods_content" v-if="paginated && !paginateInternally">
            <pre is="text-node" :text="functions.setCurrentPage"/>
          </template>
          <!-- End of Pagination -->

          <!-- First Name Column -->
          <element-node tag="a" slot="id_content">
            <element-node-attribute name=":href" value="`/records/${record.id}`"/>
            <element-node-attribute name="@click" value="linkClicked(record)"/>
            <element-node tag="i" class="fa fa-edit"/>
          </element-node>
          <template slot="append_methods_content" v-if="showingColumn('id')">
            <pre is="text-node" :text="functions.linkClicked"/>
          </template>
          <!-- End of First Name Column -->

          <!-- Full Name Column -->
          <text-node slot="full_name_content">
            <text-node text="record.first_name" curly-braces/>
            <text-node text="record.last_name" curly-braces/>
          </text-node>
          <!-- End of Full Name Column -->

          <!-- Formatters -->
          <template
            v-for="(columnConfiguration, column) in columnConfigurations"
            :slot="`prepend_${column}_tag`"
            v-if="columnConfiguration.formatter"
          >
            <element-node-attribute
              :key="`${column}-formatter`"
              name=":formatter"
              :value="columnConfiguration.formatter"
            />
          </template>
          <template slot="prepend_table_tag">
            <element-node-attribute
              name=":formatter"
              :value="defaultColumnFormatter"
              v-if="defaultColumnFormatter"
            />
          </template>
          <template slot="prepend_table_tag">
            <element-node-attribute
              name=":header"
              :value="`{ formatter: ${defaultHeaderFormatter} }`"
              v-if="defaultHeaderFormatter"
            />
          </template>
          <template
            slot="append_methods_content"
            v-for="formatter in allFormatters"
            v-if="formatterUsed(formatter.value)"
          >
            <text-node :text="formatter.definition" :key="formatter.value"/>
          </template>
          <!-- End of Formatters -->

          <!-- Default Scoped Slot On / Off -->
          <record-scope slot="around_table_content" slot-scope="content" v-if="defaultScopedSlot">
            <component :is="content"/>
          </record-scope>
          <record-scope slot="around_id_content" slot-scope="content" v-if="!defaultScopedSlot">
            <component :is="content"/>
          </record-scope>
          <record-scope
            slot="around_full_name_content"
            slot-scope="content"
            v-if="!defaultScopedSlot"
          >
            <component :is="content"/>
          </record-scope>
          <!-- End of Default Scoped Slot On / Off -->

          <!-- Custom Headers -->
          <template slot="prepend_table_tag">
            <pre
              is="element-node"
              tag="th"
              v-for="column in availableColumns"
              v-if="
                columnConfigurations[column].customHeader &&
                  showingColumn(column)
              "
              :key="column"
            >
              <element-node-attribute name="slot" :value="`${column}_header`"/>
              <element-node-attribute name="style" value="color: red"/>
              <element-node tag="i" class="fa fa-users"/>
            </pre>
          </template>
          <!-- End of Custom Headers -->

          <!-- Table Headers as a Property -->
          <template slot="prepend_id_tag" v-if="specifyTableHeadersAsProperty">
            <element-node-attribute name=":header" value="false"/>
          </template>
          <template slot="prepend_first_name_tag" v-if="specifyTableHeadersAsProperty">
            <element-node-attribute name="header" value="Vorname"/>
          </template>
          <template slot="prepend_last_name_tag" v-if="specifyTableHeadersAsProperty">
            <element-node-attribute name="header" value="Nachname"/>
          </template>
          <template slot="prepend_full_name_tag" v-if="specifyTableHeadersAsProperty">
            <element-node-attribute name="header" value="Name"/>
          </template>
          <template slot="prepend_email_tag" v-if="specifyTableHeadersAsProperty">
            <element-node-attribute name="header" value="Email Address"/>
          </template>
          <!-- End of Table Headers as a Property -->

          <!-- Data Field as a Property -->
          <template slot="prepend_id_tag" v-if="specifyDataFieldAsProperty">
            <element-node-attribute name="field" value="id"/>
          </template>
          <template slot="prepend_first_name_tag" v-if="specifyDataFieldAsProperty">
            <element-node-attribute name="field" value="last_name"/>
          </template>
          <template slot="prepend_last_name_tag" v-if="specifyDataFieldAsProperty">
            <element-node-attribute name="field" value="first_name"/>
          </template>
          <template slot="prepend_full_name_tag" v-if="specifyDataFieldAsProperty">
            <element-node-attribute name="field" value="full_name"/>
          </template>
          <template slot="prepend_email_tag" v-if="specifyDataFieldAsProperty">
            <element-node-attribute name="field" value="email"/>
          </template>
          <!-- End of Data Field as a Property -->
        </table-source-code-builder>
        <hr>
      </div>

      <div class="col-md-4">
        <view-on-codepen-button
          :js-code="script"
          :html-code="template"
          :css-code="styles"
          :css-dependencies="cssDependencies"
          :js-dependencies="jsDependencies"
          class="hidden-xs"
        />
        <h3>Step 3: View the Result</h3>
        <hr>
        <v-runtime-template :template="template" v-if="template"/>
      </div>
    </div>
  </div>
</template>

<script>
import samplePeopleRecords from '../people.json'
import Accordion from 'vue-source-code-builder/src/components/Accordion'
import AccordionSection from 'vue-source-code-builder/src/components/AccordionSection'
import CheckboxInput from 'vue-source-code-builder/src/components/inputs/CheckboxInput'
import RadioInput from 'vue-source-code-builder/src/components/inputs/RadioInput'
import SelectInput from 'vue-source-code-builder/src/components/inputs/SelectInput'
import TextAreaInput from 'vue-source-code-builder/src/components/inputs/TextAreaInput'
import VRuntimeTemplate from 'v-runtime-template'
import TableSourceCodeBuilder from './TableSourceCodeBuilder'
import {
  upper,
  lower,
  email,
  setCurrentPage,
  totalPages,
  currentPageRecords,
  linkClicked
} from './SharedFunctions.js'

let RecordScope = {
  functional: true,
  render(h, context) {
    return h(
      'element-node',
      { props: { tag: 'template' }, attrs: { 'slot-scope': '{ record }' } },
      context.slots().default
    )
  }
}

let stringifyFunction = (f, key) => {
  return key + f.toString().replace(/^\s*function[^(]+/, '') + ','
}

const stringFormatters = [
  {
    value: 'upper',
    label: 'Uppercase',
    definition: stringifyFunction(upper, 'upper')
  },
  {
    value: 'lower',
    label: 'Lowercase',
    definition: stringifyFunction(lower, 'lower')
  }
]
const emailFormatter = {
  value: 'email',
  label: 'Email',
  definition: stringifyFunction(email, 'email')
}

export default {
  components: {
    VRuntimeTemplate,
    TableSourceCodeBuilder,
    Accordion,
    AccordionSection,
    CheckboxInput,
    SelectInput,
    TextAreaInput,
    RadioInput,
    RecordScope
  },
  data() {
    return {
      template: null,
      script: null,
      styles: null,
      cssDependencies: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
      ],
      jsDependencies: [
        'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.6/vue.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
        'https://unpkg.com/vue-inherit-slots',
        'https://unpkg.com/vue-slot-hooks',
        'https://unpkg.com/vue-table-for'
      ],
      paginated: false,
      paginateInternally: true,
      perPage: 10,
      currentPage: 1,
      rawRecords: JSON.stringify(samplePeopleRecords, null, 2),
      records: [],
      selectedColumns: ['first_name', 'last_name', 'email'],
      availableColumns: ['id', 'first_name', 'last_name', 'full_name', 'email'],
      defaultScopedSlot: false,
      allFormatters: [...stringFormatters, emailFormatter],
      defaultFormatters: [null, ...stringFormatters],
      availableFormatters: {
        first_name: [null, ...stringFormatters],
        last_name: [null, ...stringFormatters],
        full_name: [null, ...stringFormatters],
        email: [null, ...stringFormatters, emailFormatter]
      },
      columnConfigurations: {
        first_name: {
          formatter: null,
          customHeader: false
        },
        last_name: {
          formatter: null,
          customHeader: false
        },
        full_name: {
          formatter: null,
          customHeader: false
        },
        id: {
          formatter: null,
          customHeader: false
        },
        email: {
          formatter: null,
          customHeader: false
        }
      },
      specifyTableHeadersAsProperty: false,
      specifyDataFieldAsProperty: false,
      defaultHeaderFormatter: null,
      defaultColumnFormatter: null,
      functions: {
        setCurrentPage: stringifyFunction(setCurrentPage, 'setCurrentPage'),
        currentPageRecords: stringifyFunction(
          currentPageRecords,
          'currentPageRecords'
        ),
        totalPages: stringifyFunction(totalPages, 'totalPages'),
        linkClicked: stringifyFunction(linkClicked, 'linkClicked')
      }
    }
  },
  computed: {
    columns() {
      return this.availableColumns.filter(
        columnName => this.selectedColumns.indexOf(columnName) !== -1
      )
    },
    currentPageRecords,
    totalPages
  },
  watch: {
    rawRecords: {
      handler() {
        this.records = JSON.parse(this.rawRecords)
      },
      immediate: true
    }
  },
  methods: {
    upper,
    lower,
    email,
    linkClicked,
    setCurrentPage,
    showingColumn(column) {
      return this.columns.indexOf(column) !== -1
    },
    formatterUsed(formatter) {
      return (
        Object.values(this.columnConfigurations).find(
          configuration => configuration.formatter === formatter
        ) ||
        this.defaultColumnFormatter === formatter ||
        this.defaultHeaderFormatter === formatter
      )
    },
    titleize(name) {
      return name
        .toLowerCase()
        .replace('_', ' ')
        .split(/\s+/)
        .map(word => word.replace(word[0], word[0].toUpperCase()))
        .join(' ')
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
