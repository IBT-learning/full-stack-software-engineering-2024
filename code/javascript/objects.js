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

    // Challenge #1
}
console.log(restaurant.name)
console.log(restaurant.tags[2])
console.log(restaurant.staff.chef.name)

restaurant.tags.forEach(tag => console.log(tag))

// Challenge #2
restaurant.address = "malike roundabout,Accra"
console.log(restaurant.address)

restaurant.staff = {
    ...restaurant.staff, manager: {
        name: "Jemi Tigo",
        "phone number": "3345-834-34588",
    }
}

delete restaurant.website
console.log(restaurant)

// challenge #3
const menu = {
    items: {
      burger: 5.0,
      fries: 3.5,
      soda: 2.0,
      salad: 4.0
    },
    
    order: function(orderItems) {
      let total = 0;
      for (let item of orderItems) {
        if (this.items[item] !== undefined) {
          total += this.items[item];
        } else {
          console.log(`Item "${item}" is not on the menu.`);
        }
      }
      return total;
    }
  };
  
  console.log(menu.order(["burger", "fries"])); // 8.5
  console.log(menu.order(["burger", "fries", "fries"])); // 12
  console.log(menu.order(["burger", "fries", "soda"])); // 10.5
  console.log(menu.order(["burger", "pizza"])); // 5 (and logs that "pizza" is not on the menu)
  

