<template>
  <div id="app">
    <a href="https://github.com/hunterae/vue-table-for" target="_blank">
      <img
        style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
        alt="Fork me on GitHub"
      />
    </a>
    <div class="jumbotron">
      <div class="container">
        <h1>vue-table-for</h1>
        <p>Easily build a table for your records</p>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <h3>Step 1: Set the options</h3>
          <hr />

          <table-options
            @update:records="records = $event"
            @update:tableOptions="tableOptions = $event"
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
              @update:sourceCode="htmlSourceCode = $event"
              @update:jsCode="jsCode = $event"
            ></table-source>
          </section>
        </div>
        <div class="col-md-4">
          <form
            action="https://codepen.io/pen/define"
            method="POST"
            target="_blank"
            align="right"
            style="float:right"
          >
            <input type="hidden" name="data" :value="sourceCode" />
            <button
              type="submit"
              class="btn btn-primary"
              title="Open on Codepen"
            >
              View on Codepen
              <img
                src="http://s.cdpn.io/3/cp-arrow-right.svg"
                width="40"
                height="40"
                class="codepen-mover-button"
              />
            </button>
          </form>
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
    <footer class="footer">
      <div class="container">
        <h4>
          GitHub
          <a href="https://github.com/hunterae" target="_blank" title="GitHub"
            >@hunterae</a
          >
        </h4>
      </div>
    </footer>
  </div>
</template>

<script>
// import samplePeopleRecords from './people.json'
import Doc from '../README.md'
// import Examples from './components/index'
import 'github-markdown-css'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import TableOptions from './components/table/TableOptions'
import TableSource from './components/table/TableSource'
import TableOutput from './components/table/TableOutput'

export default {
  name: 'app',
  components: {
    Doc,
    // Examples,
    TableOptions,
    TableSource,
    TableOutput
  },
  data() {
    return {
      records: [],
      tableOptions: null,
      htmlSourceCode: null,
      jsCode: null
    }
  },
  computed: {
    sourceCode() {
      if (!this.jsCode) return null

      let js = `new Vue({\n\tel: "#app",\n\ttemplate: "${this.htmlSourceCode.replace(
        /"/g,
        "'"
      )}", ${this.jsCode.slice(this.jsCode.indexOf('{') + 1)})`.replace(
        'https://goo.gl/w71knn',
        'https://raw.githubusercontent.com/hunterae/vue-table-for/master/examples/people.json'
      )

      return JSON.stringify({
        html: '<div id="app"></div>',
        js: js,
        css_external:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css',
        js_external:
          'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.6/vue.min.js;https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js;https://unpkg.com/vue-inherit-slots;https://unpkg.com/vue-slot-hooks@0.2.3/dist/vue-slot-hooks.umd.js;https://unpkg.com/vue-table-for@0.1.6/dist/vue-table-for.umd.js'
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.jumbotron {
  color: white;
  background: #41b883;
}

.footer {
  margin-top: 30px;
  padding: 20px;
  color: white;
  background: #41b883;
  text-align: center;

  a {
    color: white;
  }
}
</style>
