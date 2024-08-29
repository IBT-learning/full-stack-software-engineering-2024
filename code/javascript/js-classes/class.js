class Olympian {
  constructor(fullName, sport, country, medal) {
    this.name = fullName;
    this.sport = sport;
    this.country = country;
    this.medal = medal;
  }
  describe() {
    return `${this.name} is a ${this.sport} athlete from ${this.country}`;
  }
}
const Feyi = new Olympian("Feyi Amusan", "swimming", "Nigeria", "bronze");
console.log(Feyi);
console.log(Feyi.describe());
