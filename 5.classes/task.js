class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    this._state = value;
  }
}

class Magazine extends PrintEditionItem {
  constructor() {
    super();
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super();
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author) {
    super(author);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author) {
    super(author);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author) {
    super(author);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

 addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}
