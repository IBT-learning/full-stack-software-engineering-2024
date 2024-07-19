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

console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);
for (tag of restaurant.tags) {
  console.log(tag);
}

restaurant.address = "Rwamburi Plains, Kenya";
console.log(restaurant.address);
restaurant.staff.operations = {
  name: "Nyawira",
  "phone number": "3456-987-9027",
};
console.log(restaurant.staff.operations);
delete restaurant.website;

console.log(restaurant);

const carte = {
  coffee: 600,
  cake: 400,
  fries: 300,
  chicken: 950,
  soda: 220,

  order(){
    let total = 0;
    for (item in carte) {
      if (item!== undefined) {
        total += this.item;
      }
    }
    return total 
  }
  
};
console.log(carte.order())

