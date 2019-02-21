<template>
  <div class="panel-group" role="tablist">
    <slot :active-section="activeSection"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: null
    }
  },
  mounted() {
    this.$on('expanded', expandedSection => {
      this.activeSection = expandedSection
    })
    this.activeSection = this.$children[0].$vnode.componentOptions.propsData.title
  }
}
</script>

<style></style>
