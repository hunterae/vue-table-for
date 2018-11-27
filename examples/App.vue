<template>
  <div id="app">
    <a href="https://github.com/hunterae/vue-table-for" target="_blank">
      <img
        style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
        alt="Fork me on GitHub" />
    </a>
    <div class="jumbotron">
      <div class="container">
        <h1>vue-table-for</h1>
        <p>Easily build a table for your records</p>
      </div>
    </div>
    <div class="container">
      <examples />
      <div class="row">
        <doc class="col-md-12 markdown-body"></doc>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <h4>
          GitHub
          <a href="https://github.com/hunterae" target="_blank" title="GitHub">
            @hunterae
          </a>
        </h4>
      </div>
    </footer>
  </div>
</template>

<script>
import Doc from '../README.md'
import Examples from './components/index'
import 'github-markdown-css'

export default {
  name: 'app',
  components: {
    Doc,
    Examples
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
