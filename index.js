const isUniquePrefix = (items, prefix) => {
  return !items.some(item => item.startsWith(prefix))
}

const buildPrefix = (item, items) => {
  let prefix = ''
  for (const char of item) {
    prefix += char
    if (isUniquePrefix(items, prefix)) {
      break
    }
  }
  return prefix
}
/**
 * @param {string[]} Items // array of items
 * @return {string[]} array of shortened items
 */
const uniquePrefixes = (items, { alias } = {}) => {
  const output = alias ? {} : []
  for (const item of items) {
    // an array that excludes the present item
    const itemsWithoutItem = items.filter(element => element !== item)
    const validPrefix = buildPrefix(item, itemsWithoutItem)

    if (validPrefix) {
      if (alias) {
        output[validPrefix] = item
      } else {
        output.push(validPrefix)
      }
    }
  }
  return output
}

module.exports = uniquePrefixes
