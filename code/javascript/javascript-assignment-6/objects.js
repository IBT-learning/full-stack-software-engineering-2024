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

// Challenge 1
console.log(restaurant.name)
console.log(restaurant.tags[2])
console.log(restaurant.staff.chef.name)

for (const tag of restaurant.tags) {
  console.log(tag)
}
// Challenge 2
restaurant.address = "456 Lavington, Nairobi, Kenya"
restaurant.staff['new staff'] = {
  name: "Yadel",
  "phone number": "212-121-2121"
};
delete restaurant.website
console.log(restaurant)

// Challenge 3
const menu = {
  tiramisu: 7.5,
  focaccia: 4.0,
  margherita: 9.0,
  calamari: 11.5,
  pasta: 6.75,
  salad: 4.5,
  fries: 2.99,
};

// Challenge 4
menu.order = function(items) {
  let total = 0;
  for (const item of items) {
    if (this[item]) {
      total += this[item]
    }
  }
  return total
}

// Extra Challenge
restaurant.menu = menu

console.log(restaurant.menu.order(["pasta", "tiramisu"]))
console.log(restaurant.menu.order(["margherita", "salad", "focaccia"]))
console.log(restaurant.menu.order(["calamari", "fries", "pasta", "pasta"]))
console.log(restaurant.menu.order(["burger", "fries", "pasta"]))