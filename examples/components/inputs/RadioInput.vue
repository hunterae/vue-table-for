<template>
  <div class="radio">
    <label>
      <input
        v-bind="$attrs"
        type="radio"
        :checked="checked === value"
        :value="value"
        @change="$emit('input', $event.target.value)"
      />
      {{ label }}
    </label>
    <span class="help-block" v-if="help"> {{ help }} </span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: {
      required: true
    },
    value: {
      required: true
    },
    label: {
      type: String,
      required: true
    },
    help: String
  }
}
</script>

<style></style>
