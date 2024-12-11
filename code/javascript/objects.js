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

  // Challenge #1 Accessing Data

  // Accessing and logging the restaurant's name
console.log(restaurant.name)

// Accessing and logging the third item ("dine-in") from the list of tags
console.log(restaurant.tags[2])

// Accessing and logging the chef's name
console.log(restaurant.staff.chef.name)

// Using a loop to console log each of the tags
for (let i = 0; i < restaurant.tags.length; i++) {
    console.log(restaurant.tags[i]);
  }


  // Challenge #2: Updating Data
  // Updating the address
restaurant.address = "456 Nairobi, Kenya"

// Hiring myself to the staff
restaurant.staff["new position"] = {
    name: "Mercy Lubanga",
    "phone number": "+254 721 934 552"
  }
  
  // Removing the website from the object
  delete restaurant.website
  
  // Console log the object to see the changes
  console.log(restaurant)


  //Challenge #3: Creating a new object
  const menu = {
    dishes: [
      {
        name: "Nyama Choma",
        price: 15.99,
        description: "Grilled meat, typically goat or beef, served with a side of kachumbari (tomato and onion salad)."
      },
      {
        name: "Ugali",
        price: 5.99,
        description: "A staple food made from maize flour (cornmeal) cooked with water to a dough-like consistency."
      },
      {
        name: "Sukuma Wiki",
        price: 6.99,
        description: "Collard greens sautéed with onions and tomatoes, often served as a side dish."
      },
      {
        name: "Chapati",
        price: 2.99,
        description: "Soft, layered flatbread made from wheat flour, commonly served with stews and curries."
      }
    ]
  };
  
  console.log(menu);



  // Challenge #4: Creating an object method
  
  const order = function(dishNames) {
    let totalCost = 0;
  
    for (let i = 0; i < dishNames.length; i++) {
      const dishName = dishNames[i];
      for (let j = 0; j < menu.dishes.length; j++) {
        if (menu.dishes[j].name === dishName) {
          totalCost += menu.dishes[j].price;
          break;
        }
      }
    }
  
    return totalCost;
  };
  
  
  
  const myOrder = ["Nyama Choma", "Chapati", "Sukuma Wiki"];
  const total = order(myOrder);
  console.log(`Total cost of the order: $${total.toFixed(2)}`);
  