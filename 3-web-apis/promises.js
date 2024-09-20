// synchronous code
console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);

/* 
    ? Promises
    * an object that may return a value in the future
    * it has one of three states:
        * Pending (unfinished, still in process)
        * Fulfilled (complete, with a result)
        * Rejected (error)   
*/

const promiseHelper = (resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("success");
  } else {
    reject("failure");
  }
};

const promiseObj = new Promise(promiseHelper);

// we can use resolvers to get the value out of a promise
promiseObj
  // the first .then's callback argument is the resolved value of the promise
  .then((result) => result.toUpperCase())
  // subsequent .then's callback argument is whatever the previous one returned
  .then((next) => console.log(next))
  .catch((err) => console.warn(err))
  .finally(() => console.log("this happens at the end"));

/* 
    ? Asynchronous Functions
    * introduced after ES6
    * alternative to writing explicit Promise objects
    * all async functions return promises !!!!
    * the async keyword is what makes it an async function
    
    Syntax: 
    * async function myFx() {}
    * const myFx = async function() {}
    * const myFx = async () => {} 
  */

let asyncFx = async () => {
  return "hello world";
};

console.log(51, asyncFx()); // Promise { 'hello world' }

// asyncFx().then((res) => console.log(res));

// or! use await

/* 
    ? Await keyword
    * can be used inside of async functions
    * tells JS to wait on a promise before moving on
*/

const start = async () => {
  const result = await asyncFx();
  console.log(65, result);
  return result;
};

console.log(69, start());
