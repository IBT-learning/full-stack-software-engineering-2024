function greeting(firstName, status) {
    let friend = "friend"
    let enemy = "enemy"
    let stranger = "stranger"
   if (status == friend) {
    return `Hello ${firstName}!`
   } 
   else { if (status == enemy) {
    return `Go away ${firstName}!`

   }
   else {
    return `I will call police on you!`
   }
   }
   
}
console.log(greeting("Superman", "friend"));
console.log(greeting("Lex Luthor", "enemy"));
console.log(greeting("Faith", "stranger" ));