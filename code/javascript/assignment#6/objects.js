//CHALLENGE 1

const restaurant = {
    name: "Gigi's Pizza Shack",
    address: "8923 Main St, Abuja", 
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
      software_engineer: {
        name: "Daniel Ucheibe", "Phone number": "+2349054455995"
      }
    },
  };

  console.log(restaurant.name); //resturant name
  console.log(restaurant.website); //resturant website. (just practicing)
  console.log(restaurant.tags[2]);// start counting from zero (0, 1 , 2)
  console.log(restaurant.staff.chef.name);// like sub-section

  //i use 'for'
 for (let i = 0; i < restaurant.tags.length; i++) {
    
    console.log(restaurant.tags[i]);
    
 }
/*
 for (let i = 0; i < restaurant.staff.chef.name; i++)
     {console.log(restaurant.staff.chef.name[i]);
   
 }
 */

 //CHALLENGE 2

console.log(restaurant.staff.software_engineer.name);// Hiring myself
console.log(delete restaurant.website);// website delete
console.log(restaurant.address); // new address

//CHALLENGE 3
const menuBook = {rice: 200, beans:500, garr:700,};
console.log(menuBook);

//CHALLENGE 4
const menuBooks = {rice: 200, beans:500, garr:700,
Order: function name(items) {
let total = 0;
for (let i = 0; i < items.length; i++) {
if (this[items[i]])

{total += this[items[1]] 


// i am having difficulty with challenge 4//

    
}
console.log(items);
    
}
    
}};

