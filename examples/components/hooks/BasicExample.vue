<template>
  <TableFor class="table table-hover
    table-striped table-bordered"
    :records="records">

    <!-- <th slot="some_column_header" style="color: orange">
      Custom header
    </th> -->

    <td name="some_column" field="email" :formatter="formatEmail">
    </td>

    <i slot="prepend_some_column_header">
      Prepended Header
    </i>

    <i slot="append_some_column_header">
      Appended Header
    </i>

    <i slot="prepend_some_column">
      Prepended Data
    </i>

    <i slot="append_some_column">
      Appended Data
    </i>

    <div slot="around_some_column_content" style="color: orange">

    </div>

    <!-- <tr slot="before_data_row"><td>Hi</td></tr> -->

    <!-- <div slot="some_column">hey</div> -->

    <!--
    <div slot="prepend_body">
      <tr>
        <td>First row</td>
      </tr>
    </div>

    <div slot="append_body">
      <tr>
        <td>First row</td>
      </tr>
    </div>

    <tr slot="before_data_row" slot-scope="dataRowScope">
      <td>Before record {{dataRowScope.record.id}}</td>
    </tr> -->

    <!-- <div slot="body" slot-scope="dataRows">
      <component :is="dataRows" />
    </div> -->
  </TableFor>
</template>

<script>
import samplePeopleRecords from '../../people.json'

export default {
  data() {
    return {
      records: samplePeopleRecords.slice(0, 10)
    }
  },
  methods: {
    formatEmail(value) {
      return this.$createElement(
        'a',
        { attrs: { href: `mailto:${value}` } },
        value
      )
    }
  }
}
</script>
