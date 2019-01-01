# vue-table-for

[![npm version](https://badge.fury.io/js/vue-table-for.svg)](https://badge.fury.io/js/vue-table-for)

## Installation

Yarn:

```
yarn add vue-table-for
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

## DEMO

[LIVE DEMO](https://hunterae.github.io/vue-table-for/) for examples.

## Components

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
- Release notes and tagged versions in Git

## Acknowledgements

vue-table-for is more-or-less a direct port over of my [Ruby on Rails' table-for Gem](https://github.com/hunterae/table-for), which spawned out of my [Ruby on Rails' blocks Gem](https://github.com/hunterae/blocks). Upon learning VueJS, I realized that a ton of the concepts could be reused (and possibly improved) using VueJS syntax.

I also thank [Fernando Garcia](https://github.com/fernandoagarcia) for recommending VueJS in the first place, helping me learn a lot of the ins and outs, and also acting as a collaborator for this plugin.

I studied the [vue-fullscreen](https://github.com/mirari/vue-fullscreen) plugin and reproduced a lot of similar approaches for how that plugin is setup, particularly with how it is used to create its own documentation and examples.

I also followed used approaches from these two articles [How to create, publish and use your own VueJS Component library on NPM using @vue/cli 3.0](https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3) and [Writing a very simple plugin in Vue.js - (Example)](https://dev.to/nkoik/writing-a-very-simple-plugin-in-vuejs---example-8g8) in learning how to create a VueJS plugin.
