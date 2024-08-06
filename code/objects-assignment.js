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

  //challenge 1
  console.log(restaurant.name);
  console.log(restaurant.tags[2]);
  console.log(restaurant["staff"]["chef"]["name"]);

//   for (tags in restaurant) {
//     if (tags === "tags") {
//       for (tag of restaurant.tags) {
//         console.log(tag);
//       }
//     }
//   }

  if ("tags" in restaurant) {
    for (tag of restaurant.tags) {
      console.log(tag);
    }
  }

//    for (tag of restaurant.tags) {
//      console.log(tag);
//    }


// challenge 2
restaurant.address = "7 Gaa street, Sabo, Abeokuta, Ogun State";
restaurant.staff["asstManager"] = {
    name: "Adam",
    "phone number": "230-902-527"
}


// Object.assign(restaurant.staff, {
//     asstManager: {
//         name: "Adam",
//         "phone number": "230-902-527"
//     }
// })

delete restaurant.website
console.log(restaurant);


// challenge 3
const menu = {
    amala: 200.0,
    eba: 200.0,
    iyan: 300.0,
    ogufe: 1000.0,
    eranIgbe: 1500.0,
    gbegiri: 0.0,
    ewedu: 0.0,
}


// challenge 4
const ordering = ["eba", "eranIgbe", "ewedu"]
 menu.order = function (myOrder) {
         let total = 0
         for (let i = 0; i < myOrder.length; i++) {
             total += this[myOrder[i]]
         }
         return total
 }
//  console.log(menu.order(ordering));

// extra challenge
restaurant.menu = menu
console.log(restaurant.menu.order(ordering))

menu.order = function (ordered) {
  let total = 0
  const list = Object.keys(this)

  for (let i = 0; i < ordered.length; i++) {
    if (list.includes(ordered[i])) {
      total += this[ordered[i]]
    }
  }
  return total
}

const newOrder = ["eba", "eranIgbe", "ewedu", "efo-riro", "fufu", "tuwo"]
console.log(menu.order(newOrder))
