// import the Media class:
const Media = require('./Media')
// create your Movie class:

class Movie extends Media{
    constructor(director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    
    summary(){
        return `${this.title}, Director: ${this.director}, Year: ${this.year}, Genre:${this.genre}, Duration: ${this.duration}, 
        Rating: ${this.rating}`
    }


    static longestMovie(obj){
        return Math.max(obj.duration)
    }
}






// don't change below
module.exports = Movie;