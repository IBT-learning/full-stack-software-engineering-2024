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
  console.log(restaurant.name)
  console.log(restaurant.tags[2])
  console.log(restaurant.staff.chef.name)

  // CHALLENGE 2
  restaurant.address = "3, Alaafara estate, Eleyele, Ibadan"
  restaurant.staff.barrister = {
          name: "Vicky",
          "phone number": "234-444-6421",
  }
  delete restaurant.website

  console.log(restaurant)

  // CHALLENGE 3
  const menu = {
    burger: 10.5,
    fries: 5.7,
    coke: 2.4,
    fish: 15.0,

    order([menu1, menu2]){
        for (meal in this){
            if (typeof this[meal] !== "function"){
                return this[menu1] + this[menu2]
            }else if (typeof this[meal] !== "number"){
                return "This order is not available in the menu"
            }
        }
    },
  }
  console.log (menu.burger)
  console.log (menu.order(["burger", "fries"]))
  console.log (menu.order(["coke", "fish"]))
  console.log (menu.order(["coke", "burger"]))
  console.log (menu.order(["burger", "pepsi"]))

  //extra challenge
  restaurant.menu = menu
  console.log(restaurant.menu.order(["fish", "burger"]))