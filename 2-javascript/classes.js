class Medal {
  constructor(sport, level, year) {
    this.sport = sport;
    this.level = level;
    this.year = year;
  }
}

class Olympian {
  constructor(fullName, sport, country) {
    this.name = fullName;
    this.sport = sport;
    this.country = country;
    this.yearsCompeted = [];
    this.medals = [];
  }

  describe() {
    return `${this.name} is an athlete in the sport of ${this.sport}. \
She has competed in ${this.yearsCompeted.length} Olympics. \
She has won ${this.medals.length} medals.
    `;
  }

  compete(year, medal) {
    if (medal) {
      const newMedal = new Medal(this.sport, medal, year);
      this.medals.push(newMedal);
    }

    if (!this.yearsCompeted.includes(year)) {
      this.yearsCompeted.push(year);
    }
  }
}

const faith = new Olympian("Faith Kipyegon", "running", "Kenya");
const katie = new Olympian("Katie Ledecky", "swimming", "USA");
const simone = new Olympian("Simone Biles", "gymnastics", "USA");

// faith.yearsCompeted.push(2012, 2016, 2020);
faith.compete(2012);
faith.compete(2016, "gold");
faith.compete(2020, "gold");

katie.compete(2012, "gold");

katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "gold");
katie.compete(2016, "silver");

katie.compete(2020, "gold");
katie.compete(2020, "gold");
katie.compete(2020, "silver");
katie.compete(2020, "silver");
katie.compete(2020);

console.log(katie);
console.log(katie.describe());

console.log(faith);
console.log(faith.describe());
