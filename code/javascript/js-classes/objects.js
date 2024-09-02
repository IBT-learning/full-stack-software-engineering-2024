/* 
object syntax
  const/let object = {
  key: value, //keys can be written the same way variables are written as words, beginning with $ or _
  }
*/
const countries = {
  us: "United States",
  gh: "Ghana",
  ng: "Nigeria",
  ke: "Kenya",
  "g b": "Great Britain",
};

// Accessing a key/value pair
/*
  ? Dot Notation
*/
console.log(countries.ke); //Kenya

// ? Bracket Notation: for keys with JS identifiers that are not valid (strings, numbers, arrays)
console.log(countries["g b"]); //Great Britain

// for..of loop in objects uses this syntax for(element in object){code block} element is a variable name that is created on ths spot
for (country in countries) {
  console.log(countries[country]); //this gives values

  console.log(country); //us gh ng ke g b this gives the keys
}
for (country of Object.values(countries)) {
  //Object.values() returns the values of all object keys (properties).
  console.log(country); //this gives values
}
for (country of Object.keys(countries)) {
  //Object.keys() returns the keys (properties) of any object type.
  console.log(country); //this gives keys
}
for (country of Object.keys(countries)) {
  console.log(countries[country]); //this gives values
}
for (country of Object.entries(countries)) {
  // The Object.entries() method returns an array of the key/value pairs of an object.
  console.log(country); // this give each key/value pair in []
  console.log(countries); //this give the key/value pair in {} as initially entered
}
console.log(countries);
