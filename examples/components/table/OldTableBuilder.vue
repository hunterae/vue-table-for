<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <h3>Step 1: Set the options</h3>
        <hr />

        <table-options
          @update:records="records = $event"
          @update:tableOptions="tableOptions = $event"
          :preset="$route.params && $route.params.preset"
        ></table-options>
      </div>
      <div class="col-md-4">
        <h3>Step 2: View the Code</h3>
        <hr />
        <section id="js">
          <h4>Here's the .vue file:</h4>
          <table-source
            v-if="tableOptions"
            :table-options="tableOptions"
            @update:template="htmlSourceCode = $event"
            @update:script="jsCode = $event"
          ></table-source>
        </section>
      </div>
      <div class="col-md-4">
        <view-on-codepen-button
          :js-code="jsCode"
          :html-code="htmlSourceCode"
          :css-dependencies="cssDependencies"
          :js-dependencies="jsDependencies"
        />
        <h3>Step 3: View the Result</h3>
        <hr />
        <section id="output">
          <h4>Your resulting table:</h4>
          <table-output
            v-if="htmlSourceCode"
            :html-source-code="htmlSourceCode"
            :records="records"
            :per-page="tableOptions.perPage"
          />
        </section>
      </div>
    </div>
    <!-- <examples /> -->
    <div class="row"><doc class="col-md-12 markdown-body" /></div>
  </div>
</template>

<script>
// import samplePeopleRecords from './people.json'
import Doc from '@/../README.md'
// import Examples from './components/index'
import 'github-markdown-css'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import TableOptions from './TableOptions'
import TableSource from './TableSource'
import TableOutput from './TableOutput'
import ViewOnCodepenButton from 'vue-source-code-builder/src/components/ViewOnCodepenButton.vue'

export default {
  name: 'app',
  components: {
    Doc,
    // Examples,
    TableOptions,
    TableSource,
    TableOutput,
    ViewOnCodepenButton
  },
  data() {
    return {
      records: [],
      tableOptions: null,
      htmlSourceCode: null,
      jsCode: null,
      cssDependencies: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
      ],
      jsDependencies: [
        'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.6/vue.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
        'https://unpkg.com/vue-inherit-slots',
        'https://unpkg.com/vue-slot-hooks',
        'https://unpkg.com/vue-table-for'
      ]
    }
  }
}
</script>

<style></style>
