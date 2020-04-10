function* g() {
  yield 'a'
  yield 'b'
  yield 'c'
}

const gen = g()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

