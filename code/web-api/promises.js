// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

const myPromise = new Promise((resolve, reject) => {
  //This creates a promise(object) that takes two arguments resolve and reject
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 2000);
});

// Handling the promise
myPromise
  .then((result) => {
    console.log(result); // If successful, this runs
  })
  .catch((error) => {
    console.log(error); // If failed, this runs
  });
