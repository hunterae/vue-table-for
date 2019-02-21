<template>
  <div class="form-group">
    <div class="checkbox">
      <label>
        <input
          v-bind="$attrs"
          type="checkbox"
          :checked="value"
          @change="$emit('input', $event.target.checked)"
        />
        {{ label }}
      </label>
      <span class="help-block" v-if="help"> {{ help }} </span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
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
