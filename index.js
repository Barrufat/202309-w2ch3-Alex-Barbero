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
    wasHit: true,
  },
];

const addSongToTheList = (song) => {
  songs.push(song);
  return songs;
};

const deleteSongFromTheListByName = (selectedSong) => {
  const filteredSongs = songs.filter((song) => song.title !== selectedSong);
  return filteredSongs;
};
