<template>
  <div>
    <h1 class="page-header">Demo</h1>
    <ExampleWithSource :source="basicExampleSource" title="Basic Example">
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

    <ExampleWithSource :source="customHeaderExampleSource" title="Custom Header Definition">
      <CustomHeaderExample
        :records="records.slice(0, 8)"
        class="table table-hover table-striped table-bordered">
      </CustomHeaderExample>
    </ExampleWithSource>

    <ExampleWithSource :source="basicPaginatedExampleSource" title="Basic Pagination Example">
      <BasicPaginatedExample
        :records="records"
        class="table table-hover table-striped table-bordered">
      </BasicPaginatedExample>
    </ExampleWithSource>
  </div>
</template>

<script>
/* eslint-disable */
import Faker from 'faker'
import ExampleWithSource from './ExampleWithSource'

import BasicExample from './BasicExample'
import basicExampleSource from '!raw-loader!./BasicExample'

import CustomColumnExample from './CustomColumnExample'
import customColumnExampleSource from '!raw-loader!./CustomColumnExample'

import CustomHeaderExample from './CustomHeaderExample'
import customHeaderExampleSource from '!raw-loader!./CustomHeaderExample'

import BasicPaginatedExample from './BasicPaginatedExample'
import basicPaginatedExampleSource from '!raw-loader!./BasicPaginatedExample'

export default {
  components: {
    ExampleWithSource,
    BasicExample,
    CustomColumnExample,
    BasicPaginatedExample,
    CustomHeaderExample
  },
  data () {
    return {
      basicExampleSource,
      customColumnExampleSource,
      basicPaginatedExampleSource,
      customHeaderExampleSource,
      records: [...Array(25).keys()].map((i) => {
        return {
          id: i + 1,
          first_name: Faker.name.firstName(),
          last_name: Faker.name.lastName(),
          email: Faker.internet.email()
        }
      })
    }
  }
}
</script>