// Created / adapted custom implementations of methods available from lodash and deepmerge as they were adding nearly
//  180kb to the generated lib files
// Other HelperUtils will be imported from the vue-slot-hooks plugin

// Adapted from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
export function range(start, end) {
  return [...Array(end - start).keys()].map(k => k + start)
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
