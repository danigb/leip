// Functional JS

const id = (o) => o
const keys = Object.keys
const concat = (xs, y) => xs.concat(y)
const reduce = (reducer, acc, xs) => xs.reduce(reducer, acc)

const _uniq = (arr) => arr.sort().filter((x, i, arr) => !i || arr[i - 1] !== x)
const merge = (...arrs) => _uniq(reduce((dest, a) => concat(dest, a), [], arrs))

const toBe = (value) => () => value

const prop = (name, fn = id) => (obj) => fn(obj[name])

const isEven = (val) => val % 2 === 0

const updateWith = (update, src) => merge(keys(src), keys(update)).reduce((dest, key) => {
  dest[key] = (update[key] || id)(src[key])
  return dest
}, {})

module.exports = { id, keys, reduce, merge, toBe, prop, isEven, updateWith }
