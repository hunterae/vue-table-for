<template>
  <div>
    <vue-sfc-source-code
      is="inherit-slots"
      @update:template="$emit('update:template', $event)"
      @update:script="$emit('update:script', $event)"
      @update:styles="$emit('update:styles', $event)"
    >
      <template slot="before_script">
        <text-node :text="'import Axios from \'axios\'\n'"/>
      </template>

      <template slot="append_exports_content">
        <pre is="text-node">
          computed: {
            <render-with-slot-hooks slot-name="computed"/>
          },
        </pre>
      </template>

      <template slot="append_data_content">
        <pre is="text-node" text="records: [],"/>
      </template>

      <template slot="append_exports_content">
        <pre is="text-node">
          mounted() {
            axios.get('https://raw.githubusercontent.com/hunterae/vue-table-for/master/examples/people.json')
              .then(response => {
                this.records = response.data
              })
          }
        </pre>
      </template>

      <render-with-slot-hooks
        tag="element-node"
        :tag-data="{ props: { tag: 'table-for' } }"
        slot-name="table"
        inner-slot-hooks-only
      >
        <element-node-attribute name=":records" value="records" slot="prepend_table_tag"/>
        <template v-for="column in columns">
          <render-with-slot-hooks
            tag="element-node"
            :tag-data="{ props: { tag: 'td' }, attrs: { name: column } }"
            :slot-name="column"
            :key="column"
          />
        </template>
      </render-with-slot-hooks>
    </vue-sfc-source-code>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array
  }
}
</script>

<style></style>
