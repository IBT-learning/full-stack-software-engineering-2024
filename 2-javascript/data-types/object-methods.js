const countries = {
    us: "United States",
    sa: "South Africa",
    gh: "Ghana",
    ng: "Nigeria",
    ke: "Kenya",
    gb: "Great Britain",
    fr: "France",

    display() {
        // loop through the properties of this object ("this")
        for (country in this) {
            // if the value isn't a function, log it
            if (typeof this[country] !== "function") {
                console.log(`${country}: ${countries[country]}`)
            }
        }
    },

    friendlyCompetition(country1, country2) {
        // 'this' keyword refers to this whole object
        // console.log(this)

        // if they are both valid countries
        if (this._errorHandling(country1) && this._errorHandling(country2)) {
            // randomly choose a winner
            if (Math.random() > 0.5) {
                return `${this[country1]} wins against ${this[country2]} in a friendly competition`
            }
            return `${this[country2]} wins against ${this[country1]} in a friendly competition`
        } else {
            return "Nice try though"
        }
    },

    war(country1, country2) {
        /* 
            psuedo-code
            if country1 is france or great britain
                return country2 wins
            if country2 is france or great britain
                return country1 wins
            else friendlyCompetition(country1, 2)
        */

        if (country1 == "gb" || country1 == "fr") {
            return `${this[country2]} wins against ${this[country1]}`
        } else if (country2 == "gb" || country2 == "fr") {
            return `${this[country1]} wins against ${this[country2]}`
        } else {
            return this.friendlyCompetition(country1, country2)
        }
    },

    _errorHandling(countryCode) {
        // starting a method name with an underscore is an indicator that it is "private"
        // private methods are intended for use within the object, not to be accessed from outside
        // some languages enforce this, JS will not (but it's still useful for communication)
        if (Object.keys(this).includes(countryCode)) {
            return true
        }
        console.log(`${countryCode} is not included in this directory`)
        return false
    },
}

console.log(this) // {} (this file, or "module", is an empty object)

console.log(countries.display())
console.log(countries.friendlyCompetition("sa", "us")) // random outcome (United States wins against South Africa in a friendly competition)
console.log(countries.war("ke", "gb")) // Kenya wins against Great Britain
console.log(countries.war("fr", "gh")) // Ghana wins against France
console.log(countries.war("ng", "gh")) // random outcome (Nigeria wins against Ghana in a friendly competition)

console.log(countries.war("ng", "de")) // de is not included in this directory
// Nice try though

console.log(countries._errorHandling("dn")) // dn is not included in this directory
// false

// You can technically access methods with bracket notation
// but you usually won't
let battle = "war"
console.log(countries[battle]("sk", "pd"))
