export const artistShowSongsSelector = (state, artistId) => {
  let songs = Object.values(state.entities.songs).filter(song => song.artistId === artistId);
  let artistSongs = [];
  while (artistSongs.length < 5) {
    let song = songs.sample;
    if (!artistSongs.includes(song)) artistSongs.push(song);
  }
  return artistSongs;
};