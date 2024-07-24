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

  // Challenge #1: Accessing Data
console.log("Restauraunt Name:", restaurant.name);
console.log("Tag Name:", restaurant.tags[2]);
console.log("The Chef's Name:", restaurant.staff.chef.name);

restaurant.tags.forEach(tags =>{
    console.log(tags);
})

  //Challenge #2: Updating Data

  restaurant.address = "Victoria Plaza, Parklands Road, Nairobi Kenya"

  restaurant.staff.hr ={
    name: "Wonder",
    "phone number": "07123456789",
  }

  delete restaurant.website

  console.log(restaurant)


  // Challenge #3 : Creating a new object
  const menu = {
    frenchfries: 200,
    nyamachoma: 2000,
    burger: 550,
    ugalibeef: 300,

   

  //Challenge #4: Creating an object method

  order(items){
    let totalAmount = 0

    items.forEach(items =>{
        if(this.hasOwnProperty(items)) {
            totalAmount += this[items]
        }else{
            console.log(`Item ${items} is not found in the menu.`);
        }
    })
    return totalAmount
}

}

console.log(menu.order(["ugalibeef", "burger","frenchfries"]));
console.log(menu.order(["nyamachoma", "frenchfries"]));

//Extra Challenges 

restaurant.menu = {
    frenchfries: 200,
    nyamachoma: 2000,
    burger: 550,
    ugalibeef: 300,
}

console.log(restaurant)
console.log(menu.order(["nyamachoma", "ugalibeef"]));


