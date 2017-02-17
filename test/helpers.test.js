/* global describe test expect */
var l = require('..')

describe('helpers', () => {
  test('toBe', () => {
    expect(l.toBe('something')()).toBe('something')
  })
  test('isEven', () => {
    expect(l.isEven(2)).toBe(true)
    expect(l.isEven(5)).toBe(false)
  })
  test('prop', () => {
    expect(l.prop('age', l.isEven)({ age: 10 })).toEqual(true)
  })
  test('updateWith', () => {
    expect(l.updateWith({ name: n => n.toUpperCase() }, { name: 'leipzig' }))
    .toEqual({ 'name': 'LEIPZIG' })
    expect(l.updateWith({ inst: l.toBe('bass') }, { note: 'C4' }))
    .toEqual({ note: 'C4', inst: 'bass' })
  })
  test('merge', () => {
    expect(l.merge([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4])
  })
})
