/* global describe test expect */
var l = require('..')

describe('scale', () => {
  test('from', () => {
    expect(l.from(60)(6)).toBe(66)
  })

  test('notes', () => {
    expect([l.C, l.D, l.E, l.F, l.G, l.A, l.B].map(n => n()))
    .toEqual([60, 62, 64, 65, 67, 69, 71])
  })

  test('scales', () => {
    expect(l.cmap(l.C, l.major)(l.range(8)))
    .toEqual([60, 62, 64, 65, 67, 69, 71, 72])
    // expect(l.cmap(l.low, l.B, l.lydian)(l.range(0, 8)))
    // .toEqual([59, 61, 63, 64, 66, 68, 70, 71])
  })

  test('sharp/flat', () => {
  })
})
