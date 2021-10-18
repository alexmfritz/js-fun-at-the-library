class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };
  greetPatron(name, ifMorning) {
    var morning = ifMorning;
    if (morning === true) {
      return `Good morning, ${name}!`;
    } else { 
      return `Hello, ${name}!`;
    }
  };
  findBook(book) {
    for(var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (book === this.library.shelves.fantasy[i].title) {
        this.library.shelves.fantasy.splice(i, 1)
        return `Yes, we have ${book}`;
      }
    }
    for(var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if (book === this.library.shelves.nonFiction[i].title) {
        this.library.shelves.nonFiction.splice(i, 1)
        return `Yes, we have ${book}`;
      }
    }
    for(var i = 0; i < this.library.shelves.fiction.length; i++) {
      if (book === this.library.shelves.fiction[i].title) {
        this.library.shelves.fiction.splice(i, 1)
        return `Yes, we have ${book}`;
      }
    }
    return `Sorry, we do not have ${book}`;
  }
  calculateLateFee(fee) {
    return Math.ceil(fee * .25);
  }
};

module.exports = Librarian;
