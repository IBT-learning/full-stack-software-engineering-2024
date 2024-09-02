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

//Challenge #1: Accessing Data
//1.1.1 Restaurant Name
console.log(restaurant.name);

//1.1.2 The third item ("dine-in") from the list of tags
console.log(restaurant.tags[2]);

//1.1.3 The chef's name
console.log(restaurant.staff.chef.name);

//1.2 Use a loop to console log each of the tags
for (eatingMethod in restaurant.tags) {
  console.log(restaurant.tags[eatingMethod]);
}

// Challenge #2: Updating Data
//2.1 Using dot or bracket notation to update the object
//2.1.1 Move the restaurant to somewhere in your city (change the address)
restaurant.address = "2343 La Pine, Oregon(OR), 97739";
//2.1.3 Hire yourself to the staff (make up a position for yourself and add it to the "staff")
// make sure to add yourself as an object with your name and (fake!) phone number
restaurant.staff.waiter = {
  name: "Missy",
  "phone number": "222-555-888",
};
//2.1.4 Remove the website from the object
delete restaurant.website;
//2.2 Console log the object to see the changes
console.log(restaurant);

// Challenge #3: Creating a new object
//Write a new object literal that represents a menu with prices. It can include whatever dishes you like. Give it at least four dishes.
const menu = {
  burger: 5.0,
  fries: 3.5,
  rice: {
    fried: 10.0,
    jollof: 8.0,
    white: 6.0,
  },
  chicken: {
    bbq: 7.5,
    fried: 5.0,
    breaded: 8.0,
  },
  // Challenge #4: Creating an object method
  //4.1 Write an order method on the menu object that does the following:
  //4.1.1 takes one argument, an array of strings
  // loop over the strings, and add up the total for the corresponding menu items
  // return the total cost of the order
  order([]) {
    return a;
  },
};
console.log(menu);
console.log(menu.order["burger"]);
