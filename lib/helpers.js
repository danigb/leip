/* eslint-disable object-property-newline */
// Poor's man functional JS

// private: it mutates the object
const _setKey = (k, v, o) => { o[k] = v; return o }
const _isDef = (x) => typeof x !== 'undefined'
// compose functions from right to left
const _comp = (fns) => fns.length === 1 ? fns[0]
  : fns.length === 2 ? (v) => fns[0](fns[1](v))
  : fns.reduce((a, b) => (...args) => a(b(...args)))

const int = Math.floor
const log = (name, value) => { console.log(name, value); return value }
const cmap = (...fns) => (xs) => xs.map(_comp(fns))

/**
 * Create an array range
 * http://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-an-array-based-on-suppl
 *
 * @param {Integer} begin
 * @param {Integer} end
 * @param {Number} step
 * @return {Array}
 */
const range = (b, e, s = 1) => !_isDef(e) ? range(0, b) : Array.from(
  new Array(int((e - b) / s)),
  (_, i) => b < e ? b + i * s : b - i * s
)

const id = (o) => o
const inc = (i) => i + 1
const dec = (i) => i - 1
const assign = Object.assign
const keys = Object.keys
const hasKey = (k) => (o) => _isDef(o[k])

const setKey = (k, v) => (o) => _setKey(k, v, assign({}, o))
const concat = (xs, y) => xs.concat(y)
const reduce = (reducer, acc, xs) => xs.reduce(reducer, acc)

const _uniq = (arr) => arr.sort().filter((x, i, arr) => !i || arr[i - 1] !== x)
const merge = (...arrs) => _uniq(reduce((dest, a) => concat(dest, a), [], arrs))

const toBe = (value) => () => value

const prop = (name, fn = id) => (obj) => fn(obj[name])

const isEven = (val) => val % 2 === 0

const updateKey = (k, fn) => (o) => setKey(k, fn(o[k]))(o)

const updateKeys = (updaters) => (src) => merge(keys(src), keys(updaters)).reduce((dest, key) => {
  dest[key] = (updaters[key] || id)(src[key])
  return dest
}, {})

module.exports = {
  log, cmap,
  id, inc, dec, keys, hasKey, reduce, merge,
  toBe, prop, isEven, updateKeys, updateKey, range
}
