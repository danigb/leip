/* global describe test expect */
var l = require('..')

describe('helpers', () => {
  test('toBe', () => {
    expect(l.toBe('something')()).toBe('something')
  })
  test('inc/dec', () => {
    expect(l.inc(1)).toBe(2)
    expect(l.dec(2)).toBe(1)
  })
  test('isEven', () => {
    expect(l.isEven(2)).toBe(true)
    expect(l.isEven(5)).toBe(false)
  })
  test('prop', () => {
    expect(l.prop('age', l.isEven)({ age: 10 })).toEqual(true)
  })
  test('hasKey', () => {
    expect(l.hasKey('age')({ age: 0 })).toEqual(true)
    expect(l.hasKey('name')({ age: 0 })).toEqual(false)
  })
  test('updateKey', () => {
    var x = { value: 1 }
    expect(l.updateKey('value', l.inc)(x)).toEqual({ value: 2 })
  })
  test('updateKeys', () => {
    var x = { name: 'leipzig' }
    expect(l.updateKeys({ name: n => n.toUpperCase() })(x))
    .toEqual({ 'name': 'LEIPZIG' })

    expect(l.updateKeys({ inst: l.toBe('bass') })({ note: 'C4' }))
    .toEqual({ note: 'C4', inst: 'bass' })
  })
  test('merge', () => {
    expect(l.merge([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4])
  })
  test('range', () => {
    expect(l.range(5)).toEqual([0, 1, 2, 3, 4])
    expect(l.range(2, 5)).toEqual([2, 3, 4])
    expect(l.range(0, 5, 2)).toEqual([0, 2])
    expect(l.range(0, 2, 0.5)).toEqual([0, 0.5, 1, 1.5])
  })
  test('cmap', () => {
    expect(l.cmap(l.inc)(l.range(8))).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(l.cmap((a) => a + 'a', (b) => b + 'b', (c) => c + 'c')(['1', '2', '3']))
    .toEqual(['1cba', '2cba', '3cba'])
  })
  test('compose functions', () => {
  })
})
