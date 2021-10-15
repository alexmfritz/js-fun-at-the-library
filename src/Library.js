function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, shelf) {
  var noCheckOut = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  var checkOut = `You have now checked out ${title} from the ${library.name}`;
  for (var i = 0; i < library.shelves[shelf].length; i++) {
    if (title === library.shelves[shelf][i].title) {
      library.shelves[shelf].splice(i, 1);
      return checkOut;
    }
  }
  return noCheckOut;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
