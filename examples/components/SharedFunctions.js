export function upper(v) {
  return v.toString().toUpperCase()
}

export function lower(v) {
  return v.toString().toLowerCase()
}

export function email(value) {
  return this.$createElement('a', { attrs: { href: `mailto:${value}` } }, value)
}

export function setCurrentPage(currentPage) {
  this.currentPage = currentPage
}

export function totalPages() {
  return Math.ceil(this.records.length / this.perPage)
}

export function currentPageRecords() {
  let recordOffset = (this.currentPage - 1) * this.perPage
  return this.records.slice(recordOffset, recordOffset + this.perPage)
}

export function linkClicked(record) {
  event.preventDefault()
  alert(`You clicked record ${record.id}`)
}
