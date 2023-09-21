const songs = [
  {
    code: 1,
    title: "Yo quiero bailar",
    artist: "Sonia y Selena",
    genre: "Pop",
    duration: 190,
    year: 2002,
    wasHit: true,
  },
  {
    code: 2,
    title: "La bomba",
    artist: "King Africa",
    genre: "Pop Latino",
    duration: 121,
    year: 2000,
    wasHit: true,
  },
  {
    code: 3,
    title: "Gasolina",
    artist: "Dady Yankee",
    genre: "Reggetóng",
    duration: 210,
    year: 2005,
    wasHit: true,
  },
  {
    code: 4,
    title: "Dos hombres y un destino",
    artist: "David Bisbal y Alex Casademunt",
    genre: "Pop",
    duration: 230,
    year: 2003,
    wasHit: false,
  },
  {
    code: 5,
    title: "Obsesión",
    artist: "Aventura",
    genre: "Bachata",
    duration: 160,
    year: 1998,
    wasHit: true,
  },
  {
    code: 6,
    title: "Que la detengan",
    artist: "Dabid Cibera",
    genre: "Pop Latino",
    duration: 230,
    year: 1995,
    wasHit: false,
  },
];

const addSongToTheList = (song) => songs.push(song);

const deleteSongFromTheListByTitle = (songTitle) =>
  songs.splice(songs.map((song) => song.title).indexOf(songTitle), 1);

const getFullSongFromTheListByName = (songTitle) =>
  songs.find((song) => song.title === songTitle);

const getAllSongsFromAGenre = (songList, genre) =>
  songList.filter((song) => song.genre === genre);

const getAllHitSongsFromAList = (songList) =>
  songList.filter((song) => song.wasHit).length;

const getSortedListByYear = (songList) =>
  songList.toSorted((song1, song2) => song1.year - song2.year);

const getSongTitles = (songList) => songList.map((song) => song.title);

const getAverageDuration = (songList) => {
  let totalDuration = 0;
  songList.forEach((song) => (totalDuration = totalDuration + song.duration));
  return totalDuration / songList.length;
};
