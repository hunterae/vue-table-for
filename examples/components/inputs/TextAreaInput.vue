<template>
  <textarea
    class="form-control"
    v-bind="$attrs"
    v-on="listeners"
    :value="value"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style></style>
