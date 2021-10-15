
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

function listTitles(shelf) {
  var title = ``;
  for (var i = 0; i < shelf.length; i++) {
    if (i === 0) {
      title += shelf[i].title;
    } else {
      title += `, ` + shelf[i].title;
    }
  }
  return title;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
