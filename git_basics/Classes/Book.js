// creation of Book class

export class Book {
    constructor (title, author, year) {
        this._title = title 
        this._author = author
        this._year = year
    }

    // creation of getters and setters for book values
    get showTitle() {
        return this._title
    }

    set showTitle(value) {
        if (typeof value !== 'string') {
            console.log('Title should be a string')
        }
        return this._title = value
    }

    get showAuthor() {
        return this._author
    }

    set showAuthor(value) {
        if (typeof value !== 'string') {
            console.log('Author should be a string')
        }
        return this._author = value
    }

    get showYear() {
        return this._year
    }

    set showYear(value) {
        if (typeof value !== 'number') {
            console.log('Year should be a number')
        }
        return this._year = value
    }

// printing info about book
    printInfo () {
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`)
    }

    // checking the oldest book
    static oldestBook (books) {
        const years = []
        for (const book of books) {
            years.push(book._year)
        }
        const minYear = Math.min(...years)
        for (const book of books) {
            if (book._year == minYear) {
                console.log(book)
            }
        }
    }
    }




