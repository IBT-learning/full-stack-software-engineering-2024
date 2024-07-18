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
//challenge #1 Accessing data
 console.log(restaurant.name);
 console.log(restaurant.tags[2]); 
 console.log(restaurant.staff.chef.name);

 //challenge #2 Updating data
   restaurant.address = "Muindi Bingu st,10100. Nairobi"

   restaurant.staff.CTO = {
        name: "Bilha Samuel",
        "phone number": "986-245-3457",
   }
   
   delete restaurant.website
   console.log(restaurant);
//Challenge#3 Creating a new object
const menu = {
    items: {
      fries: 150,
      goat: 350,
      juice: 100,
      chapati: 50,
      chicken: 500,
    },   

//Challenge#4 Creating an object method    
    order(orderItems) {
      let total = 0;
      
      for (let item of orderItems) {
        if (this.items[item] !== undefined) {
          total +=  this.items[item];
        } else {
          console.log(`${item} not found on menu.`);
        }
      }
      
      return total;
    }
  };
  
  console.log(menu.order(["goat", "fries"])); 
  console.log(menu.order(["burger", "juice", "chicken"]));
   
   

   
  
 
