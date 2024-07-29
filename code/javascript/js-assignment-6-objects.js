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

// Challenge 1:Accessing Data
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);

for (tag of restaurant.tags) {
  console.log(tag);
}

// Challenge 2: Updating Data 
restaurant.address = "20 Njamanze street, Owerri, Imo state";

restaurant.staff.position = {
  name: "Ngozi Clara",
  "phone number": "234 801 3256",
  title: "Web Engineer"
};

delete restaurant.website;

console.log(restaurant);

// Challenge 3: Creating a new object

const menu = {
  egusi: 5,
  okro: 5,
  rice: 4,
  nsala: 10,

// console.log(menu)

//Challenge 4: Creating an object method

  order: function(options) {
    let totalCost = 0;

    for (option of options) {
      if (this[option] !== undefined) {
      totalCost += this[option];
      }
    }
    return totalCost;
  }
}

const orderOptions = ["egusi", "rice", "nsala", "okro"];
console.log(menu.order(orderOptions));
console.log(menu.order(["egusi", "nsala"])) 


