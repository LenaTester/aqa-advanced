import { Book } from './Book.js';

// creation of electronic book class
export class Ebook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  // creation of getter and setter for eletronic book specific values
  get showFileFormat() {
    return this._fileFormat;
  }

  set showFileFormat(value) {
    if (typeof value !== 'string') {
      console.log('File format should be a string');
    }
    return (this._fileFormat = value);
  }

  // printing info about electonic book
  printInfo() {
    super.printInfo() + console.log(`File format: ${this._fileFormat}`);
  }

  // transforming book into electronic book
  static transformBook(book, fileFormat) {
    console.log(new Ebook(book._title, book._author, book._year, fileFormat));
  }
}
