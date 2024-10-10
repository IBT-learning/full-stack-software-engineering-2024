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

// CHALLENGE 1
// PART A
console.log(restaurant.name);
console.log(restaurant.tags[2]);
console.log(restaurant.staff.chef.name);

// PART B
//console.log(restaurant.tags);   //[ 'pizza', 'family', 'dine-in', 'take-out', 'arcade' ]
// tagNames = restaurant.tags
const tagNames = ['pizza', 'family', 'dine-in', 'take-out', 'arcade']
for (value of tagNames) {
    console.log(value);
}

// or
for (let i = 0; i < tagNames.length; i++) {
    const names = tagNames[i]; 
    console.log(names);   
}

// CHALLENGE 2
// PART A
restaurant.address = "Ground Floor, Galana Plaza, Galana Road, Off Argwings Khodhek, Road, Nairobi"

// PART B
const newStaff = {name: "Matilda", "phone number": "321-672-0000"}
restaurant.staff.waiter = newStaff

// or
restaurant.staff.waiter = {name: "Matilda", "phone number": "321-672-0000"}

// PART C
delete restaurant.website

// PART D
console.log(restaurant);

// CHALLENGE 3/ 4
const menu = {
    fries: 200,
    hotdog: 120,
    sausage: 50,
    samosa: 25,

    order() {
        
    }
}




 






