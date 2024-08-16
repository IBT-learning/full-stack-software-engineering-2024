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
  console.log(restaurant.name)  //The restaurant's name
  console.log(restaurant.tags[2]) //The third item ("dine-in") from the list of tags
  console.log(restaurant.staff.chef.name)     //The chef's name
for(tags of restaurant.tags){  //Use a loop to console log each of the tags
    console.log(tags)
}
restaurant.address = "Benincity Edo state" //change adddress
restaurant.staff.custormersevice = {      // Hire yourself to the staff
    name: "Blessing",
    "phone number": 1234567890,
}
delete restaurant.website   //Remove the website from the object

//Console log the object to see the changes
console.log(restaurant);

//challenge 3

const menu = {
  Egusi: 250,
  amala: 100,
  ogbono: 100,
  usi: 100,
  rice: 50,

  order(items) {
      let total = 0;

      // Loop over the array of items
      for (const item of items) {
          // Check if the item exists in the menu
          //if (this[item] !== undefined) {
              total += this[item];
          //} else {
           //   console.log(`Item "${item}" not found on the menu.`);
          }
      //}

      return total;
  }
};

// Example usage
console.log(menu.order(["usi", "rice"])); // 150

restaurant.menu = menu;
console.log(restaurant.menu.order('usi','rice'));  //this keep showing NaN i dont know how to fix it.



