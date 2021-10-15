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
  findBook(book) {
    
  }
}

module.exports = Librarian;
