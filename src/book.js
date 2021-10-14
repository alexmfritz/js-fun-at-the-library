function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter;
};

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews;
  } else {
    reviews.push(review);
  }
  return reviews;
}
// function saveReview(review, reviews) {
//   if (reviews.length === 0) {
//     reviews.push(review);
//   } else {
//       for (var i = 0; i < reviews.length; i++) {
//         if (reviews[i] !== review) {
//           reviews.push(review);
//           return reviews;
//         } else {
//           return reviews;
//         }
//       }
//     }
//   };

function calculatePageCount(bookTitle) {
  var bookTitle = bookTitle;
  bookPageCount = (bookTitle.length * 20);
  return bookPageCount;
};

function writeBook(bookTitle, bookCharacter, book) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy"
  }
  return book;
};

function editBook(book) {
  return (book.pageCount *= .75);
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
