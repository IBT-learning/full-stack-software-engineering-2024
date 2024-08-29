const countries = {
  us: "United States",
  gh: "Ghana",
  ng: "Nigeria",
  ke: "Kenya",
  "g b": "Great Britain",
  fr: "France",

  // to use methods for an object, you write it after the key/value pairs before closing the curly bracket
  // similar to writing a function but without the function keyword
  display() {
    return "test";
  },
  friendlyCompetition(country1, country2) {
    winPercent = Math.floor(Math.random() * 100 + 1);
    console.log(winPercent);

    if (winPercent > 50) {
      return `${this[country1]} wins over ${this[country2]}`;
    }
    return `${this[country2]} wins over ${this[country1]}`;
  },
  war(country1, country2) {
    /*
    pseudo-code is english of what you imagine your code to be
    if country1 or country2 is france or great britain then country 2 wins
    else return friendlyCompetition
    */
    if (
      (country1 === "g b" && country2 === "fr") ||
      (country1 === "fr" && country2 === "g b")
    ) {
      return this.friendlyCompetition(country1, country2);
    } else if (country1 === "fr" || country1 === "g b") {
      return `${this[country2]} wins over ${this[country1]}`;
    } else if (country2 === "fr" || country2 === "g b") {
      return `${this[country1]} wins over ${this[country2]}`;
    } else {
      return this.friendlyCompetition(country1, country2);
    }
  },
  errorHandling(countryCode) {
    if (Object.keys(this).includes(countryCode)) {
      return true;
    } else {
      return false;
    }
  },
};

// countries.fr = "France"; // to add key/value pair to object

// console.log(countries.display()); //call an object method with the dot(.) notation
// console.log(countries.friendlyCompetition("gh", "us"));
// console.log(countries.war("fr", "gh"));
// console.log(countries.war("g b", "gh"));
// console.log(countries.war("us", "fr"));
// console.log(countries.war("us", "g b"));
// console.log(countries.war("g b", "fr"));

const habiba = {
  name: "Habiba Rain",
  birthPlace: "Nigeria",
  parents: {
    ma: {
      name: "Lady Rain",
      birthPlace: "London",
      job: {
        workPlace: "IRS",
        role: "Tax Officer",
      },
    },
    pa: {
      name: "Master Rain",
      birthPlace: "Texas",
    },
  },
  hobbies: [
    "reading",
    "baking",
    {
      sports: ["tennis", "golf"],
    },
    "baking",
  ],
};
