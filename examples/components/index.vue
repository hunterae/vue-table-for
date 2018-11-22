<template>
  <div>
    <h1 class="page-header">Examples</h1>

    <i>
      Note: The code that renders each of the following examples is applying
      the Bootstrap 3 classes "table table-hover table-striped table-bordered" to
      each generated table, and providing records read in from the local JSON
      file found <a href="https://github.com/hunterae/vue-table-for/tree/master/examples/people.json" target="_blank">here in the repo</a>,
      or, for remote examples, using the fake JSON API https://reqres.in.
      For the non-paginated examples, only the first 8 entries from the JSON file
      are passed into the components.
    </i>
    <ExampleWithSource :source="basicExampleSource" title="Basic Example">
      <!-- <p slot="description">
        In this example, the TableFor component is passed an array of records, and
        tells the table to output columns for corresponding to fields on each
        record.
      </p> -->
      <BasicExample
        :records="records.slice(0, 8)"
        class="table table-hover table-striped table-bordered">
      </BasicExample>
    </ExampleWithSource>

    <ExampleWithSource :source="customColumnExampleSource" title="Custom Column Definition">
      <CustomColumnExample
        :records="records.slice(0, 8)"
        class="table table-hover table-striped table-bordered">
      </CustomColumnExample>
    </ExampleWithSource>

    <ExampleWithSource :source="localPaginatedExampleSource" title="Local Data Pagination Example">
      <LocalPaginatedExample
        :records="records"
        class="table table-hover table-striped table-bordered">
      </LocalPaginatedExample>
    </ExampleWithSource>

    <ExampleWithSource :source="remotePaginatedExampleSource" title="Remote Data Pagination Example">
      <RemotePaginatedExample :class="tableClass"></RemotePaginatedExample>
    </ExampleWithSource>

    <ExampleWithSource :source="customHeaderExampleSource" title="Custom Header Definition">
      <CustomHeaderExample
        :records="records.slice(0, 8)"
        class="table table-hover table-striped table-bordered">
      </CustomHeaderExample>
    </ExampleWithSource>

    <ExampleWithSource :source="customFooterExampleSource" title="Custom Footer Example">
      <CustomFooterExample
        :records="records.slice(0, 8)"
        class="table table-hover table-striped table-bordered">
      </CustomFooterExample>
    </ExampleWithSource>
  </div>
</template>

<script>
import samplePeopleRecords from '../people.json'
import ExampleWithSource from './ExampleWithSource'

import BasicExample from './BasicExample'
import basicExampleSource from '!raw-loader!./BasicExample'

import CustomColumnExample from './CustomColumnExample'
import customColumnExampleSource from '!raw-loader!./CustomColumnExample'

import CustomHeaderExample from './CustomHeaderExample'
import customHeaderExampleSource from '!raw-loader!./CustomHeaderExample'

import CustomFooterExample from './CustomFooterExample'
import customFooterExampleSource from '!raw-loader!./CustomFooterExample'

import LocalPaginatedExample from './LocalPaginatedExample'
import localPaginatedExampleSource from '!raw-loader!./LocalPaginatedExample'

import RemotePaginatedExample from './RemotePaginatedExample'
import remotePaginatedExampleSource from '!raw-loader!./RemotePaginatedExample'

export default {
  components: {
    ExampleWithSource,
    BasicExample,
    CustomColumnExample,
    LocalPaginatedExample,
    RemotePaginatedExample,
    CustomHeaderExample,
    CustomFooterExample
  },
  data () {
    return {
      basicExampleSource,
      customColumnExampleSource,
      customHeaderExampleSource,
      customFooterExampleSource,
      localPaginatedExampleSource,
      remotePaginatedExampleSource,
      tableClass: "table table-hover table-striped table-bordered",
      records: samplePeopleRecords
    }
  }
}
</script>