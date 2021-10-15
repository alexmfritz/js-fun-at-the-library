class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, ifMorning) {
    var morning = ifMorning;
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  calculateLateFee(fee) {
    return Math.ceil(fee * .25);
  }
}

module.exports = Librarian;
