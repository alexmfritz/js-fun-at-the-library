
function shelfBook(book, shelf) {
  if (book.genre === "sciFi" && shelf.length < 3) {
    shelf.unshift(book);
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i< shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
}



module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
