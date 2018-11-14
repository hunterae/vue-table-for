<template>
  <TableFor :records="records">
    <th slot="first_name" class="text-center" style="color: red">
      <i class="fa fa-users"></i>
    </th>
    <template slot-scope="{ record }">
      <td name="id" :header="false">
        <a :href="`/records/${record.id}`" @click='linkClicked'>
          <i class="fa fa-edit"></i>
        </a>
      </td>
      <td name="email" header="Login" >
      <td name="first_name" />
    </template>
  </TableFor>
</template>

<script>
export default {
  props: {
    records: Array
  },
  methods: {
    linkClicked (event) {
      event.preventDefault()
      alert('Link Clicked')
    }
  }
}
</script>