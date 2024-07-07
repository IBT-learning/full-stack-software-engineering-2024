const restaurant = {
  name: "Gigi's Pizza Shack",
  address: "123 Main St, Portland OR 97200",
  tags: ["pizza", "family", "dine-in", "take-out", "arcade"],
  website: "http://www.gigispizza.com/",
  staff: {
    owner: {
      name: "Gigi",
      "phone number": "123-234-3456",
    },
    manager: {
      name: "Rose",
      "phone number": "234-345-4567",
    },
    chef: {
      name: "Musa",
      "phone number": "345-456-5678",
    },
  },
};

// Challenge #1: Accessing Data

// Use dot or bracket notation as needed to console log the following information:
// The restaurant's name
console.log(restaurant.name); // Gigi's Pizza Shack

// The third item ("dine-in") from the list of tags
console.log(restaurant.tags[2]); //dine-in

// The chef's name
console.log(restaurant.staff.chef.name); //Musa

// Use a loop to console log each of the tags //pizza, family, dine-in, take-out, arcade
const dinningOptions = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let tag = arr[i];
    console.log(tag);
  }
};

dinningOptions(restaurant.tags);

// Challenge #2: Updating Data

// Using dot or bracket notation to update the object
// Move the restaurant to somewhere in your city (change the address)
restaurant.address =
  "Islands Shopping Center, R512, Broederstroom, Hartbeespoort Dam";
console.log(restaurant.address); //Islands Shopping Center, R512, Broederstroom, Hartbeespoort Dam

// Hire yourself to the staff (make up a position for yourself and add it to the "staff")
restaurant.staff.waiter = { name: "Jade", "phone-number": "342-542-5664" };
console.log(restaurant.staff); //  waiter: { name: 'Jade', 'phone-number': '342-542-5664' }

// Remove the website from the object
// Console log the object to see the changes
delete restaurant.website;
console.log(restaurant);

// Challenge #3: Creating a new object

// Write a new object literal that represents a menu with prices.
// It can include whatever dishes you like.

const menu = {
  "sea food pasta": 12.0,
  "vegan breakfast": 9.0,
  "tuna salad": 11.0,
  "chocolate cake": 8.0,

  // Challenge #4: Creating an object method

  // Write an order method on the menu object that does the following:
  // takes one argument, an array of strings
  // loop over the strings, and add up the total for the corresponding menu items
  // return the total cost of the order
  // For example:
  // console.log(menu.order(["burger", "fries"])) // 8.5
  // console.log(menu.order(["burger", "fries", "fries"])) // 12

  order: function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (this[item] !== undefined) {
        total += this[item];
      }
    }

    return total;
  },
};

console.log(menu.order(["sea food pasta", "chocolate cake"])); //20
console.log(menu.order(["tuna salad", "vegan breakfast", "tuna salad"])); //31

// Extra challenges

// Use dot or bracket notation to add the menu to the restaurant object
// restaurant.menu = menu;
restaurant["menu"] = menu;
console.log(restaurant);

// Make an order using restaurant.menu.order()
// Ignore invalid inputs:
// console.log(menu.order(["burger", "fries", "pasta"])) // 8.5

console.log(
  restaurant.menu.order(["burger", "chocolate cake", "fries", "sea food pasta"]) //20
);
