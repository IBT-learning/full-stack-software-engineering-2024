const one = 1
const two = 2

// basic arithmetic operators
console.log(1+2)
console.log(one+two)
console.log(1-2)
console.log(2*4)
console.log(5/2)

//advanced arithmetic operators
console.log(4 ** 3) // exponent
console.log(19 % 5) // modulo finds remainder

// Built-In Math Object
console.log(Math.floor(19/5)) // floor division round down
console.log(Math.ceil(Math.PI)) // ceiling rounds up
console.log(Math.round(Math.SQRT1_2)) //rounds up to the nearest integer
console.log(Math.max(5,2,7, 14234, 9, 3)) // the largest value
console.log(Math.min(5,2,7,14234, 9,3)) // the smallest value

// Random Numbers
  console.log(Math.random())
  // random number between one and ten
  console.log(Math.random()*10)

  const RandomNum = Math.floor(Math.random()*10)

  console.log(RandomNum)

  //To fixed connotation
  console.log(Math.PI.toFixed(4))

  console.log(Number.MAX_SAFE_INTEGER)
  console.log(Infinity * Number.MAX_SAFE_INTEGER)
  console.log(Math.sqrt(-1))// NaN, Not a number

  // Chaining Operations

  console.log(6*3+4*2+10/3) // 29.3333...not what we wanted

  let newNum = 6 * 3
  newNum = newNum + 4
  newNum = newNum * 2
  newNum = newNum + 10
  newNum = newNum / 3
  console.log(newNum)

  // second option 

  console.log((((6 * 3) + 4 )* 2 + 10 )/3)

