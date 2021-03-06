class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(bookshelfInstance) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let book of bookNames) {
      bookshelfInstance.addFavoriteBook(book);
    }
    bookshelfInstance.printFavoriteBooks();
  });
}

var BOOK_API = 'https://some.url/api';

var bookshelfInstance = new Bookshelf();

loadBooks(bookshelfInstance);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
    ]);
  }, 500);
}
