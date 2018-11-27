<template>
  <div class="row">
    <div class="col-xs-12">
      <h3>{{title}}</h3>
      <slot name="description">{{description}}</slot>
    </div>
    <div class="col-md-6">
      <h4>Source</h4>
      <prism language="markup">{{ source }}</prism>
    </div>
    <div class="col-md-6">
      <h4>Output</h4>
      <slot><component :is="component"></component></slot>
    </div>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  props: {
    source: String,
    title: String,
    description: String,
    component: Object
  }
}
</script>
<style lang="scss">
pre[class*='language-'] {
  border-radius: 6px;
  margin: 0 0 30px 0 !important;
}

code[class*='language-'] {
  font-size: 1.6rem;
  line-height: 26px;
}

.language-markup .token.attr-name {
  color: #b294bb;
}
.language-markup .token.attr-value {
  color: #b5bd68;
}
.language-markup .token.tag,
.language-markup .token.keyword {
  color: #d75a64;
}
.language-markup .token.punctuation {
  color: #8abeb7;
}
.language-javascript .token.function {
  color: #81a2be;
}
.language-javascript .token.string {
  color: #b5bd68;
}
</style>
