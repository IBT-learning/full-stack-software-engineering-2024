// CHALLENGE 1
const personAge = Math.floor(Math.random () * 100)
const isAdult = Boolean ( personAge > 18 )
const isElderly = Boolean (personAge > 60 )

console.log (personAge)
console.log (isAdult)
console.log (isElderly)

if (personAge == 18 ) {
    console.log (" This person is an adult")
}
 else if (personAge >= 60){
    console.log ("This person is elderly")
} else if (personAge < 18) {
    console.log ("This person is a child")
}

// CHALLENGE 2

const lyric = "Here's a simple song, won't stop the rain from coming down or your heart from breaking"
const includesLove = lyric.includes ("love")
const includesHeart = lyric.includes ("heart")
console.log (includesHeart)
const includesLife = lyric.includes ("life")
const includesBaby = lyric.includes ("Baby")
const includesYeah = lyric.includes ("Yeah")

const isTypical = includesLove == true || includesHeart == true || includesLife == true || includesBaby == true || includesYeah == true

const isVeryTypical =  includesLove == true && includesHeart == true && includesLife == true && includesBaby == true && includesYeah == true

console.log (isTypical)
console.log (isVeryTypical)
if (isTypical == true) {
    console.log ("This song is typical")
} else if (isVeryTypical == true){
    console.log ("This song is very typical")
} else {
    console.log ("This song is not typical")
}
