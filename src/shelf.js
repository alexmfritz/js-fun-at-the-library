
function shelfBook(bookName, sciFiShelf) {
  sciFiShelf.unshift(bookName);
}

function unshelfBook(bookName, sciFiShelf) {
  sciFiShelf.shift(bookName);
}


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
