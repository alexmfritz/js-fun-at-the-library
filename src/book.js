
function createTitle(title)  { // declared a new function that takes the parameter title of a book
return `The ${title}`; // returns a modified title based on the argument passed into the function when invoked
}; // able to create many modified titles because function is dynamic (takes a parameter/argument)

function buildMainCharacter(name, age, pronouns) { // declared a new function that will create a dynamic character object based on information passed into the function (name, age, pronouns)
var mainCharacter = {
  name: name, // an argument of a string is passed at invocation, mapping to the parameter, which is the value of the name property
  age: age, // same concept as above
  pronouns: pronouns, // same concept as above
};
return mainCharacter; // test cannot pass until the information stored in the created object is returned to the program/test
};

function saveReview(newReview, reviews) { // declared a new function that will save a new review being passed into the reviews array
  for(var i = 0; i < reviews.length; i++) { // looping through the reviews array
    if (newReview === reviews[i]){ // checking if the newReview string being passed is at the current index of the loop
      return reviews; // if it is, stop and return array
    };
  };
  return reviews.push(newReview); // otherwise push it through
};

// function saveReview(review, reviews) {
//   if (reviews.includes(review)) {
//     return reviews;
//   } else {
//     reviews.push(review);
//   }
//   return reviews;
// }

function calculatePageCount(title) { // declare a function that takes in the title string and multiplies by 20
  return (title.length * 20); // return to the program the calculation of string length multipled by 20
};

function writeBook(title, mainCharacter, book) { // declare a function that creates a book object, taking in 3 different parameter/arguments built off of previous functions
  var book = {
    title: title, // title property contains a variable storing the createTitle function
    mainCharacter: mainCharacter, // mainCharacter property contains a variable storing the buildMainCharacter function
    pageCount: calculatePageCount(title), // pageCount property literally invokes the calculatePageCount function with the title from above
    genre: book, // genre property contains a variable storing the string of genre
  };
  return book; // returns the book object back to the test
};

function editBook(book) { // declare a function that takes in the book object
  return (book.pageCount *= .75); // multiples by .75 AND reassigns the new value of the book's pageCount property, returning it to the test
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
