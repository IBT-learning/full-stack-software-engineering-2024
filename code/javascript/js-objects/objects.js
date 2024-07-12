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

console.log("Challenge #1: Accessing Data"); 
// Use dot or bracket notation as needed to console log the following information:


// The restaurant's name
console.log(restaurant.name); 

// The third item ("dine-in") from the list of tags
console.log(restaurant.tags[2]);

// The chef's name
console.log(restaurant.staff.chef);

// Use a loop to console log each of the tags
for (const tag of restaurant.tags) {
    console.log(tag);
}

console.log(" ");

console.log("Challenge #2: Updating Data")
// Using dot or bracket notation to update the object

// Move the restaurant to somewhere in your city (change the address)
restaurant.address = "2007 Ayidiki St, Accra Ghana";

// Hire yourself to the staff (make up a position for yourself and add it to the "staff")
const position = "CEO"; //Dynamic variable naming
const details =  {
    name: "Floxy",
    "phone number": +233556207221,
}

restaurant.staff[position]= details;

//Alternative solution
/*Static variable naming

    const CEO= {
        name: "Floxy",
        "phone number": +233556207221,
    }

    restaurant.staff["CEO"]= CEO;
    console.log(restaurant.staff);
**/ 


// Remove the website from the object
delete restaurant.website

// Console log the object to see the changes
console.log(restaurant);


console.log("Challenge #3: Creating a new object ");
//Write a new object literal that represents a menu with prices. 
//It can include whatever dishes you like. Give it at least four dishes. An example might look like this:

const menu = {
    jollof: 5.00,
    "tuo zafi": 10.00,
    "fried rice": 25,
    beans: 20.00,
    spagetti: 15.00,
    burger: 50.00,

    
// Challege 4
//Write an order method on the menu object that does the following:
// takes one argument, an array of strings
// loop over the strings, and add up the total for the corresponding menu items
// return the total cost of the order
// For example:
// console.log(menu.order(["burger", "fries"])) // 8.5
    order(items){
        let total = 0;
        for (const item of items) {
          if (item in this){
            total +=this[item];
        }
    }
    return total;
  }
};

console.log(menu.order(["burger", "spagetti"]));

console.log("Extra challenges");
// Use dot or bracket notation to add the menu to the restaurant object
// Make an order using restaurant.menu.order()
// Ignore invalid inputs:
// console.log(menu.order(["burger", "fries", "pasta"])) // 8.5

const restaurantMenu = {...restaurant, ...menu};  
console.log(restaurantMenu);

console.log(" ");
//Alternative Option
// const restMenu = Object.assign({}, restaurant, menu);
// console.log(restMenu);


console.log(menu.order(["burger", "fries", "pasta"])) 







