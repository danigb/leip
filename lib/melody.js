var { updateWith } = require('./helpers')

const bpm = (beats) => (beat) => 60 * beat / beats

const wherever = (cond, fn, events) => events.map(e => cond(e) ? updateWith(fn, e) : e)

const where = () => null

module.exports = { bpm, where, wherever }
