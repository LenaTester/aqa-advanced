import { Book } from "./Book.js"
import { Ebook } from "./EBook.js"

// creation of Book instances
const firstBook = new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
const secondBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925)
const thirdBook = new Book('The Adventures of Huckleberry Finn', 'Mark Twain', 1884)
// creation of EBook instance
const firstEbook = new Ebook ('The Catcher in the Rye', 'J.D. Salinger', 1951, '.pdf')

// calling printInfo method for book instances
firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()

// calling printInfo method for electronic book instances
firstEbook.printInfo()

// changing values and receiving updated EBook instance
firstEbook.showTitle = 'The Catcher in the Rye / 2nd edition'
firstEbook.showAuthor = 'Jerome David Salinger'
firstEbook.showYear = 1991
firstEbook.showFileFormat = '.epub'
firstEbook.printInfo()

// selecting the oldest books from books array
const books = [firstBook, secondBook, thirdBook, firstEbook]
Book.oldestBook(books)

// transforming book to electronic book
Ebook.transformBook(secondBook, '.pdf')
