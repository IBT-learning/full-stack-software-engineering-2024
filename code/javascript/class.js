class Medal {
    constructor(sport, level, year) {
        this.sport = sport;
        this.level = level;
        this.year = year;
    }
}

class Olympian {
    constructor (fullName, sport, country){
        this.name = fullName;
        this.sport = sport;
        this.country = country;
        this.yearsCompeted = [];
        this.medals = [];
    }


    describe(){
        return `${this.name} is an athlete in the sport of ${this.sport}. \
She has competed in ${this.yearsCompeted.length} Olympics. \
She has won ${this.medals.length} medals`
    }

    compete(year, medal){
        if (medal){
            const newMedal = new Medal(this.sport, medal, year)
            this.medals.push(newMedal)
        }

        if (!this.yearsCompeted.includes(year)){
            this.yearsCompeted.push(year)
        }
        
    }
}

const simone = new Olympian("Simone Biles", "Gymnastics", "USA");

const faith = new Olympian("Faith Kipyegon", "running", "Kenya");

const tobi = new Olympian("Tobi Amusan", "running", "Nigeria")

// console.log(simone)
// console.log(simone.describe())

// console.log(tobi);
// console.log(tobi.describe())

faith.compete(2012)
faith.compete(2016, "gold")
faith.compete(2020, "gold")

console.log (faith)
console.log (faith.describe())

tobi.compete(2016)
tobi.compete(2020, "gold")
tobi.compete(2024, "gold")
console.log(tobi)
console.log(tobi.describe())

simone.compete(2008, "gold")
simone.compete(2008, "gold")
simone.compete(2008, "silver")
simone.compete(2012, "gold")
simone.compete(2012, "bronze")
simone.compete(2012, "silver")
simone.compete(2016, "gold")
simone.compete(2016, "silver")
simone.compete(2016, "gold")
simone.compete(2024, "gold")
simone.compete(2024, "gold")
console.log(simone)
console.log(simone.describe())