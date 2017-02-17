var { updateKey, hasKey } = require('./helpers')

// empty array
const _EA = []

const bpm = (beats) => (beat) => 60 * beat / beats

/**
 * Applies fn key of each note wherever condition returns true.
 * @function
 * @param {Function} condition
 * @param {Function} fn
 */
const wherever = (cond, fn) => (xs) => xs.map(e => cond(e) ? fn(e) : e)

/**
 * Applies fn to the k key of each note in notes, ignoring missing keys.
 * @function
 */
const where = (k, fn) => wherever(hasKey(k), updateKey(k, fn))

/**
  "Sets a constant value for each note of a melody.
  e.g. (->> notes (all :part :drum))"
  [k v notes]
  (wherever (is true), k (is v) notes))
 */
const all = (k, fn) => wherever(() => true, updateKey(k, fn))

const _setIfDef = (k, v, o) => { if (typeof v !== 'undefined') o[k] = v }
const phrase = (ds = _EA, ps = _EA, vs = _EA) => {
  const plen = ps.length
  const vlen = vs.length
  var time = 0
  return ds.map((duration, i) => {
    var event = { time }
    _setIfDef('duration', duration, event)
    _setIfDef('pitch', ps[i % plen], event)
    _setIfDef('velocity', vs[i % vlen], event)
    time += duration
    return event
  })
}

module.exports = { bpm, where, wherever, all, phrase }
