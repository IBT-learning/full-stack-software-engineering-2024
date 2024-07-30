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
//   Challenge #1
//    1
  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant.staff.chef.name);

//   2
for (tag in restaurant.tags) {
    console.log(restaurant.tags[tag]);
}
// OR
for (tag of Object.values(restaurant.tags)) {
    console.log(tag);
}
// OR
for (tag of Object.keys(restaurant.tags)) {
    console.log(restaurant.tags[tag]);
}

// Challenge #2
restaurant.address = "12a, 0remeji Street, Computer Village, Ikeja, Lagos" // 1

restaurant.staff.secretary = {  // 2
    name: "Habeebah",
    "phone number": "234-456-5678",
  },

delete restaurant.website // 3

// console.log(restaurant);

// Challenge #3
const menu = {
    friedrice: 500,
    chicken: 3000,
    plantain: 1000,
    amala: 500,
    goatmeat: 2500,

    // Challenge #4
    order([meal1, meal2]){
        return this[meal1] + this[meal2]
    }
}
console.log(menu.order(["amala", "goatmeat", "jollof"]));

// Extra challenge

restaurant.menu = {
    friedrice: 500,
    chicken: 3000,
    plantain: 1000,
    amala: 500,
    goatmeat: 2500,

    // Challenge #4
    order([meal1, meal2, meal3]){
        // if(meal1 != menu.includes){
        //    console.log(this[meal2] + this[meal3])
        // } 
        // if(meal2 != menu.includes){
        //    console.log(this[meal1] + this[meal3])
           
        // }
        // if(meal3 != menu.includes){
        //     console.log(this[meal1] + this[meal2])

        // } 
        return this[meal1] + this[meal2] + this[meal3]

        
    }
}



// console.log(restaurant.menu.order(["chick", "friedrice", "plantain"]));
// console.log(restaurant.menu.order(["chicken", "friedrice", "dodo"]));
// console.log(restaurant.menu.order(["chicken", "rice", "plantain"]));
console.log(restaurant.menu.order(["chicken", "friedrice", "plantain"]));
// console.log(restaurant);
