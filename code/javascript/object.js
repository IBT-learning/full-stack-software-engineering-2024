/*
    ? Objects
    *containers for values
    * organized by keys (also called "properties" or "attributes")
    * iterable but not indexed
    * { key: value, key2: value2}
    * comma seperated key/value pairs, in curly brackets
*/

let exampleObject = {
    key: "value",
    key2: "value2",
    key3:  ["values", "can", "be", "any", "type"],
    key4: { including: "nested obejects"},
    _thing: 1,
    $thing: 2,
    1: "numbers can be object keys",
    "* any string can be an object key & @": 3,
}

// Accessing values by keys

/*
    ? Dot notation
    * requires that you know the key name (it can't be variable)
    * requires a valid JS identifier as key (no numbers or strings)
*/

console.log(exampleObject._thing)
console.log(exampleObject.key4.including)
console.log(exampleObject.key3[4].toUpperCase())
//console.log(exampleObject.1) //Syntax error


/*
    ? Bracket notation
    * for when you can't use dot notation 
        * dynamic key names e.g 1
        * when keys are not valid JS identifiers
*/

console.log(exampleObject[1])
console.log(exampleObject["* any string can be an object key & @"])
console.log(exampleObject[[12]])// arrays with single valuses can be keys

let exampleKey = [12]
console.log(exampleObject[exampleKey])
exampleKey = "* any string cam be an object key & @"
console.log(exampleObject[exampleKey])

console.log(exampleObject.exampleKey)

/*
    ? Destructuring
    * use this when you want to save the value as a variable
    * can get multiple keys out at the same time
*/

const { key } = exampleObject
console.log(key)

const {key4, key2, key3} = exampleObject
console.log(key4, key2, key3)

//rename variable during destructuring (does not change object)
const { _thing: one} = exampleObject
console.log(one)
// console.log(_thing) //Reference error: _thing is not defined

/*
    ? Modifying objects
*/

const countries = {
    us: "United States",
    sa: "South Africa",
    gh: "Ghana",
    ke: "Kenya",
}
//We can assign values with dot and bracket notation for valid identifiers
countries.ng = "Nigeria"
// and assign the bracket notation for invalid identifiers
countries["u k"] = "United Kingdom"

const france = "fr"
countries[france] = "France"

// Generate existing values

countries["u k"] = "Sore Losers"
countries.fr = "Even bigger losers"


// Deleting key/value pairs

delete countries.fr
delete countries["u k"]

console.log(countries)


/*
    ? Object methods
    * used for accessing data
    * Static methods, not instance methods
        * meaning we call them an Object and pass the object as a param
    * Object.keys() gives an array of keys
    * Object.value() gives an array of values
    * Object.entries() gives an array of arrays
*/

console.log(Object.keys(countries))
console.log(Object.values(countries))
console.log(Object.entries(countries))


/*
    ? Looping over objects
    * you can use a for...in loop
    * or you can loop over the keys, values or entries
*/

// for (element in object) {code block}

// loops over keys
for (country in countries){
    // with bracket notation we can use variables to access the object
    console.log(`${country}: ${countries[country]}`)
}

for (country of Object.values(countries)) {
    console.log(country)    
}

for (country of Object.keys(countries)){
    console.log(countries[country])
}

/*
    Deeply nested object
    Complex data structure
*/

const vicky = {
    name: "Vicky Solange",
    birthPlace: "South Africa",
    parents: {
        ma: {
            name: "Sarah Solange",
            birthPlace: "Nigeria",
        },
        pa: {
            name: "Edward Solange",
            birthPlace: "South Africa",
        },
    },
    hobbies: [
        "reading",
        "hiking",
        { sports: ["lawn tennis", "football", "running"] },
        "catering",
    ],
}
console.log(Object.keys(vicky))
console.log(Object.values(vicky))
console.log(vicky.parents.ma.name)
console.log(vicky.hobbies[2]) // sports: [...]
console.log(vicky.hobbies[2].sports[1])