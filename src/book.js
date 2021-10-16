
function createTitle(title)  {
return `The ${title}`;

function buildMainCharacter(name, age, pronouns) {
var mainCharacter = {
  name: name,
  age: age,
  pronouns: pronouns,
};
return mainCharacter;
};

function saveReview(newReview, reviews) {
  for(var i = 0; i < reviews.length; i++) {
    if (newReview === reviews[i]){
      return reviews;
    };
  };
  return reviews.push(newReview);
};
// function saveReview(review, reviews) {
//   if (reviews.includes(review)) {
//     return reviews;
//   } else {
//     reviews.push(review);
//   }
//   return reviews;
// }

function calculatePageCount(title) {
  return (title.length * 20);
};

function writeBook(title, mainCharacter, book) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: book,
  };
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
