/* eslint-disable object-property-newline */
var { reduce, range } = require('./helpers')

const from = (base) => (p = 0) => base + p

const scaleOf = (intervals, degree) => _scaleOfNatural(intervals, intervals.length, degree)

// private
const _scaleOfNatural = (intervals, len, degree) => reduce(
  (a, i) => { a += intervals[i % len]; return a },
  0, range(degree))

const scale = (intervals) => (degrees) => scaleOf(intervals, degrees)

/**
 * Seven-tone scale, commonly used in Western music.
 */
const major = scale([2, 2, 1, 2, 2, 2, 1])
/*
 * Six-tone scale, used for blues music.
 */
const blues = scale([3, 2, 1, 1, 3, 2])
/**
 * Five-tone scale, common to East Asian music.
 */
const pentatonic = scale([3, 2, 2, 3, 2])
/**
 * Scale consisting of all twelve tones.
 */
const chromatic = scale([1])

const C = from(60)
const D = from(62)
const E = from(64)
const F = from(65)
const G = from(67)
const A = from(69)
const B = from(71)

module.exports = {
  from,
  A, B, C, D, E, F, G,
  major, blues, pentatonic, chromatic
}
