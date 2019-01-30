// Created / adapted custom implementations of methods available from lodash and deepmerge as they were adding nearly
//  180kb to the generated lib files
// Other HelperUtils will be imported from the vue-slot-hooks plugin

// Adapted from https://stackoverflow.com/a/41246860/400699
export function range(start, end) {
  return Array.apply(null, Array(end - start)).map((k, index) => index + start)
}

// Based partially on https://github.com/sindresorhus/titleize
export function startCase(string) {
  if (string) {
    return string
      .replace(/[_-]/g, ' ')
      .toLowerCase()
      .replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
  }
}
