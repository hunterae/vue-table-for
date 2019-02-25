<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select
      class="form-control"
      :value="value"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :key="optionValue(option)"
        :value="optionValue(option)"
      >
        {{ optionLabel(option) }}
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
  },
  methods: {
    optionValue(option) {
      if (option && typeof option === 'object') {
        return option.value
      } else {
        return option
      }
    },
    optionLabel(option) {
      if (option && typeof option === 'object') {
        return option.label
      } else {
        return option
      }
    }
  }
}
</script>

<style></style>
