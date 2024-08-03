const add = (x, y) => x + y
const substract = (x, y) => x - y
const percent = (x, y) => y * 100 / x

const doMath = (a, b, parFunc) => {
    return parFunc(a, b);
}
console.log(doMath(500, 30, percent))

const num = [10, 18, 33, 45, 106]

const evenNum = num.filter(x => (x % 5 == 0))
console.log(evenNum)