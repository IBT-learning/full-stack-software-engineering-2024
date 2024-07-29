console.log("a string is text defined by quote marks")
console.log("strings can include any symbol you can type or paste")
console.log("@$)(*SLKJFWOI)($@()#$@$*(S+_!#)@$🙂🙂🙂")
console.log("My cat Hiccup says 'meow'") // include quotes in a string by using the other type of quotes
console.log('John\'s cat Hiccup says "meow"') // or escape special characters with a back slash
console.log("you can operate " + "on strings") // concatenation

// STRING TEMPLATES
console.log(`string templates, or template strings, are defined by backticks`)
console.log(`string templates can include ' and " characters`)
console.log(`string templates have at least ${1 + 1} super powers`) // string interpolation
// you can put any valid JS code in between the curly brackets
// ONLY WORKS in string templates, not other types of strings
const me = "Danny"
const cat = "Hiccup"
const catSound = "meow"
console.log(`${me}'s cat ${cat} says "${catSound}"`)

// STRING LITERAL VS INTERPOLATED STRING
const literal = "a string literal is a string exactly as written"
const templateLiteral = `template strings can be literal`
const concatenated =
    "it stops being literal" + " " + "when you perform operations on it"
console.log(concatenated)
const interpolated = `or when you ${"operate inside"} the string template`
console.log(interpolated)

// ATTRIBUTES
console.log("use dot notation to access attributes".length) //37
console.log(cat.length) // 6

// STRING METHODS
const angryCat = cat.toUpperCase()
console.log(angryCat, cat, catSound)

const catOuch = catSound.replace("ow", "ouch")
console.log(catSound) //meow (the original is not changed)
console.log(catOuch) //meouch

// INDEXING
// indexing is referring to specific points in a string or array by its location
// location is identified by sequential integers
// starting with 0

//           0123456
const abc = "abcdefg"
// access by index
console.log(abc[6]) //g

console.log(catOuch.slice(2)) //ouch
console.log(catOuch.slice(2, 4)) //ou
