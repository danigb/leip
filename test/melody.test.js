/* global describe it test expect */
var l = require('..')

describe('melody', () => {
  test('bpm', () => {
    expect(l.bpm(120)(1)).toBe(0.5)
    // expect(l.where([{ time: 1 }], { time: l.bpm(120) })).toEqual()
  })

  test('wherever', () => {
    it('applies a function to selected events', () => {
      var events = [{ time: 0, duration: 0 }, { time: 1, duration: 3 }]
      expect(l.wherever(l.prop('time', l.isEven), l.updateKeys({ part: l.toBe('bass') }))(events))
      .toEqual([{ time: 0, duration: 0, part: 'bass' }, { time: 1, duration: 3 }])
    })
  })

  test('where applies a function to all notes with the specified key', () => {
    var events = [
      {time: 0, duration: 0, volume: 2},
      {time: 1, duration: 3, volume: 3},
      {time: 2, duration: 2}
    ]
    expect(l.where('volume', l.inc)(events)).toEqual([
      {time: 0, duration: 0, volume: 3},
      {time: 1, duration: 3, volume: 4},
      {time: 2, duration: 2}
    ])
  })

  describe('phrase', () => {
    it('translates durations', () => {
      expect(l.phrase([1, 2, 1])).toEqual([
        { time: 0, duration: 1 },
        { time: 1, duration: 2 },
        { time: 3, duration: 1 }
      ])
    })
    it('translates durations and pitches', () => {
      expect(l.phrase([1, 2, 1], ['a', 'b', 'c'])).toEqual([
        { time: 0, duration: 1, pitch: 'a' },
        { time: 1, duration: 2, pitch: 'b' },
        { time: 3, duration: 1, pitch: 'c' }
      ])
    })
    it('translates durations, pitches and velocities', () => {
      expect(l.phrase([1, 2, 1], ['a', 'b', 'c'], [0.5, 0.6, 0.7])).toEqual([
        { time: 0, duration: 1, pitch: 'a', velocity: 0.5 },
        { time: 1, duration: 2, pitch: 'b', velocity: 0.6 },
        { time: 3, duration: 1, pitch: 'c', velocity: 0.7 }
      ])
    })
  })

  describe('all', () => {
  })

  test.skip('rhythm takes sequential durations and produces a rhythm', () => {
    expect(l.rhythm([1, 2])).toEqual([
      { time: 0, duration: 1 },
      { time: 1, duration: 2 },
      { time: 3, duration: 1 }
    ])
  })
})
