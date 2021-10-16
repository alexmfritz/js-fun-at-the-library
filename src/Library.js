
function createLibrary(name) { // declare a function that creates an library object containing nested data
  var library = { // library object
    name: name, // takes the parameter name
    shelves: { // has shelf property
      fantasy: [], // nested fantasy property is an array
      fiction: [], // nested fiction property is an array
      nonFiction: [], // nested nonFiction property is an array
    },
  };
  return library; // return the library object to the test
};

function addBook(library, book) { // declare a function that adds a book the correct library shelf
  library.shelves[book.genre].push(book); // using both bracket notation and shelf notation to access the object library shelves property, and then the specific genre of the book being passed, and then adding the book that is passed
};

function checkoutBook(library, title, shelf) { // declaring a function that will check if a book is available for checkout based on the information passed at incovation and then return a different message based on if it exists
  var checkOut = `You have now checked out ${title} from the ${library.name}`; // creating a string that will be used to inform the person they successfully checked out a book
  var noCheckOut = `Sorry, there are currently no copies of ${title} available at the ${library.name}`; // creating a string that will be used to inform the person they were not able to successfully check out a book
  for(var i = 0; i < library.shelves[shelf].length; i++) { // looping through the array of the library shelves based on the genre/shelf that is passed at function invocation
    if (title === library.shelves[shelf][i].title) { // checking to see if the book title that is passed at function invocation is exactly equal to the title of the book in the specific genre of the library shelves
      library.shelves[shelf].splice(i, 1); // if true, take that book from the shelf
      return checkOut; // return the message on that they successfully checked out the book
    };
  };
  return noCheckOut; // if not, return the message the book requested was unsuccessful
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
