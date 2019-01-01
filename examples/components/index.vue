<template>
  <div>
    <h1 class="page-header">Examples</h1>
    <div v-for="(list, category) in examples" :key="category">
      <h2>{{category}}</h2>
      <ExampleWithSource v-for="example in list" :key="example.title" v-bind="example">
      </ExampleWithSource>
    </div>
  </div>
</template>

<script>
import ExampleWithSource from './ExampleWithSource'

// Configuring Columns
import BasicExample from './columns/BasicExample'
import BasicExampleSource from '!raw-loader!./columns/BasicExample'

import AllColumnsScopedExample from './columns/AllColumnsScopedExample'
import AllColumnsScopedExampleSource from '!raw-loader!./columns/AllColumnsScopedExample'

import ColumnFormattersAndContentExample from './columns/FormattersExample'
import ColumnFormattersAndContentExampleSource from '!raw-loader!./columns/FormattersExample'

// Configuring Headers
import CustomHeaderExample from './CustomHeaderExample'
import CustomHeaderExampleSource from '!raw-loader!./CustomHeaderExample'

// Configuring Footer
import CustomFooterExample from './CustomFooterExample'
import CustomFooterExampleSource from '!raw-loader!./CustomFooterExample'

// Paginating Data
import LocalPaginatedExample from './LocalPaginatedExample'
import LocalPaginatedExampleSource from '!raw-loader!./LocalPaginatedExample'

import RemotePaginatedExample from './RemotePaginatedExample'
import RemotePaginatedExampleSource from '!raw-loader!./RemotePaginatedExample'

// Hooks
import HooksBasicExample from './hooks/BasicExample'
import HooksBasicExampleSource from '!raw-loader!./hooks/BasicExample'

let examples = {
  'Configuring Columns': [
    {
      source: BasicExampleSource,
      title: 'Using record fields as column names',
      component: BasicExample,
      description: `In this example, the TableFor component is passed an array of records, and
          tells the table to output columns for corresponding to fields on each
          record. When the column names match the names of fields in the record, no further
          configuration is need and the component will output the value of each record field
          specified. If a record field name does not match, it may be specified using the 'field'
          option.`
    },
    {
      source: AllColumnsScopedExampleSource,
      title: 'Using a custom column definition or field',
      component: AllColumnsScopedExample,
      description: `If more than one column provides a custom definition, it might be a good.
          idea to surround all of the columns in a scope-slot so that they all have access
          to the the current record.`
    },
    {
      source: ColumnFormattersAndContentExampleSource,
      title: 'Formatting and specifying column content',
      component: ColumnFormattersAndContentExample,
      description: `A formatter for data columns may be specified on the entire table
          or on a column by column basis. If a formatter is specified on an individual
          column, it takes precedence over the one specified for the entire table.
          Formatters will have no effect on custom column definitions.`
    }
  ],
  'Configuring Headers': [
    {
      source: CustomHeaderExampleSource,
      title: 'Custom Header Example',
      component: CustomHeaderExample
    }
  ],
  // 'Configuring Rows': [],
  'Configuring Footer': [
    {
      source: CustomFooterExampleSource,
      title: 'Custom Footer Example',
      component: CustomFooterExample
    }
  ],
  'Paginating Data': [
    {
      source: LocalPaginatedExampleSource,
      title: 'Local Data Pagination Example',
      component: LocalPaginatedExample
    },
    {
      source: RemotePaginatedExampleSource,
      title: 'Remote Data Pagination Example',
      component: RemotePaginatedExample
    }
  ],
  'Using Hooks': [
    // {
    //   source: HooksBasicExampleSource,
    //   title: 'Using Hooks Basic Example',
    //   component: HooksBasicExample
    // }
  ]
}

export default {
  components: {
    ExampleWithSource
  },
  data() {
    return {
      examples
    }
  }
}
</script>
