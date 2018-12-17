// Created / adapted custom implementations of methods available from lodash and deepmerge as they were adding nearly
//  180kb to the generated lib files

// Solution found here: https://stackoverflow.com/a/37616104/400699
export function filterObject(object, predicate) {
  return Object.keys(object)
    .filter(key => predicate(key, object[key]))
    .reduce((result, key) => ((result[key] = object[key]), result), {})
}

export function omit(object, keys) {
  return filterObject(object, key => keys.indexOf(key) === -1)
}

export function pick(object, keys) {
  return filterObject(object, key => keys.indexOf(key) !== -1)
}

// Adapted from https://youmightnotneed.com/lodash/
export function flatten(array) {
  return array.reduce((a, b) => a.concat(b), [])
}

// Adapted from https://youmightnotneed.com/lodash/
export function flattenDeep(array) {
  return Array.isArray(array)
    ? array.reduce((a, b) => flattenDeep(a).concat(flattenDeep(b)), [])
    : [array]
}

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

export function deepMergeAll(objects) {
  let merged = objects[0]
  for (var i = 1; i < objects.length; i++) {
    merged = deepMerge(merged, objects[i])
  }
  return merged
}

export function deepMerge(object1, object2) {
  let merged = { ...object1 }
  Object.entries(object2).forEach(([field, object2Value]) => {
    if (object1.hasOwnProperty(field)) {
      let object1Value = object1[field]
      if (
        object1Value !== null &&
        object2Value !== null &&
        typeof object1Value === 'object' &&
        typeof object2Value === 'object'
      ) {
        merged[field] = deepMerge(object1Value, object2Value)
      } else {
        merged[field] = object2Value
      }
    } else {
      merged[field] = object2Value
    }
  })

  return merged
}
