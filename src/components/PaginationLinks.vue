<template>
  <nav aria-label="Page navigation" align="right">
    <ul class="pagination">
      <li :class="{ disabled: currentPage === 1 }">
        <a href="#" aria-label="Previous" @click.prevent="setPage(currentPage - 1, $event)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in windowedPageNumbers()" :class="{ active: i == currentPage}">
        <span v-if="i === 'gap'" class="gap">…</span>
        <a v-else href="#" @click.prevent="setPage(i, $event)">{{i}}</a>
      </li>
      <li :class="{ disabled: currentPage === totalPages }">
        <a href="#" aria-label="Next" @click.prevent="setPage(currentPage + 1, $event)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { range } from 'lodash'

export default {
  props: {
    paginationInnerWindow: {
      type: Number,
      default: 4
    },
    paginationOuterWindow: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    setPage (i, event = null) {
      if (i > 0 && i <= this.totalPages) {
        this.$emit('update:currentPage', i)
      }
      if (event) {
        event.target.blur()
      }
    },
    // Adapted with love from will_paginate gem:
    //  https://github.com/mislav/will_paginate/blob/master/lib/will_paginate/view_helpers/link_renderer_base.rb#L28
    windowedPageNumbers () {
      let windowFrom = this.currentPage - this.paginationInnerWindow
      let windowTo = this.currentPage + this.paginationInnerWindow

      if (windowTo > this.totalPages) {
        windowFrom -= windowTo - this.totalPages
        windowTo = this.totalPages
      }
      if (windowFrom < 1) {
        windowTo += 1 - windowFrom
        windowFrom = 1
        if (windowTo > this.totalPages)
          windowTo = this.totalPages
      }

      // these are always visible
      let middle = range(windowFrom, windowTo + 1)

      // left window
      if (this.paginationOuterWindow + 3 < middle[0]) { // there's a gap
        var left = range(1, (this.paginationOuterWindow + 2))
        left.push("gap")
      }
      else { // runs into visible pages
        var left = range(1, middle[0])
      }
      // right window
      if (this.totalPages - this.paginationOuterWindow - 2 > middle[middle.length - 1]) { // again, gap
        var right = range((this.totalPages - this.paginationOuterWindow), this.totalPages + 1)
        right.unshift("gap")
      }
      else { // runs into visible pages
        var right = range(middle[middle.length - 1] + 1, this.totalPages + 1)
      }

      return left.concat(middle).concat(right)
    }
  }
}
</script>
