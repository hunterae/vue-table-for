<template>
  <div class="row">
    <div class="col-xs-12">
      <h2>{{title}}</h2>
    </div>
    <div class="col-md-6">
      <h3>Source</h3>
      <pre v-highlightjs="source"><code class="vue"></code></pre>
    </div>
    <div class="col-md-6">
      <h3>Output</h3>
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    source: String,
    title: String
  },
  computed: {
    sanitizedSource () {
      return this.source.match(/(.[\s\S]*)<script>/)[1].trim()
    }
  }
}
</script>