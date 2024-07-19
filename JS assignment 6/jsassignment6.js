//Challenge 1
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
console.log(restaurant.chef.name);
  

for (i = 0 ; i < restaurant.tags.length; i++){
   console.log(restaurant.tags[i]);
};

  // challenge 2
  restaurant.address = "123 New Location St, My City";
  restaurant.staff.personalityHire = {
    name: "Reatlilwe Maroga",
    "phone number": "011-222-2222"
  };

  delete restaurant.website;

  console.log(restaurant);

  //challenge 3 & 4

  const menu = {
    pasta: 80.00,
    prawns: 100.00,
    sushi: 75.50,
    pizza: 120.00,
    order: function(items)
{
  let total = 0;
  for (let i = 0; i < items.length; i++){
    const item = items[i];
    if (this[item]) {
      total += this[item];
    } 
  }
  return total;
}  };

restaurant.menu = menu;

console.log(menu.order(["pasta", 'sushi','pizza']))

console.log(restaurant.menu.order(["pasta","burger"]));


