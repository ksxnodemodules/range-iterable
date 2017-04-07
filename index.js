
((module) => {
  'use strict'
  const {XIterable, Root} = require('x-iterable-base')
  const {iterator} = Symbol

  const createYielder = (base, callback) => {
    const iterable = base.map(callback)
    return {
      [iterator]: () => iterable[iterator](),
      __proto__: base
    }
  }

  class RangeIterable extends XIterable(Root) {
    constructor (begin, end) {
      super()

      begin >>= 0
      end >>= 0

      return begin <= end && {

        * [iterator] () {
          for (let i = begin; i !== end; ++i) {
            yield i
          }
        },

        reverse () {
          const endMinusOne = end - 1
          return createYielder(this, value => endMinusOne - value)
        },

        __proto__: this

      }
    }

    * [iterator] () {}

    shift (delta) {
      return createYielder(this, value => value + delta)
    }

    multiply (factor) {
      return createYielder(this, value => value * factor)
    }

    static range (...args) {
      switch (args.length) {
        case 1:
          return new Range(0, args[0])
        case 2:
          return new Range(...args)
      }
      throw new RangeError('Number of provided arguments must be 1 or 2')
    }
	}

  class Range extends RangeIterable {}
  module.exports = Range
})(module)
