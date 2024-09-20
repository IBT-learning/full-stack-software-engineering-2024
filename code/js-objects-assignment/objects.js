// Javascript objects Assignment

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
  }

//Challenge #1: Accessing Data
//  The restaurant's name 
console.log(restaurant.name); // Gigi's Pizza Shack

// The third item ("dine-in") from the list of tags
console.log(restaurant.tags[2]); // dine-in

// The chef's name
console.log(restaurant.staff.chef.name); // Musa

// Use a loop to console log each of the tags
for (tag in restaurant.tags) {
    console.log(restaurant.tags[tag])
}


// Challenge #2: Updating Data

// Move the restaurant to somewhere in your city (change the address)
restaurant.address="2 Jungle Ave, East Legon-Accra"

// Hire yourself to the staff (make up a position for yourself and add it to the "staff") 

restaurant.staff={auditor:{
    name:"Enoch Arthur-Mensah",
    "phone number":"125-558-6974"
}}

delete restaurant.website

console.log(restaurant);

// Challenge #3: Creating a new object

const menu={
    pizza:140,
    rice:90,
    burger:110,
    salad:130, 
    sandwiches:120,
    seafood:210,



    //Challenge #4: Creating an object method

    order(menuList){
      let total = 0
      for (food of menuList) {
          if (this[food]){
            total+=this[food]
        } 
      }
      return `The total of ${menuList} is ${total}`
    }
    
}

console.log(menu.order(['pizza', 'rice']))

// Extra challenges (optional)
// Use dot or bracket notation to add the menu to the restaurant object 
restaurant.menu={pizza:140,
  rice:90,
  burger:110,
  salad:130, 
  sandwiches:120,
  seafood:210,


  order(menuList){
    let total = 0
    for (food of menuList) {
        if (this[food]){
          total+=this[food]
      } 
    }
    return `The total amount of ${menuList} is ${total}`
  }
    
}

 console.log(restaurant.menu.order(['rice', 'burger']))


