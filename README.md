# vue-table-for

[![npm version](https://badge.fury.io/js/vue-table-for.svg)](https://badge.fury.io/js/vue-table-for)

## Installation

Yarn:

```
yard add vue-table-for
```

Npm:

```
npm install vue-table-for
```

CDN: [UNPKG](https://unpkg.com/vue-table-for) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-table-for)

## Usage

First you need to load `vue-table-for` somewhere in your app:

```
import Vue from 'vue'
import TableFor from 'vue-table-for'
Vue.use(TableFor)
```

Check out the [Live demo](https://hunterae.github.io/vue-table-for/) for examples.

Then, use any of the following components within your templates:

### TableFor

Builds a table for a collection of records.

Only the data columns are required. Header columns will be automatically generated based on the data columns but can be overridden using slots.

```
<template>
  <TableFor :records="records">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </TableFor>
</template>

<script>
export default {
  props: {
    records: Array
  }
}
```

More documentation coming soon

### PaginatedTableFor

Builds a table for a collection of records with a footer consisting of pagination links for the records.

It is expected that the records passed in are only the records for the current page being displayed, and the current page and total number of pages must be specified as props and managed externally, either in the parent component, or via a vuex store, or some other mechanism.

```
<template>
  <PaginatedTableFor :records="currentPageRecords" :page.sync="currentPage" :total-pages="totalPages">
    <td name="first_name" />
    <td name="last_name" />
    <td name="email" />
  </PaginatedTableFor>
</template>

<script>
export default {
  props: {
    records: Array
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.records.length / this.perPage)
    },
    currentPageRecords() {
      let recordOffset = (this.currentPage - 1) * this.perPage
      return this.records.slice(recordOffset, recordOffset + this.perPage)
    }
  }
}
```

More documentation coming soon

### LocalPaginatedTableFor

TODO

## Coming Soon

- Tests
- More documentation and examples (including the TableFor API)
- Ability to specify table columns as a prop
- Globally apply options to each data column
- Sorting utilities and abilities for each column
- Styling and overrides for the pagination links
- Filtering utilities
- Ability to provide slots in relation to various hooks provided throughout the component (integration with vue-slot-hooks - wip plugin)
- Install plugin with a global instance of Vue (i.e. not as plugin using Vue.use(TableFor))

## Acknowledgements

vue-table-for is more-or-less a direct port over of my [Ruby on Rails' table-for Gem](https://github.com/hunterae/table-for), which spawned out of my [Ruby on Rails' blocks Gem](https://github.com/hunterae/blocks). Upon learning VueJS, I realized that a ton of the concepts could be reused (and possibly improved) using VueJS syntax.

I also thank [Fernando Garcia](https://github.com/fernandoagarcia) for recommending VueJS in the first place, helping me learn a lot of the ins and outs, and also acting as a collaborator for this plugin.

I studied the [vue-fullscreen](https://github.com/mirari/vue-fullscreen) plugin and reproduced a lot of similar approaches for how that plugin is setup, particularly with how it is used to create its own documentation and examples.
