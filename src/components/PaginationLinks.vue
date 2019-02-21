<template>
  <nav aria-label="Page navigation" align="right">
    <ul class="pagination">
      <li :class="{ disabled: currentPage === 1 }">
        <a
          href="#"
          aria-label="Previous"
          @click.prevent="setPage(currentPage - 1, $event)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="i in windowedPageNumbers()"
        :class="{ active: i === currentPage }"
        :key="`page-${i}`"
      >
        <span v-if="i === 'gap1' || i === 'gap2'" class="gap">…</span>
        <a v-else href="#" @click.prevent="setPage(i, $event)">{{ i }}</a>
      </li>
      <li :class="{ disabled: currentPage === totalPages }">
        <a
          href="#"
          aria-label="Next"
          @click.prevent="setPage(currentPage + 1, $event)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { range } from '../utils/HelperUtils'

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
    setPage(i, event = null) {
      if (i > 0 && i <= this.totalPages) {
        this.$emit('update:currentPage', i)
      }
      if (event) {
        event.target.blur()
      }
    },
    // Adapted with love from will_paginate gem:
    //  https://github.com/mislav/will_paginate/blob/master/lib/will_paginate/view_helpers/link_renderer_base.rb#L28
    windowedPageNumbers() {
      if (this.totalPages === 0) {
        return []
      }

      let windowFrom = this.currentPage - this.paginationInnerWindow
      let windowTo = this.currentPage + this.paginationInnerWindow
      let middle, left, right

      if (windowTo > this.totalPages) {
        windowFrom -= windowTo - this.totalPages
        windowTo = this.totalPages
      }

      if (windowFrom < 1) {
        windowTo += 1 - windowFrom
        windowFrom = 1

        if (windowTo > this.totalPages) windowTo = this.totalPages
      }

      // these are always visible
      middle = range(windowFrom, windowTo + 1)

      // left window
      if (this.paginationOuterWindow + 3 < middle[0]) {
        // there's a pagination gap
        left = range(1, this.paginationOuterWindow + 2)
        left.push('gap1')
      } else {
        // runs into visible pages
        left = range(1, middle[0])
      }
      // right window
      if (
        this.totalPages - this.paginationOuterWindow - 2 >
        middle[middle.length - 1]
      ) {
        // again, gap
        right = range(
          this.totalPages - this.paginationOuterWindow,
          this.totalPages + 1
        )
        right.unshift('gap2')
      } else {
        // runs into visible pages
        right = range(middle[middle.length - 1] + 1, this.totalPages + 1)
      }

      return left.concat(middle).concat(right)
    }
  }
}
</script>
