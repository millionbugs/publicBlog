class promise {
  constructor (fun) {
    this.type = 'pending'
    this.data = null
    this.err = null
    fun(this.then, this.catch)
  }
  then (resolve) {
    this.type = 'resolve'
    resolve(this.data)
  }
  catch (reject) {
    this.type = 'reject'

  }
}

function ajax() {}
ajax("http://some.url.1")
.then()

module.exports = promise
