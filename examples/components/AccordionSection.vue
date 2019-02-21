<template>
  <div class="panel panel-default">
    <div
      class="panel-heading"
      role="tab"
      :id="`${safeName}-heading`"
      @click="$parent.$emit('expanded', title)"
    >
      <h4 class="panel-title">
        <a role="button" aria-expanded="true" :aria-controls="safeName">
          {{ title }}
        </a>
      </h4>
    </div>
    <TransitionExpand>
      <div
        :id="safeName"
        v-if="expanded"
        role="tabpanel"
        class="panel-collapse"
        :aria-labelledby="`${safeName}-heading`"
      >
        <div class="panel-body"><slot></slot></div>
      </div>
    </TransitionExpand>
  </div>
</template>

<script>
import camelCase from 'lodash/camelCase'
import TransitionExpand from './TransitionExpand'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    activeSection: {
      type: String
    }
  },
  computed: {
    safeName() {
      return camelCase(this.title)
    },
    expanded() {
      return this.title === this.activeSection
    }
  },
  components: {
    TransitionExpand
  }
}
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 10s ease;
  overflow: hidden;
}
.accordion-enter,
.accordion-leave-to {
  height: 0;
}
.accordion-enter-to,
.accordion-leave {
  height: auto;
}
</style>
