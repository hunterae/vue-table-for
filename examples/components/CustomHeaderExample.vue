<template>
  <TableFor
    :records="records"
    class="table table-hover 
      table-striped table-bordered">>
    <th slot="first_name" style="color: red">
      <i class="fa fa-users"></i>
    </th>

    <template slot-scope="{ record }">
      <td name="id" :header="false">
        <a :href="`/records/${record.id}`"
           @click='linkClicked'>
          <i class="fa fa-edit"></i>
        </a>
      </td>
      <td name="email" header="Login" >
      <td name="first_name" />
    </template>
  </TableFor>
</template>

<script>
import samplePeopleRecords from '../people.json'
export default {
  data () {
    return {
      records: samplePeopleRecords.slice(0, 10)
    }
  },
  methods: {
    linkClicked (event) {
      event.preventDefault()
      alert('Link Clicked')
    }
  }
}
</script>
