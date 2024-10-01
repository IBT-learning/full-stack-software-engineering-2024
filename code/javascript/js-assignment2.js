//Challenge #1
const personAge = Math.floor(Math.random() * 101)
const isAdult = personAge >= 18
const isElderly = personAge >= 60
const status = `Is this person an adult?\n ${isAdult}. Is this person elsderly? ${isElderly}`
console.log(`The age is: ${personAge}`)
console.log(status)

if (personAge < 18) {
  console.log("This person is a child")
} else if (personAge < 60) {
  console.log("This person is an adult")
} else {
  console.log("This person is elderly")
}

console.log("\n#############\n")

//Challenge #2

const lyric=`I was ridin' shotgun with my hair undone
In the front seat of his car
He's got a one-hand feel on the steerin' wheel
The other on my heart
I look around, turn the radio down
He says, "Baby, is somethin' wrong?"
I say, "Nothin', I was just thinkin'
How we don't have a song"
And he says

Our song is the slammin' screen door
Sneakin' out late, tappin' on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date, "Man, I didn't kiss her, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again

I was walkin' up the front porch steps
After everything that day
Had gone all wrong, had been trampled on
And lost and thrown away
Got to the hallway, well on my way
To my lovin' bed
I almost didn't notice all the roses
And the note that said

Our song is the slammin' screen door
Sneakin' out late, tappin' on your window
When we're on the phone and you talk real slow
'Cause it's late and your mama don't know
Our song is the way you laugh
The first date, "Man, I didn't kiss her, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again

Da-da-da, da

I've heard every album, listened to the radio
Waited for somethin' to come along
That was as good as our song

'Cause our song is the slammin' screen door
Sneakin' out late, tappin' on his window
When we're on the phone and he talks real slow
'Cause it's late and his mama don't know
Our song is the way he laughs
The first date, "Man, I didn't kiss him, and I should have"
And when I got home, 'fore I said amen
Askin' God if he could play it again
Play it again
Oh, yeah
Oh, oh, yeah

I was ridin' shotgun with my hair undone
In the front seat of his car
I grabbed a pen and an old napkin
And I wrote down our song`
const includeLove=lyric.includes("love")
const includeHeart=lyric.includes("heart")
const includeBaby=lyric.includes("baby")
const includeYeah=lyric.includes("yeah")
const isTypical=includeLove||includeHeart||includeBaby||includeYeah
const isVeryTypical=includeLove&&includeHeart&&includeBaby&&includeYeah
console.log(`Is this song typical? ${isTypical}\n Is this song very typical?${isVeryTypical}`)

if(isTypical){
    console.log("This song is typical")
    console.log("")
}else if(isVeryTypical){
    console.log("This song is very typical")
}else{
    console.log("This song is not typical")
}