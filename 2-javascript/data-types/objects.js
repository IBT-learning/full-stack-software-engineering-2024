/*
    ? Objects
    * containers for values
    * organized by keys (also called "properties" or "attributes")
    * iterable but not indexed
    * { key: value, key2: value2 }
    * comma separated key/value pairs, in curly brackets
*/

// keys can be any "valid JS identifier"
// or numbers, or any string
let exampleObject = {
    key: "value",
    key2: "value2",
    key3: ["values", "can", "be", "any", "type"],
    key4: { including: "nested objects" },
    _thing: 1,
    $thing: 2,
    1: "numbers can be object keys",
    "* any string can be an object key & @": 3,
    [12]: "can arrays be keys?",
}

/*
    ? Accessing values by keys
    
    ? Dot notation
    * requires that you know the key name (it can't be variable)
    * requires a valid JS identifer as key (no numbers or strings)
*/

console.log(exampleObject._thing)
console.log(exampleObject.key4)
console.log(exampleObject.key4.including) // I can chain dot notation to access nested objects
console.log(exampleObject.key3[3]) // or access nested arrays by index, etc
console.log(exampleObject.key3[1].toUpperCase())
// console.log(exampleObject.1) //SyntaxError

/*
    ? Bracket notation
    * for when you can't use dot notation :)
        * dynamic key names
        * when keys are not valid JS identifiers
*/

console.log(exampleObject[1])
console.log(exampleObject["* any string can be an object key & @"])
console.log(exampleObject[[12]]) // apparently arrays with single values can be keys!

let exampleKey = [12]
console.log(exampleObject[exampleKey])
exampleKey = "* any string can be an object key & @"
console.log(exampleObject[exampleKey])

// the square brackets mean it will attempt to resolve to a value
// before looking up that value in the object
// with dot notation, it looks up that exact identifier as a key name
console.log(exampleObject.exampleKey) // undefined
// console.log(exampleObject[key3]) // ReferenceError: key3 is not defined

/*
    ? Destructuring
    * use this when you want to save the value as a variable
    * can get multiple keys out at the same time
*/

const { key } = exampleObject
// const key = exampleObject.key // does the same thing
console.log(key)

const { key4, key2, key3 } = exampleObject
console.log(key4, key2, key3)

// rename variable during destructring (does not change object)
const { _thing: one } = exampleObject
console.log(one)
// console.log(_thing) // ReferenceError: _thing is not defined

/*
    ? Modifying objects
*/

const countries = {
    us: "United States",
    sa: "South Africa",
    gh: "Ghana",
}

// assign new values with dot notation
countries.ng = "Nigeria"
// or with bracket notation (whether they are valid identifiers or not)
countries["ke"] = "Kenya"
countries["g b"] = "Great Britain"

const france = "fr"
countries[france] = "France"

// ? Overwrite existing values

countries["g b"] = "War Losers"
countries.fr = "Even bigger losers"

// ? Deleting key/value pairs

// the delete operator
delete countries.fr
delete countries["g b"]

console.log(countries)

/*
    ? Object methods
    * used for accessing data
    * Static methods, not instance methods
        * meaning we call them on Object and pass the object as a param
    * Object.keys() gives an array of keys
    * Object.values() gives an array of values
    * Object.entries() gives an array of arrays
*/

console.log(Object.keys(countries))
console.log(Object.values(countries))
console.log(Object.entries(countries))

/*
    ? Looping over objects
    * you can use a for..in loop
        for (element in object) {code block}
    * or you can loop over the keys, values, or entries
*/

// loops over keys
for (country in countries) {
    // with bracket notation we can use variables to access the object
    console.log(`${country}: ${countries[country]}`)
}

// or turn them into arrays with the object methods
// and loop over with for..of
for (country of Object.values(countries)) {
    // the keys don't exist here, we couldn't access them if we wanted to
    console.log(country)
}

for (country of Object.keys(countries)) {
    console.log(`${country}: ${countries[country]}`)
}

for (country of Object.entries(countries)) {
    console.log(`${country[0]}: ${country[1]}`)
}

/* 
    ? Deeply nested object
    ? Complex data structure
*/

const habibi = {
    name: "Habibi Park",
    birthPlace: "Argentina",
    parents: {
        ma: {
            name: "Sally Chin",
            birthPlace: "Australia",
            job: {
                workplace: "USPS",
                role: "postal delivery driver",
            },
        },
        pa: {
            name: "Ahmed Jones",
            birthPlace: "Russia",
            siblings: ["Martha", "Johannes", "Kim"],
        },
    },
    hobbies: [
        "needle felting",
        "motocross",
        { sports: ["running", "rugby", "ice hockey"] },
        "baking",
    ],
}

console.log(habibi.parents.ma.birthPlace) // Australia
console.log(habibi.parents.mom) // undefined

console.log(habibi.parents.pa.siblings[1]) // Johannes
console.log(habibi.hobbies[2]) // { sports: [ 'running', 'rugby', 'ice hockey' ] }
console.log(habibi.hobbies[2].sports) // [ 'running', 'rugby', 'ice hockey' ]
console.log(habibi.hobbies[2].sports[1]) // rugby
