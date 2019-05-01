<template functional>
  <element-node tag="table-for" class="table table-bordered">
    <element-node-attribute
      name=":records"
      value="currentPageRecords"
      v-if="props.manualPagination"
    />
    <element-node-attribute name=":records" value="records" v-else />
    <element-node-attribute
      name="paginated"
      v-if="props.tableOptions.paginated"
    />
    <element-node-attribute
      name="paginate-internally"
      v-if="props.automaticPagination"
    />
    <element-node-attribute
      name=":per-page"
      :value="props.tableOptions.perPage"
      v-if="props.automaticPagination"
    />
    <element-node-attribute
      name=":current-page"
      value="currentPage"
      v-if="props.manualPagination"
    />
    <element-node-attribute
      name="@update:currentPage"
      value="setCurrentPage"
      v-if="props.manualPagination"
    />
    <element-node-attribute
      name=":total-pages"
      value="totalPages"
      v-if="props.manualPagination"
    />
    <element-node-attribute
      name=":formatter"
      :value="props.tableOptions.defaultColumnFormatter"
      v-if="props.tableOptions.defaultColumnFormatter"
    />
    <element-node-attribute
      name=":header"
      :value="props.header"
      v-if="props.tableOptions.defaultHeaderFormatter"
    />
    <element-node-attribute
      name=":data-row"
      :value="props.tableOptions.dataRowOptions"
      v-if="props.tableOptions.dataRowOptions"
    />
    <element-node
      tag="th"
      v-if="
        props.tableOptions.columns.id &&
          props.tableOptions.includeCustomIdHeader
      "
    >
      <element-node-attribute name="slot" value="id_header" />
      <element-node-attribute name="style" value="color: red" />
      <element-node tag="i" class="fa fa-users" />
    </element-node>
    <element-node
      tag="th"
      v-if="
        props.tableOptions.columns.first_name &&
          props.tableOptions.includeCustomFirstNameHeader
      "
    >
      <element-node-attribute name="slot" value="first_name_header" />
      <element-node-attribute name="style" value="color: red" />
      <element-node tag="i" class="fa fa-users" />
    </element-node>
    <element-node
      tag="th"
      v-if="
        props.tableOptions.columns.last_name &&
          props.tableOptions.includeCustomLastNameHeader
      "
    >
      <element-node-attribute name="slot" value="last_name_header" />
      <element-node-attribute name="style" value="color: red" />
      <element-node tag="i" class="fa fa-users" />
    </element-node>
    <element-node
      tag="th"
      v-if="
        props.tableOptions.columns.full_name &&
          props.tableOptions.includeCustomFullNameHeader
      "
    >
      <element-node-attribute name="slot" value="full_name_header" />
      <element-node-attribute name="style" value="color: red" />
      <element-node tag="i" class="fa fa-users" />
    </element-node>

    <element-node
      tag="th"
      v-if="
        props.tableOptions.columns.email &&
          props.tableOptions.includeCustomEmailHeader
      "
    >
      <element-node-attribute name="slot" value="email_header" />
      <element-node-attribute name="style" value="color: red" />
      <element-node tag="i" class="fa fa-users" />
    </element-node>

    <element-node
      tag="template"
      :skip-tag="!props.tableOptions.defaultScopedSlot"
    >
      <element-node-attribute name="slot-scope" value="{ record }" />

      <!-- ID Column -->
      <table-column-source
        name="id"
        v-if="props.tableOptions.columns.id"
        :no-header="props.tableOptions.specifyColumnHeadersSeparately"
        :field="props.tableOptions.specifyDataFieldSeparately && 'id'"
        :template-syntax="!props.tableOptions.defaultScopedSlot"
      >
        <element-node tag="a">
          <element-node-attribute
            name=":href"
            value="`/records/${record.id}`"
          />
          <element-node-attribute name="@click" value="linkClicked(record)" />
          <element-node tag="i" class="fa fa-edit" />
        </element-node>
      </table-column-source>

      <!-- First Name Column -->
      <table-column-source
        name="first_name"
        v-if="props.tableOptions.columns.first_name"
        :formatter="props.tableOptions.columnFormatters.firstName"
        :header="props.tableOptions.specifyColumnHeadersSeparately && 'Vorname'"
        :field="props.tableOptions.specifyDataFieldSeparately && 'last_name'"
      />

      <!-- Last Name Column -->
      <table-column-source
        name="last_name"
        v-if="props.tableOptions.columns.last_name"
        :formatter="props.tableOptions.columnFormatters.lastName"
        :header="
          props.tableOptions.specifyColumnHeadersSeparately && 'Nachname'
        "
        :field="props.tableOptions.specifyDataFieldSeparately && 'first_name'"
      />

      <!-- Full Name Column -->
      <table-column-source
        name="full_name"
        v-if="props.tableOptions.columns.full_name"
        :formatter="props.tableOptions.columnFormatters.fullName"
        :header="props.tableOptions.specifyColumnHeadersSeparately && 'Name'"
        :content="props.fullNameContent"
        :template-syntax="!props.tableOptions.defaultScopedSlot"
      >
        <template
          v-if="
            !props.tableOptions.fullNameContentProperty ||
              !props.tableOptions.defaultScopedSlot
          "
        >
          <text-node text="record.first_name" curly-braces />
          <text-node text="record.last_name" curly-braces />
        </template>
      </table-column-source>

      <!-- Email Column -->
      <table-column-source
        name="email"
        v-if="props.tableOptions.columns.email"
        :formatter="props.tableOptions.columnFormatters.email"
        :header="props.tableOptions.specifyColumnHeadersSeparately && 'Email'"
        :field="props.tableOptions.specifyDataFieldSeparately && 'email'"
      />
    </element-node>
    <element-node tag="tfoot" v-if="props.tableOptions.includeCustomFooter">
      <element-node-attribute name="slot" value="footer" />
      <element-node-attribute
        name="slot-scope"
        value="{ columns }"
        v-if="props.tableOptions.slotScopedFooter"
      />
      <element-node tag="tr">
        <element-node tag="th">
          <element-node-attribute
            name=":colspan"
            value="columns.length"
            v-if="props.tableOptions.slotScopedFooter"
          />
          <element-node-attribute
            name="colspan"
            :value="props.totalColumns"
            v-else
          />Custom Footer
        </element-node>
      </element-node>
    </element-node>
  </element-node>
</template>

<script>
export default {
  props: {
    tableOptions: {
      type: Object,
      required: true
    },
    manualPagination: Boolean,
    automaticPagination: Boolean,
    totalColumns: Number,
    header: String,
    fullNameContent: String
  }
}
</script>

<style></style>
