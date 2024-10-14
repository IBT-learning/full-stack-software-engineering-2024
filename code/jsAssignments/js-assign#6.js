// JavaScript Assignment #6: Objects

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
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);

const { tags } = restaurant;
console.log(tags);
for (tag of tags) {
  console.log(tag);
}

// Challenge #2: Updating Data
restaurant.address = "Plot 235, Akin Adesola Street, VI Lagos";

restaurant.staff.logistics = {
  name: "Solomon",
  "phone number": "123-456-789",
};

delete restaurant.website;

console.log(restaurant);

// Challenge #3 and #4: Creating a new object and Creating an object method

const menu = {
  jollof: 5000.0,
  egusi: 2500.0,
  amala: 1500.0,
  ogbono: 2000.0,

  order(options) {
    let orderTotal = 0;
    for (option of options) {
      orderTotal += this[option];
    }
    return orderTotal;
  },
};

console.log(menu.order(["jollof", "amala", "amala"]));

// EXxtra Challenge

restaurant.menu = menu; // 1
console.log(restaurant);

console.log(restaurant.menu.order(["jollof", "amala", "ogbono"])); // 2

const menu1 = {
  // 3
  jollof: 5000.0,
  egusi: 2500.0,
  amala: 1500.0,
  ogbono: 2000.0,

  order(options) {
    let orderTotal = 0;
    for (option of options) {
      if (this.hasOwnProperty(option)) {
        // asking if menu1 has own property named any of the options and works with only true values.
        orderTotal += this[option];
      }
    }
    return orderTotal;
  },
};

console.log(menu1.order(["jollof", "amala", "amala", "Burger", "Bread"]));
