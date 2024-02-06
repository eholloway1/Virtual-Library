// import the Media class:
const Media = require("./Media.js");

// create your Book class:
class Book extends Media{
    constructor(title, genre, year, author, numPages, rating){
        super(title, genre, year);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(Books){
        let temp = new Book("", "", 0, "", 0, -1);
        for(let i = 0; i < Books.length; i++){
            if(Books[i].rating > temp.rating){
                temp = Books[i];
            }
        }

        return temp;
    }

}
// don't change below
module.exports = Book;
