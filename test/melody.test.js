/* global describe test expect */
var l = require('..')

describe('melody', () => {
  test('bpm', () => {
    expect(l.bpm(120)(1)).toBe(0.5)
    // expect(l.where([{ time: 1 }], { time: l.bpm(120) })).toEqual()
  })

  test('wherever applies a function to selected notes', () => {
    var events = [{ time: 0, duration: 0 }, { time: 1, duration: 3 }]
    expect(l.wherever(l.prop('time', l.isEven), { part: l.toBe('bass') }, events))
    .toEqual([{ time: 0, duration: 0, part: 'bass' }, { time: 1, duration: 3 }])
  })
})
