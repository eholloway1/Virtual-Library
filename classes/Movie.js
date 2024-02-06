// import the Media class:
const Media = require('./Media')
// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`

    }



    
    //static method
    static longestMovie(Movies){
        let current = new Movie("", "", "", "", "", "")
       for(let i = 0; i < Movies.length; i++){
        if(Movies[i].duration > current.duration){
            current = Movies[i]
        }
       }
       return current
    }
    
}






// don't change below
module.exports = Movie;