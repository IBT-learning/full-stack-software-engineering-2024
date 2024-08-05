const countries = {
    us: 'United States',
    sa: 'South Africa',
    gh: 'Ghana',
    ke: 'Kenya',
    ng: 'Nigeria',
    gb: 'Great Britain',
    fr: 'france',

    display() {
        for (country in this){
        if (typeof this[country] !== "function"){
            console.log(`${country}: ${countries[country]}`)
        }
        }
    },

    friendlyCompetition(country1, country2){

        if (this._errorHandling(country1) && this._errorHandling(country2)){
            if (Math.random() > 0.5){
                // 'this' keyword refers to this whole object
                return `${this[country1]} wins against ${this[country2]}`
            }
                return `${this[country2]} wins against ${this[country1]} in a friendly competition`
        }else {
            return "Nice try though"
        }
    },

    war(country1, country2){
        if (country1 == "gb" || country1 == "fr") {
            return `${this[country2]} wins against ${this[country1]}`
        }else if (country2 == "gb" || country2 == "fr"){
            return `${this[country1]} wins against ${this[country2]}`
        } else{
            return this.friendlyCompetition(country1, country2)
        }

        /*
            Pseudo-code
            if country1 is france or great britain
            return country2 wins
            else friendlyCompetition(country1, 2)
        */
    },

    _errorHandling(countryCode){
        // starting a method name with an underscore is an indk cator that it is "private"
        // private methods are intended for use within the object, not to be accessed from outside
        // some languages enforce this, JS will not

         if (Object.keys(this).includes(countryCode)) {
             return true
         }
         console.log(`${countryCode} is not in the directory`)
         return false
    }
  }
  console.log(this)
  console.log(countries.display())
  console.log(countries.friendlyCompetition("sa", "us"))
  console.log(countries.war("gb", "ng"))
  console.log(countries.war("ke", "fr"))
  console.log(countries.war("gh", "ng"))
  console.log(countries.friendlyCompetition("gb", "ge"))