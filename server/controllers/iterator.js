function symbolIterator () {
  let fib = {
    [Symbol.iterator] () {
      let n1 = 1
      let n2 = 2
      return {
        [Symbol.iterator] () {
          return this
        },
        next () {
          var current = n2
          n2 = n1
          n1 = n1 + current
          return {
            value: current, donw: false
          }
        },
        return (v) {
          console.log('fibonacci sequence abandoned')
          return {value: v, done: true}
        }
      }
    }
  }
  for (var v of fib) {
    console.log(v)
    if (v > 50) break
  }
}

let iteratorObjectTest = {
  value: [1, 2, 3, 4, 5, 6, 7],
  [Symbol.iterator] (that = this) {
    let i = 0
    let len = that.value.length
    return {
      [Symbol.iterator] () { return this },
      next () {
        let done = (i >= len)
        if (done) {
          return this.return()
        }
        return {
          value: that.value[i++],
          done: done
        }
      },
      return () {
        return {
          value: false,
          done: true
        }
      }
    }
  }
}

module.exports = {
  symbolIterator,
  iteratorObjectTest
}
