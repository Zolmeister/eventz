require('./eventz')

describe('Events', function () {
  it('works', function (done) {
    Events.on('test', function (d) {
      console.assert(d === 'd')
      done()
    })
    Events.emit('test', 'd')
  })
  it('offs', function () {
    Events.on('no', function () {
      throw new Error('nope')
    })
    Events.off('no')
    Events.emit('no')
  })

  it('offs fns', function () {
    var f = function () {
      throw new Error('nope')
    }
    var cnt = 0
    var y = function () {
      cnt++
    }
    Events.on('no', f)
    Events.on('no', y)
    Events.off('no', f)
    Events.emit('no')
    console.assert(cnt===1)
  })
})
