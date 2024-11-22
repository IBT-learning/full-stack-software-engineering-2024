// // // Object basics 1
// // // In this task you are provided with an object literal, and your tasks are to

// // // Store the value of the name property inside the catName variable, using bracket notation.
// // // Run the greeting() method using dot notation (it will log the greeting to the browser's console).
// // // Update the color property value to black.
// // // Try updating the live code below to recreate the finished example:

// // const Cat = {
// //   name : 'Bertie',
// //   breed : 'Cymric',
// //   color : 'white',
// //   greeting: function() {
// //     console.log('Meow!');
// //   }
// // }

// // // Put your code here
// // const catName  = Cat['name'];
// // Cat.greeting();

// // Cat.color = "black"


// // console.log('ques 2');
// // // In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

// // // name: A string representing the band name.
// // // nationality: A string representing the country the band comes from.
// // // genre: What type of music the band plays.
// // // members: A number representing the number of members the band has.
// // // formed: A number representing the year the band formed.
// // // split: A number representing the year the band split up, or false if they are still together.
// // // albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
// // // name: A string representing the name of the album.
// // // released: A number representing the year the album was released.
// // // Include at least two albums in the albums array.

// // // Once you've done this, you should then write a string to the variable bandInfo, 
// // //which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

// // let bandInfo;
// // const Floxy ={
// //   name: 'flo',
// //   nationality: 'Ghanaian',
// //   grenre: 'hiplife',
// //   members: 4,
// //   formed: 2006,
// //   slipt: 2017,
// //   albums:  [
// //      {
// //     name: 'Gold Coast',
// //     released: 2008,
// //   },

// //   {
// //     name: 'frames',
// //     released : 2015,
// //   }
// //   ],

// //   bio(){
// //     return `${this.name} is a ${this.nationality} band from ${this.formed} to ${this.spilt}. Their albums include ${this.albu} `
// // }

    
// // }

// // console.log(bandInfo = Floxy.bio());;


// // // Put your code here

// // // Object basics 3
// // // In this task, we want you to return to the cat object literal from Task 1. 
// // //We want you to rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser's console,
// // // but in a way that will work across any cat object of the same structure, regardless of its name or breed.

// // // When you are done, write your own object called cat2, which has the same structure, exactly the same greeting() method, but a different name, breed, and color.

// // // Call both greeting() methods to check that they log appropriate greetings to the console

// // const Cat1 ={name : 'Bertie',
// // breed : 'Cymric',
// // color : 'white',
// // greeting: function() {
// //   console.log(`Hello, said ${this.name} the ${this.breed}.`);

// // }
// // }

// // const Cat2 ={name : 'Bertie',
// //   breed : 'Cymric',
// //   color : 'white',
// //   greeting: function() {
// //     console.log(`Hello, said ${this.name} the ${this.breed}.`);
  
// //   }
// //   }

// //   Cat1.greeting();
// //   Cat2.greeting();

// // // //Object basics 4
// // // In the code you wrote for Task 3, the greeting() method is defined twice, once for each cat. 
// // //This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself").

// // // In this task we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method. 
// // //Hint: you should use a JavaScript constructor to create cat instances.



//   function Ca(name, breed, color){
//     this.name= name;
//     this.breed = breed;
//     this.color= color;
//     this.greeting = function(){
//       console.log (`Hello, said ${this.name} the ${this.breed}.`)
    
//     }

//   }

//   const cat5 = new Ca('fun','sheep','yellow');
//   cat5.greeting()


//   class Goat {
//   constructor(name, breed, color){
//     this.name = name
//   }
// }

// function greet(name, callback) {
//   console.log('Hello ' + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// // Passing sayGoodbye as a callback to greet
// greet('Alice', sayGoodbye);


const flo =  2
console.log(String(flo));