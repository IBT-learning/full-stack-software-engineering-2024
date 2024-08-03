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

// challenge #1: accessing data
console.log(restaurant.name) // Gigi's Pizza Shack
console.log(restaurant.tags[2]) // dine-in
const chefName = restaurant["staff"]["chef"]["name"];
console.log(chefName) // Musa

// loop over tag array to console log each of the strings;
for ( tag of restaurant.tags) {
    console.log(tag)
}  // pizza family dine-in take-out arcade

// Challenge #2: Updating Data
restaurant.address = "no12, opp powerline junction, Berger, Lagos"
console.log(restaurant.address)
restaurant["staff"]["ICT-manager"] = {
  name: "Kareem Samad",
  "phone number": "70-3456-7845"
}
delete restaurant.website
console.log(restaurant)

// Challenge #3: Creating a new object
const menu = {
  egusi: 5000.00,
  "efo-riro": 3500.00,
  abula: 2500.00,
  ewedu: 1500.00,
// Challenge #4: Creating an object method
// add order method to the menu object
  order(orderList) {
  let totalCost = 0;
  for (item of orderList) {
    totalCost += menu[item];
  }
  return totalCost;
}
};
console.log(menu) // { egusi: 5000, 'efo-riro': 3500, abula: 2500, ewedu: 1500 }
console.log(menu.order(["egusi", "efo-riro","ewedu"])) // 10000
console.log(menu.order(["abula", "ewedu", "egusi", "efo-riro"])) // 12500

// Extra Challenge
restaurant.menu = {
  egusi: 5000.00,
  "efo-riro": 3500.00,
  abula: 2500.00,
  ewedu: 1500.00,
  // add order method to the menu object
  order(orderList) {
  let totalCost = 0;
  for (item of orderList) {
    totalCost += menu[item];
  }
  return totalCost;
}
}
console.group(restaurant)
console.log(restaurant.menu.order(["egusi", "efo-riro","ewedu", "iyan"])) // 10000