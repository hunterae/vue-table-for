<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select
      class="form-control"
      :value="value"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
