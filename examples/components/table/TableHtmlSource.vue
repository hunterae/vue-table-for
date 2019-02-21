<template functional>
  <html-tag tag="table-for" class="table table-bordered">
    <html-tag-attribute
      name=":records"
      value="currentPageRecords"
      v-if="props.manualPagination"
    />
    <html-tag-attribute name=":records" value="records" v-else />
    <html-tag-attribute name="paginated" v-if="props.tableOptions.paginated" />
    <html-tag-attribute
      name="paginate-internally"
      v-if="props.automaticPagination"
    />
    <html-tag-attribute
      name=":per-page"
      :value="props.tableOptions.perPage"
      v-if="props.automaticPagination"
    />
    <html-tag-attribute
      name=":current-page"
      value="currentPage"
      v-if="props.manualPagination"
    />
    <html-tag-attribute
      name="@update:currentPage"
      value="setCurrentPage"
      v-if="props.manualPagination"
    />
    <html-tag-attribute
      name=":total-pages"
      value="totalPages"
      v-if="props.manualPagination"
    />
    <html-tag-attribute
      name=":formatter"
      :value="props.tableOptions.defaultColumnFormatter"
      v-if="props.tableOptions.defaultColumnFormatter"
    />
    <html-tag-attribute
      name=":header"
      :value="props.header"
      v-if="props.tableOptions.defaultHeaderFormatter"
    />
    <html-tag-attribute
      name=":data-row"
      :value="props.tableOptions.dataRowOptions"
      v-if="props.tableOptions.dataRowOptions"
    />
    <html-tag
      tag="th"
      v-if="
        props.tableOptions.columns.id &&
          props.tableOptions.includeCustomIdHeader
      "
    >
      <html-tag-attribute name="slot" value="id_header" />
      <html-tag-attribute name="style" value="color: red" />
      <html-tag tag="i" class="fa fa-users" />
    </html-tag>
    <html-tag
      tag="th"
      v-if="
        props.tableOptions.columns.firstName &&
          props.tableOptions.includeCustomFirstNameHeader
      "
    >
      <html-tag-attribute name="slot" value="first_name_header" />
      <html-tag-attribute name="style" value="color: red" />
      <html-tag tag="i" class="fa fa-users" />
    </html-tag>
    <html-tag
      tag="th"
      v-if="
        props.tableOptions.columns.lastName &&
          props.tableOptions.includeCustomLastNameHeader
      "
    >
      <html-tag-attribute name="slot" value="last_name_header" />
      <html-tag-attribute name="style" value="color: red" />
      <html-tag tag="i" class="fa fa-users" />
    </html-tag>
    <html-tag
      tag="th"
      v-if="
        props.tableOptions.columns.fullName &&
          props.tableOptions.includeCustomFullNameHeader
      "
    >
      <html-tag-attribute name="slot" value="full_name_header" />
      <html-tag-attribute name="style" value="color: red" />
      <html-tag tag="i" class="fa fa-users" />
    </html-tag>

    <html-tag tag="template" :skip-tag="!props.tableOptions.defaultScopedSlot">
      <html-tag-attribute name="slot-scope" value="{ record }" />

      <!-- ID Column -->
      <table-column-source
        name="id"
        v-if="props.tableOptions.columns.id"
        :no-header="props.tableOptions.specifyColumnHeadersSeparately"
        :field="props.tableOptions.specifyDataFieldSeparately && 'id'"
        :template-syntax="!props.tableOptions.defaultScopedSlot"
      >
        <html-tag tag="a">
          <html-tag-attribute name=":href" value="`/records/${record.id}`" />
          <html-tag-attribute name="@click" value="linkClicked(record)" />
          <html-tag tag="i" class="fa fa-edit" />
        </html-tag>
      </table-column-source>

      <!-- First Name Column -->
      <table-column-source
        name="first_name"
        v-if="props.tableOptions.columns.firstName"
        :formatter="props.tableOptions.columnFormatters.firstName"
        :header="props.tableOptions.specifyColumnHeadersSeparately && 'Vorname'"
        :field="props.tableOptions.specifyDataFieldSeparately && 'last_name'"
      />

      <!-- Last Name Column -->
      <table-column-source
        name="last_name"
        v-if="props.tableOptions.columns.lastName"
        :formatter="props.tableOptions.columnFormatters.lastName"
        :header="
          props.tableOptions.specifyColumnHeadersSeparately && 'Nachname'
        "
        :field="props.tableOptions.specifyDataFieldSeparately && 'first_name'"
      />

      <!-- Full Name Column -->
      <table-column-source
        name="full_name"
        v-if="props.tableOptions.columns.fullName"
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
          <text-element text="record.first_name" curly-braces />
          <text-element text="record.last_name" curly-braces />
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
    </html-tag>
    <html-tag tag="tfoot" v-if="props.tableOptions.includeCustomFooter">
      <html-tag-attribute name="slot" value="footer" />
      <html-tag-attribute
        name="slot-scope"
        value="{ columns }"
        v-if="props.tableOptions.slotScopedFooter"
      />
      <html-tag tag="tr">
        <html-tag tag="th">
          <html-tag-attribute
            name=":colspan"
            value="columns.length"
            v-if="props.tableOptions.slotScopedFooter"
          />
          <html-tag-attribute
            name="colspan"
            :value="props.totalColumns"
            v-else
          />
          Custom Footer
        </html-tag>
      </html-tag>
    </html-tag>
  </html-tag>
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
