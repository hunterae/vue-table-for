(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)s=i[u],r[s]&&m.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={index:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-table-for/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("c31f")},"171d":function(e){e.exports=[{id:1,first_name:"Robb",last_name:"Hills",email:"Sincere.Windler@yahoo.com"},{id:2,first_name:"Emmanuel",last_name:"Moen",email:"Bernadine71@hotmail.com"},{id:3,first_name:"Miracle",last_name:"Denesik",email:"Roosevelt.Bauch35@hotmail.com"},{id:4,first_name:"Vladimir",last_name:"Fritsch",email:"Lauren.Becker48@gmail.com"},{id:5,first_name:"Eliza",last_name:"Bechtelar",email:"Eli20@hotmail.com"},{id:6,first_name:"Kathleen",last_name:"Koch",email:"Alfonso.Conroy63@gmail.com"},{id:7,first_name:"Chauncey",last_name:"Legros",email:"Alexandria_Collins@hotmail.com"},{id:8,first_name:"Maximus",last_name:"Volkman",email:"Donny91@yahoo.com"},{id:9,first_name:"Britney",last_name:"Ryan",email:"Darrion.Champlin74@hotmail.com"},{id:10,first_name:"Anjali",last_name:"Yundt",email:"Geoffrey_Streich@hotmail.com"},{id:11,first_name:"Irma",last_name:"Abernathy",email:"Earl.Rau29@hotmail.com"},{id:12,first_name:"Kiarra",last_name:"Reichel",email:"Katherine46@yahoo.com"},{id:13,first_name:"Travon",last_name:"Anderson",email:"Eugenia_Gutkowski@hotmail.com"},{id:14,first_name:"Nia",last_name:"Cassin",email:"Marian.Cartwright73@gmail.com"},{id:15,first_name:"Okey",last_name:"Smith",email:"Fletcher_Reichert@hotmail.com"},{id:16,first_name:"Dixie",last_name:"Kris",email:"Heath_Little@yahoo.com"},{id:17,first_name:"Abigayle",last_name:"Jerde",email:"Marjorie_Dach66@hotmail.com"},{id:18,first_name:"Nikko",last_name:"Miller",email:"Waino_Stroman@gmail.com"},{id:19,first_name:"Keenan",last_name:"Gerhold",email:"Candelario35@gmail.com"},{id:20,first_name:"Darren",last_name:"Hintz",email:"Ellis_Smitham63@hotmail.com"},{id:21,first_name:"Floyd",last_name:"Greenfelder",email:"Ocie.Pagac@hotmail.com"},{id:22,first_name:"Lexi",last_name:"Graham",email:"Darius39@gmail.com"},{id:23,first_name:"Joshuah",last_name:"Paucek",email:"Dalton_Fadel@hotmail.com"},{id:24,first_name:"Columbus",last_name:"Kuhn",email:"Neal.Conn@gmail.com"},{id:25,first_name:"Jacynthe",last_name:"Russel",email:"Malcolm23@yahoo.com"}]},"2bec":function(e,t){e.exports='<template>\n  <LocalPaginatedTableFor\n    class="table table-hover \n      table-striped table-bordered"\n    :records="records">\n    <td name="first_name" />\n    <td name="last_name" />\n    <td name="email" />\n  </LocalPaginatedTableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../people.json\'\nexport default {\n  data () {\n    return {\n      records: samplePeopleRecords\n    }\n  }\n}\n<\/script>\n'},3194:function(e,t,a){},"31bc":function(e,t,a){"use strict";var n=a("4011"),r=a.n(n);r.a},4011:function(e,t,a){},"48c6":function(e,t){e.exports='<template>\n  <PaginatedTableFor\n    :records="records"\n    :current-page.sync="currentPage"\n    :total-pages="totalPages"\n    class="table table-hover \n      table-striped table-bordered">\n    <template slot-scope="{record}">\n      <td name="first_name" />\n      <td name="last_name" />\n      <td name="image">\n        <img :src="record.avatar" alt="Avatar" />\n      </td>\n    </template>\n  </PaginatedTableFor>\n</template>\n\n<script>\nimport Axios from \'axios\'\nexport default {\n  data () {\n    return {\n      currentPage: 1,\n      perPage: 4,\n      totalPages: 0,\n      records: []\n    }\n  },\n  watch: {\n    currentPage () {\n      this.records = []\n      this.fetchRecords()\n    }\n  },\n  methods: {\n    fetchRecords () {\n      Axios.get(\'https://reqres.in/api/users\', {\n        params: {\n          page: this.currentPage,\n          per_page: this.perPage\n        }}).then((response) => {\n          let data = response.data\n          this.totalPages = data.total_pages\n          this.records = data.data\n        })\n    }\n  },\n  mounted () {\n    this.fetchRecords()\n  }\n}\n<\/script>\n'},"744c":function(e,t){e.exports='<template>\n  <TableFor\n    :records="records"\n    class="table table-hover \n      table-striped table-bordered">>\n    <th slot="first_name" style="color: red">\n      <i class="fa fa-users"></i>\n    </th>\n\n    <template slot-scope="{ record }">\n      <td name="id" :header="false">\n        <a :href="`/records/${record.id}`"\n           @click=\'linkClicked\'>\n          <i class="fa fa-edit"></i>\n        </a>\n      </td>\n      <td name="email" header="Login" >\n      <td name="first_name" />\n    </template>\n  </TableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../people.json\'\nexport default {\n  data () {\n    return {\n      records: samplePeopleRecords.slice(0, 10)\n    }\n  },\n  methods: {\n    linkClicked (event) {\n      event.preventDefault()\n      alert(\'Link Clicked\')\n    }\n  }\n}\n<\/script>\n'},a18f:function(e,t){e.exports='<template>\n  <TableFor\n    :records="records"\n    class="table table-hover \n      table-striped table-bordered">\n    <td name="first_name" />\n    <td name="last_name" />\n    <td name="email" />\n    <tfoot slot="footer" slot-scope="{ columns }">\n      <tr>\n        <td :colspan="columns.length">Custom Footer</td>\n      </tr>\n    </tfoot>\n\n    \x3c!-- Could also be accomplished without\n      the slot-scope\n    <tfoot slot="footer">\n      <tr>\n        <td colspan="3">Custom Footer</td>\n      </tr>\n    </tfoot> --\x3e\n  </TableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../people.json\'\nexport default {\n  data () {\n    return {\n      records: samplePeopleRecords.slice(0, 10)\n    }\n  },\n}\n<\/script>\n\n\n\n'},ab90:function(e,t){e.exports='<template>\n  <TableFor\n    class="table table-hover \n      table-striped table-bordered"\n    :records="records">\n    <template slot-scope="{ record }">\n      <td name="name">\n        {{ record.first_name }}\n        {{ record.last_name }}\n      </td>\n      <td name="printed_name"\n        :content="`${record.last_name}, \n                   ${record.first_name}`"></td>\n      <td name="email"></td>\n    </template>\n  </TableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../../people.json\'\n\nexport default {\n  data() {\n    return {\n      records: samplePeopleRecords.slice(0, 10)\n    }\n  }\n}\n<\/script>\n'},b5a8:function(e,t){e.exports='<template>\n  <TableFor\n    :records="records"\n    :formatter="$options.filters.upper"\n    class="table table-hover\n           table-striped table-bordered">\n    <template slot-scope="{ record }">\n      <td name="first_name"\n        :formatter="$options.filters.lower"></td>\n      <td name="last_name"></td>\n      <td name="unformatted">Not Formatted</td>\n      <td name="full_name"\n        :content="`${record.first_name}\n                   ${record.last_name}`"></td>\n      <td name="email"\n        :formatter="formatEmail" ></td>\n    </template>\n  </TableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../../people.json\'\n\nexport default {\n  data() {\n    return {\n      records: samplePeopleRecords.slice(0, 10)\n    }\n  },\n  methods: {\n    formatEmail(value) {\n      return `<a href=\'mailto:${value}\'>${value}</a>`\n      // or:\n      // return this.$createElement(\n      //   \'a\',\n      //   { attrs: { href: `mailto:${value}` }},\n      //   value\n      // )\n    }\n  },\n  filters: {\n    upper: v => v.toUpperCase(),\n    lower: v => v.toLowerCase()\n  }\n}\n<\/script>\n'},c31f:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),e._m(1),a("div",{staticClass:"container"},[a("examples"),a("div",{staticClass:"row"},[a("doc",{staticClass:"col-md-12 markdown-body"})],1)],1),e._m(2)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"https://github.com/hunterae/vue-table-for",target:"_blank"}},[a("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png",alt:"Fork me on GitHub"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"container"},[a("h1",[e._v("vue-table-for")]),a("p",[e._v("Easily build a table for your records")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("h4",[e._v("\n        GitHub\n        "),a("a",{attrs:{href:"https://github.com/hunterae",target:"_blank",title:"GitHub"}},[e._v("\n          @hunterae\n        ")])])])])}],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h1",[e._v("vue-table-for")]),a("p",[a("a",{attrs:{href:"https://badge.fury.io/js/vue-table-for"}},[a("img",{attrs:{src:"https://badge.fury.io/js/vue-table-for.svg",alt:"npm version"}})])]),a("h2",[e._v("Installation")]),a("p",[e._v("Yarn:")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v("yarn add vue-table-for\n")])]),a("p",[e._v("Npm:")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v("npm install vue-table-for\n")])]),a("p",[e._v("CDN: "),a("a",{attrs:{href:"https://unpkg.com/vue-table-for"}},[e._v("UNPKG")]),e._v(" | "),a("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/vue-table-for"}},[e._v("jsDelivr")])]),a("h2",[e._v("Usage")]),a("p",[e._v("First you need to load "),a("code",{pre:!0},[e._v("vue-table-for")]),e._v(" somewhere in your app:")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v("import Vue from 'vue'\nimport TableFor from 'vue-table-for'\nVue.use(TableFor)\n")])]),a("h2",[e._v("DEMO")]),a("p",[a("a",{attrs:{href:"https://hunterae.github.io/vue-table-for/"}},[e._v("LIVE DEMO")]),e._v(" for examples.")]),a("h2",[e._v("Components")]),a("h3",[e._v("TableFor")]),a("p",[e._v("Builds a table for a collection of records.")]),a("p",[e._v("Only the data columns are required. Header columns will be automatically generated based on the data columns but can be overridden using slots.")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v('<template>\n  <TableFor :records="records">\n    <td name="first_name" />\n    <td name="last_name" />\n    <td name="email" />\n  </TableFor>\n</template>\n\n<script>\nexport default {\n  props: {\n    records: Array\n  }\n}\n')])]),a("p",[e._v("More documentation coming soon")]),a("h3",[e._v("PaginatedTableFor")]),a("p",[e._v("Builds a table for a collection of records with a footer consisting of pagination links for the records.")]),a("p",[e._v("It is expected that the records passed in are only the records for the current page being displayed, and the current page and total number of pages must be specified as props and managed externally, either in the parent component, or via a vuex store, or some other mechanism.")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v('<template>\n  <PaginatedTableFor :records="currentPageRecords" :page.sync="currentPage" :total-pages="totalPages">\n    <td name="first_name" />\n    <td name="last_name" />\n    <td name="email" />\n  </PaginatedTableFor>\n</template>\n\n<script>\nexport default {\n  props: {\n    records: Array\n  },\n  data() {\n    return {\n      perPage: 10,\n      currentPage: 1\n    }\n  },\n  computed: {\n    totalPages() {\n      return Math.ceil(this.records.length / this.perPage)\n    },\n    currentPageRecords() {\n      let recordOffset = (this.currentPage - 1) * this.perPage\n      return this.records.slice(recordOffset, recordOffset + this.perPage)\n    }\n  }\n}\n')])]),a("p",[e._v("More documentation coming soon")]),a("h3",[e._v("LocalPaginatedTableFor")]),a("p",[e._v("TODO")]),a("h2",[e._v("Coming Soon")]),a("ul",[a("li",[e._v("Tests")]),a("li",[e._v("More documentation and examples (including the TableFor API)")]),a("li",[e._v("Ability to specify table columns as a prop")]),a("li",[e._v("Globally apply options to each data column")]),a("li",[e._v("Sorting utilities and abilities for each column")]),a("li",[e._v("Styling and overrides for the pagination links")]),a("li",[e._v("Filtering utilities")]),a("li",[e._v("Ability to provide slots in relation to various hooks provided throughout the component (integration with vue-slot-hooks - wip plugin)")]),a("li",[e._v("Install plugin with a global instance of Vue (i.e. not as plugin using Vue.use(TableFor))")])]),a("h2",[e._v("Acknowledgements")]),a("p",[e._v("vue-table-for is more-or-less a direct port over of my "),a("a",{attrs:{href:"https://github.com/hunterae/table-for"}},[e._v("Ruby on Rails' table-for Gem")]),e._v(", which spawned out of my "),a("a",{attrs:{href:"https://github.com/hunterae/blocks"}},[e._v("Ruby on Rails' blocks Gem")]),e._v(". Upon learning VueJS, I realized that a ton of the concepts could be reused (and possibly improved) using VueJS syntax.")]),a("p",[e._v("I also thank "),a("a",{attrs:{href:"https://github.com/fernandoagarcia"}},[e._v("Fernando Garcia")]),e._v(" for recommending VueJS in the first place, helping me learn a lot of the ins and outs, and also acting as a collaborator for this plugin.")]),a("p",[e._v("I studied the "),a("a",{attrs:{href:"https://github.com/mirari/vue-fullscreen"}},[e._v("vue-fullscreen")]),e._v(" plugin and reproduced a lot of similar approaches for how that plugin is setup, particularly with how it is used to create its own documentation and examples.")]),a("p",[e._v("I also followed used approaches from these two articles "),a("a",{attrs:{href:"https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3"}},[e._v("How to create, publish and use your own VueJS Component library on NPM using @vue/cli 3.0")]),e._v(" and "),a("a",{attrs:{href:"https://dev.to/nkoik/writing-a-very-simple-plugin-in-vuejs---example-8g8"}},[e._v("Writing a very simple plugin in Vue.js - (Example)")]),e._v(" in learning how to create a VueJS plugin.")])])}],l=a("2877"),c={},d=Object(l["a"])(c,s,i,!1,null,null,null);d.options.__file="README.md";var u=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"page-header"},[e._v("Examples")]),e._l(e.examples,function(t,n){return a("div",{key:n},[a("h2",[e._v(e._s(n))]),e._l(t,function(t){return a("ExampleWithSource",e._b({key:t.title},"ExampleWithSource",t,!1))})],2)})],2)},p=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("h3",[e._v(e._s(e.title))]),e._t("description",[e._v(e._s(e.description))])],2),a("div",{staticClass:"col-md-6"},[a("h4",[e._v("Source")]),a("prism",{attrs:{language:"markup"}},[e._v(e._s(e.source))])],1),a("div",{staticClass:"col-md-6"},[a("h4",[e._v("Output")]),e._t("default",[a(e.component,{tag:"component"})])],2)])},h=[],b=a("8d51"),g=a.n(b),_={components:{Prism:g.a},props:{source:String,title:String,description:String,component:Object}},v=_,P=(a("31bc"),Object(l["a"])(v,f,h,!1,null,null,null));P.options.__file="ExampleWithSource.vue";var y=P.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records}},[a("td",{attrs:{name:"first_name"}}),a("td",{attrs:{name:"last_name"}}),a("td",{attrs:{name:"login",field:"email"}})])},w=[],C=a("171d"),O={data:function(){return{records:C.slice(0,10)}}},j=O,k=Object(l["a"])(j,x,w,!1,null,null,null);k.options.__file="BasicExample.vue";var F=k.exports,$=a("ce69"),E=a.n($),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.record;return[a("td",{attrs:{name:"name"}},[e._v("\n      "+e._s(n.first_name)+"\n      "+e._s(n.last_name)+"\n    ")]),a("td",{attrs:{name:"printed_name",content:n.last_name+", \n                 "+n.first_name}}),a("td",{attrs:{name:"email"}})]}}])})},S=[],R={data:function(){return{records:C.slice(0,10)}}},D=R,L=Object(l["a"])(D,T,S,!1,null,null,null);L.options.__file="CustomColumnExample.vue";var M=L.exports,A=a("ab90"),N=a.n(A),W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableFor",{staticClass:"table table-hover\n         table-striped table-bordered",attrs:{records:e.records,formatter:e.$options.filters.upper},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.record;return[a("td",{attrs:{name:"first_name",formatter:e.$options.filters.lower}}),a("td",{attrs:{name:"last_name"}}),a("td",{attrs:{name:"unformatted"}},[e._v("Not Formatted")]),a("td",{attrs:{name:"full_name",content:n.first_name+"\n                 "+n.last_name}}),a("td",{attrs:{name:"email",formatter:e.formatEmail}})]}}])})},H=[],I={data:function(){return{records:C.slice(0,10)}},methods:{formatEmail:function(e){return"<a href='mailto:".concat(e,"'>").concat(e,"</a>")}},filters:{upper:function(e){return e.toUpperCase()},lower:function(e){return e.toLowerCase()}}},V=I,G=Object(l["a"])(V,W,H,!1,null,null,null);G.options.__file="FormattersExample.vue";var U=G.exports,J=a("b5a8"),q=a.n(J),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.record;return[a("td",{attrs:{name:"id",header:!1}},[a("a",{attrs:{href:"/records/"+n.id},on:{click:e.linkClicked}},[a("i",{staticClass:"fa fa-edit"})])]),a("td",{attrs:{name:"email",header:"Login"}}),a("td",{attrs:{name:"first_name"}})]}}])},[e._v(">\n  "),a("th",{staticStyle:{color:"red"},attrs:{slot:"first_name"},slot:"first_name"},[a("i",{staticClass:"fa fa-users"})])])},K=[],z={data:function(){return{records:C.slice(0,10)}},methods:{linkClicked:function(e){e.preventDefault(),alert("Link Clicked")}}},Y=z,Q=Object(l["a"])(Y,B,K,!1,null,null,null);Q.options.__file="CustomHeaderExample.vue";var X=Q.exports,Z=a("744c"),ee=a.n(Z),te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records},scopedSlots:e._u([{key:"footer",fn:function(t){var n=t.columns;return a("tfoot",{},[a("tr",[a("td",{attrs:{colspan:n.length}},[e._v("Custom Footer")])])])}}])},[a("td",{attrs:{name:"first_name"}}),a("td",{attrs:{name:"last_name"}}),a("td",{attrs:{name:"email"}})])},ae=[],ne={data:function(){return{records:C.slice(0,10)}}},re=ne,oe=Object(l["a"])(re,te,ae,!1,null,null,null);oe.options.__file="CustomFooterExample.vue";var se=oe.exports,ie=a("a18f"),le=a.n(ie),ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LocalPaginatedTableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records}},[a("td",{attrs:{name:"first_name"}}),a("td",{attrs:{name:"last_name"}}),a("td",{attrs:{name:"email"}})])},de=[],ue={data:function(){return{records:C}}},me=ue,pe=Object(l["a"])(me,ce,de,!1,null,null,null);pe.options.__file="LocalPaginatedExample.vue";var fe=pe.exports,he=a("2bec"),be=a.n(he),ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PaginatedTableFor",{staticClass:"table table-hover \n    table-striped table-bordered",attrs:{records:e.records,"current-page":e.currentPage,"total-pages":e.totalPages},on:{"update:currentPage":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.record;return[a("td",{attrs:{name:"first_name"}}),a("td",{attrs:{name:"last_name"}}),a("td",{attrs:{name:"image"}},[a("img",{attrs:{src:t.avatar,alt:"Avatar"}})])]}}])})},_e=[],ve=a("bc3a"),Pe=a.n(ve),ye={data:function(){return{currentPage:1,perPage:4,totalPages:0,records:[]}},watch:{currentPage:function(){this.records=[],this.fetchRecords()}},methods:{fetchRecords:function(){var e=this;Pe.a.get("https://reqres.in/api/users",{params:{page:this.currentPage,per_page:this.perPage}}).then(function(t){var a=t.data;e.totalPages=a.total_pages,e.records=a.data})}},mounted:function(){this.fetchRecords()}},xe=ye,we=Object(l["a"])(xe,ge,_e,!1,null,null,null);we.options.__file="RemotePaginatedExample.vue";var Ce=we.exports,Oe=a("48c6"),je=a.n(Oe),ke={"Configuring Columns":[{source:E.a,title:"Using record fields as column names",component:F,description:"In this example, the TableFor component is passed an array of records, and\n          tells the table to output columns for corresponding to fields on each\n          record. When the column names match the names of fields in the record, no further\n          configuration is need and the component will output the value of each record field\n          specified. If a record field name does not match, it may be specified using the 'field'\n          option."},{source:N.a,title:"Using a custom column definition or field",component:M,description:"When a column definition is provided that needs access to each record\n          being output, the columns should be surrounded with a scoped slot template. The \n          scoped slot may take a series of parameters, either as a single object with properties,\n          or as a destructured set of fields."},{source:q.a,title:"Formatting and specifying column content",component:U,description:"A formatter for data columns may be specified on the entire table\n          or on a column by column basis. If a formatter is specified on an individual\n          column, it takes precedence over the one specified for the entire table.\n          Formatters will have no effect on custom column definitions."}],"Configuring Headers":[{source:ee.a,title:"Custom Header Example",component:X}],"Configuring Rows":[],"Configuring Footer":[{source:le.a,title:"Custom Footer Example",component:se}],"Paginating Data":[{source:be.a,title:"Local Data Pagination Example",component:fe},{source:je.a,title:"Remote Data Pagination Example",component:Ce}]},Fe={components:{ExampleWithSource:y},data:function(){return{examples:ke}}},$e=Fe,Ee=Object(l["a"])($e,m,p,!1,null,null,null);Ee.options.__file="index.vue";var Te=Ee.exports,Se=(a("e4cb"),{name:"app",components:{Doc:u,Examples:Te}}),Re=Se,De=(a("df97"),Object(l["a"])(Re,r,o,!1,null,null,null));De.options.__file="App.vue";var Le=De.exports,Me=a("ade3"),Ae=a("2909"),Ne=a("53ca"),We=(a("ac6a"),a("456d"),a("be94")),He=(a("7f7f"),a("991b")),Ie=a.n(He),Ve={props:{record:{default:function(){return{}}},name:{type:String,required:!0},field:{type:String,default:function(){return this.name}},content:{},formatter:{type:Function}},computed:{formattedContent:function(){var e=this.content;return"undefined"===typeof e&&this.record.hasOwnProperty(this.field)&&(e=this.record[this.field]),this.formatter&&"undefined"!==typeof e&&(e=this.formatter(e,{column:this,record:this.record})),e}},render:function(e){var t,a=this.$slots.default,n=this.formattedContent;return t=a?e("td",{},a):"object"===Object(Ne["a"])(n)&&n.hasOwnProperty("tag")?e("td",{},[n]):e("td",{domProps:{innerHTML:n}}),t}},Ge=a("e740"),Ue=a.n(Ge),Je={props:{name:{type:String,required:!0},content:{default:function(){return Ue()(this.name)}},formatter:{type:Function}},computed:{formattedContent:function(){var e=this.content;return"boolean"!==typeof e||e?this.formatter&&"undefined"!==typeof e&&(e=this.formatter(e,{column:this})):e=null,e}},render:function(e){var t=this.$slots.default||[this.formattedContent];return e("th",{},t)}},qe=a("58dc"),Be=a("3eea"),Ke=a.n(Be),ze=a("2593"),Ye=a.n(ze),Qe={components:{TableDataColumn:Ve,TableHeaderColumn:Je},props:{records:{type:Array,required:!0},recordVariable:{type:String,default:"record"},formatter:{type:Function},header:{default:function(){return{}}},row:{default:function(){return{}}}},methods:{renderFirstSlotOrChildrenWithHooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.tag,a=e.children,n=void 0===a?[]:a,r=e.data,o=void 0===r?{}:r,s=e.slotName,i=void 0===s?null:s,l=null;if(i&&(l=this.$slots[i]),l){var c=l[0];return this.$createElement(c.tag,Object(qe["a"])(o,c.data),c.children)}return this.$createElement(t,o,n)},createHeaderColumn:function(e){if("td"===e.tag){var t=e.data.attrs.name,a=this.header;"function"===typeof this.header&&(a=this.header(e));var n={props:Object(We["a"])({name:t},Ye()(a,Object.keys(Je.props))),attrs:Ke()(a,Object.keys(Je.props))};return e.data.attrs.hasOwnProperty("header")&&(a=e.data.attrs.header,"object"===Object(Ne["a"])(a)?n=qe["a"].all([n,{props:Ye()(a,Object.keys(Je.props))},{attrs:Ke()(a,Object.keys(Je.props))}]):n.props.content=a),this.renderFirstSlotOrChildrenWithHooks({slotName:t,tag:Je,data:n})}},createDataColumn:function(e,t){if("td"===e.tag){var a=qe["a"].all([Ke()(e.data,"attrs"),{attrs:Ke.a.apply(void 0,[e.data.attrs].concat(Object(Ae["a"])(Object.keys(Ve.props)),Object(Ae["a"])(Object.keys(Je.props))))},{props:Object(We["a"])({},Ye.a.apply(void 0,[this.$props].concat(Object(Ae["a"])(Object.keys(Ve.props)))),Ye.a.apply(void 0,[e.data.attrs].concat(Object(Ae["a"])(Object.keys(Ve.props)))),{record:t})}]);return this.$createElement(Ve,a,e.children)}},createDataRow:function(e,t){var a,n=this,r=e.map(function(e){return n.createDataColumn(e,t)});return a="function"===typeof this.row?{attrs:this.row(t)}:{attrs:this.row},this.$createElement("tr",a,r)}},render:function(e){var t,a,n,r,o=this,s=arguments[0],i=this.$scopedSlots.default;if(i){var l,c=new Proxy({},{get:function(){return""}});t=Ie()(i((l={},Object(Me["a"])(l,this.recordVariable,c),Object(Me["a"])(l,"table",this),l))),a=t.map(this.createHeaderColumn),n=this.$props.records.map(function(e){var a;return t=Ie()(i((a={},Object(Me["a"])(a,o.recordVariable,e),Object(Me["a"])(a,"table",o),a))),o.createDataRow(t,e)})}else t=this.$slots.default,a=t.map(this.createHeaderColumn),n=this.$props.records.map(function(e){return o.createDataRow(t,e)});var d=s("thead",[s("tr",[a])]),u=s("tbody",[n]);return this.$scopedSlots.footer?r=this.$scopedSlots.footer({columns:a,table:this}):this.$slots.footer&&(r=this.$slots.footer),e("table",this.$attrs,[d,u,r])}},Xe=(a("8615"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation",align:"right"}},[a("ul",{staticClass:"pagination"},[a("li",{class:{disabled:1===e.currentPage}},[a("a",{attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),e.setPage(e.currentPage-1,t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._l(e.windowedPageNumbers(),function(t){return a("li",{key:"page-"+t,class:{active:t===e.currentPage}},["gap"===t?a("span",{staticClass:"gap"},[e._v("…")]):a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.setPage(t,a)}}},[e._v(e._s(t))])])}),a("li",{class:{disabled:e.currentPage===e.totalPages}},[a("a",{attrs:{href:"#","aria-label":"Next"},on:{click:function(t){t.preventDefault(),e.setPage(e.currentPage+1,t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])],2)])}),Ze=[],et=(a("c5f6"),a("5a3a")),tt=a.n(et),at={props:{paginationInnerWindow:{type:Number,default:4},paginationOuterWindow:{type:Number,default:1},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{setPage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e>0&&e<=this.totalPages&&this.$emit("update:currentPage",e),t&&t.target.blur()},windowedPageNumbers:function(){if(0===this.totalPages)return[];var e,t,a,n=this.currentPage-this.paginationInnerWindow,r=this.currentPage+this.paginationInnerWindow;return r>this.totalPages&&(n-=r-this.totalPages,r=this.totalPages),n<1&&(r+=1-n,n=1,r>this.totalPages&&(r=this.totalPages)),e=tt()(n,r+1),this.paginationOuterWindow+3<e[0]?(t=tt()(1,this.paginationOuterWindow+2),t.push("gap")):t=tt()(1,e[0]),this.totalPages-this.paginationOuterWindow-2>e[e.length-1]?(a=tt()(this.totalPages-this.paginationOuterWindow,this.totalPages+1),a.unshift("gap")):a=tt()(e[e.length-1]+1,this.totalPages+1),t.concat(e).concat(a)}}},nt=at,rt=Object(l["a"])(nt,Xe,Ze,!1,null,null,null);rt.options.__file="PaginationLinks.vue";var ot=rt.exports,st=a("4d8c"),it=a.n(st),lt={components:{TableFor:Qe,PaginationLinks:ot},props:Object(We["a"])({},Qe.props,ot.props),methods:{handleUpdatePage:function(e){this.$emit("update:currentPage",e)}},render:function(e){var t=this,a=function(e,t){return it()(Object.values(e)).map(function(e){return t(e.tag,e.data,e.children)})},n=null,r=this.$scopedSlots;return r.footer||this.$slots.footer||(n=function(a){return e("tfoot",[e("tr",[e("td",{attrs:{colspan:a.columns.length}},[e(ot,{props:t.$props,on:{"update:currentPage":t.handleUpdatePage}})])])])}),e(Qe,{scopedSlots:Object(We["a"])({footer:n},r),props:this.$props,attrs:this.$attrs},a(this.$slots,e))}},ct={components:{PaginatedTableFor:lt},props:Object(We["a"])({},Ke()(lt.props,["currentPage","totalPages"]),{perPage:{type:Number,default:10}}),computed:{totalPages:function(){return Math.ceil(this.records.length/this.perPage)},currentPageRecords:function(){var e=(this.currentPage-1)*this.perPage;return this.records.slice(e,e+this.perPage)}},data:function(){return{currentPage:1}},methods:{handleUpdatePage:function(e){this.currentPage=e}},render:function(e){var t=function(e,t){return it()(Object.values(e)).map(function(e){return t(e.tag,e.data,e.children)})};return e(lt,{scopedSlots:this.$scopedSlots,props:Object(We["a"])({},this.$props,{records:this.currentPageRecords,currentPage:this.currentPage,totalPages:this.totalPages}),attrs:this.$attrs,on:{"update:currentPage":this.handleUpdatePage}},Object(Ae["a"])(t(this.$slots,e)))}},dt={install:function(e){e.component("TableFor",Qe),e.component("PaginatedTableFor",lt),e.component("LocalPaginatedTableFor",ct)}};a("c197"),a("84bf");n["a"].use(dt),window.vm=new n["a"]({render:function(e){return e(Le)}}).$mount("#app")},ce69:function(e,t){e.exports='<template>\n  <TableFor\n    class="table table-hover \n      table-striped table-bordered"\n    :records="records">\n    <td name="first_name"></td>\n    <td name="last_name"></td>\n    <td name="login" field="email"></td>\n  </TableFor>\n</template>\n\n<script>\nimport samplePeopleRecords from \'../../people.json\'\n\nexport default {\n  data() {\n    return {\n      records: samplePeopleRecords.slice(0, 10)\n    }\n  }\n}\n<\/script>\n'},df97:function(e,t,a){"use strict";var n=a("3194"),r=a.n(n);r.a}});
//# sourceMappingURL=index.27bc4bb6.js.map