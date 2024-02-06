// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
  constructor(title, genre, year, artist, length) {
    super(title, genre, year);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }

  static shortestAlbum(music) {
    let shortest;

    for (let i = 0; i < music.length; i++) {
      if (music[0]) {
        shortest = music[i];
      } else if (music[i].length < shortest) {
        shortest = music[i];
      }
    }

    return shortest;
  }
}

// don't change below
module.exports = Music;
