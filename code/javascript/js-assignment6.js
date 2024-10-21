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

// Challenge #1: Accessing Data
console.log(restaurant.name)
console.log(restaurant.tags[2])
console.log(restaurant.staff.chef.name)

for(food of restaurant.tags){
    console.log(food)
}

// Challenge #2: Updating Data
restaurant.address="Negble-Street Akatsi, Ghana V/R"
console.log(restaurant.address)
restaurant.staff ["accountant"]=
     {
        name: "Benjamin",
        "phone number":"233-465-9989",
    }

delete restaurant.website
console.log(restaurant)

//Challenge #3 and Challenge #4: Creating a new object and Creating an object method

const menu={
    jollof: 5.0,
    chicken: 4.5,
    chips: 6.0,
    pizza: 3.5,

    order: function(array){
        let total =0
        for(item of array){
            if(this[item] !==undefined)
             total +=this[item]
        }
        return total
    },

}
console.log(menu.order(["jollof", "chips"]))//11
console.log(menu.order(["pizza", "chicken", "chips"]))//14

//Extra Challenge
restaurant["menu"]=menu
console.log(restaurant)

console.log(restaurant.menu.order(["pizza","chips", "chicken","jollof"]))//19