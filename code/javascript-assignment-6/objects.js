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

  //Challenge 1

  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant.staff.chef.name);

for (tagsName of restaurant.tags){
    console.log(tagsName)
}

//Challenge 2
restaurant.address = "9,Macgregor road,Ikoyi,Lagos"
console.log(restaurant.address)

restaurant.staff.interiorDesigner = {
    name: "Taiwo",
    "phone number": "234-556-4569",
}
delete restaurant.website
console.log(restaurant);

//Challenge 3
const menu = {
    salad: 2.5,
    asun: 3.0,
    pizza: 6.5,
    jollofRice: 2.0,
    plaintain: 1.0,

    order(items){
      let sum = 0;
      for (item of items){
        if(this[item] !== undefined){
         sum += this[item];
        }
      }
      return sum;
      }
};

console.log(menu.order(["asun","pizza"]))
console.log(menu.order(["plaintain","jollofRice","asun"]));

//Challenge 4
restaurant.menu = menu;

console.log(restaurant.menu.order(["plaintain","jollofRice"]));