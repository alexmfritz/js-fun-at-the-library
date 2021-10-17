
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  };
};

function unshelfBook(book, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
    };
  };
};

function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  };
  var titleString = titles.join(", ");
  return titleString;
};

function searchShelf(shelf, book) {
  for(var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      return true;
    };
  };
  return false;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
