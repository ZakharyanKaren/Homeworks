let Playlist = function () {
  this.songs = [];
  this.arrayIndex = 0;

  this.add = (song) => {
    this.songs.push([song.name, song.group]);
  };

  this.play = () => {
    return `${this.songs[this.arrayIndex][0]} started to play`;
  };

  this.next = () => {
    if (this.arrayIndex === this.songs.length - 1) {
      this.arrayIndex = 0;
      return `${this.songs[this.songs.length - 1][0]} stopped, ${
        this.songs[this.arrayIndex][0]
      } started`;
    } else this.arrayIndex++;

    return `${this.songs[this.arrayIndex - 1][0]} stopped, ${
      this.songs[this.arrayIndex][0]
    } started`;
  };

  this.stop = () => {
    return `${this.songs[this.arrayIndex][0]} stopped`;
  };
};

let Song = function (songName, groupName) {
  this.name = songName;
  this.group = groupName;
  Playlist.call(this);
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
