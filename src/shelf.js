
function shelfBook(book, shelf) { // declare a function that takes in a book and adds it to the appropriate genre's shelf, as long as the shelf isn't too fully
  if (shelf.length < 3) { // test to see if the shelf being added to isn't too full
    shelf.unshift(book); // add the book in the correct order (front of array) because assert.equal shows the specific order
  };
};

function unshelfBook(book, shelf) { // declaring a function to remove a book from the shelf based on the title passed into the function and the specific genre/shelf it was on
  for(var i = 0; i < shelf.length; i++) { // loop through the shelf array
    if (book === shelf[i].title) { // if the string title passed into the function is exactly equal to the index location of the shelf array
      shelf.splice(i, 1); // we must splice the book from the index because the order the function is invoked in the test is not the exact order of L-R or R-L through the array
    };
  };
};

function listTitles(shelf) { // declare a function that will loop through a shelf, take the names from the books at each index, and join them into a single string
  var titles = []; // declare a local variable that is an empty array to put the titles into as separate elements
  for (var i = 0; i < shelf.length; i++) { // loop through the shelf array
    titles.push(shelf[i].title); // add the title of that book at the index location into the new array titles
  };
  var titleString = titles.join(", "); // declare a new variable assigned to the previous titles array but join them together with a single comma separating each word
  return titleString; // return the new variable of one long string
};

function searchShelf(shelf, book) { // declare a function that searches the shelf for a title that is specific to the title that is passed to the function at invocation
  for(var i = 0; i < shelf.length; i++) { // loop through the shelf array
    if (book === shelf[i].title) { // check if the passed book title is exactly equal to the title of the index location within the loop
      return true; // if it is, return true to the test
    }
  }
  return false; // after the loop as finished checking the shelf array, return false to the test
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

// function shelfBook(book, shelf) {
//   if (book.genre === "sciFi" && shelf.length < 3) {
//     shelf.unshift(book);
//     return shelf;
//   }
// }
//
// function unshelfBook(book, shelf) {
//   for (var i = 0; i< shelf.length; i++) {
//     if (book === shelf[i].title) {
//       shelf.splice(i, 1);
//     }
//   }
// }
//
// function listTitles(shelf) {
//   var title = [];
//   for (var i = 0; i < shelf.length; i++) {
//     shelf.push(shelf[i].title);
//   }
//   titleString = title.join(", ");
//   return title;
// }
//
// function searchShelf(shelf, title) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (shelf[i].title === title) {
//       return true;
//     }
//   }
//   return false;
// }
