class Librarian { // declaring a class of librarian
  constructor(name, library) { // constructor method containing the parameters of name and library
    this.name = name; // this.name property means owned by the librarian class
    this.library = library; // this.library property means owned by the librarian class
  };
  greetPatron(name, ifMorning) { // greetPatrong method containing the parameters of name and a boolean of morning
    var morning = ifMorning; // local variable created for ifMorning
    if (morning === true) { // testing if morning is true
      return `Good morning, ${name}!`; // if it is morning, return this statement
    } else { // if it's not morning
      return `Hello, ${name}!`; // return this statement instead
    }
  };
  findBook(book) { // findBook method containing the parameter of book
    for(var i = 0; i < this.library.shelves.fantasy.length; i++) { // loop through the length of the fantasy shelf
      if (book === this.library.shelves.fantasy[i].title) { // if the book being passed is exactly equal to the title property of the book of the current index location
        this.library.shelves.fantasy.splice(i, 1) // remove it from the fantasy shelf array
        return `Yes, we have ${book}`; // return a happy message
      }
    }
    for(var i = 0; i < this.library.shelves.nonFiction.length; i++) {// loop through the length of the nonFiction shelf
      if (book === this.library.shelves.nonFiction[i].title) {// if the book being passed is exactly equal to the title property of the book of the current index location
        this.library.shelves.nonFiction.splice(i, 1)// remove it from the nonFiction shelf array
        return `Yes, we have ${book}`; // return a happy message
      }
    }
    for(var i = 0; i < this.library.shelves.fiction.length; i++) {// loop through the length of the fiction shelf
      if (book === this.library.shelves.fiction[i].title) { // if the book being passed is exactly equal to the title property of the book of the current index location
        this.library.shelves.fiction.splice(i, 1) // remove it from the fiction shelf array
        return `Yes, we have ${book}`; // return a happy message
      }
    }
    return `Sorry, we do not have ${book}`; // if none of those books are available on those shelves, return a sad message
  }
  calculateLateFee(fee) { // calculateLateFee method takes in parameter of fee
    return Math.ceil(fee * .25); // calculates the fee of 25cents per day rounded to the nearest whole number (integer) using the Math.ceil method
  }
};

module.exports = Librarian;
