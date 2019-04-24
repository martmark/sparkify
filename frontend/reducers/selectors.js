export const artistShowSongsSelector = (state, artistId) => {
  let songs = Object.values(state.entities.songs).filter(song => song.artistId === artistId);
  let artistSongs = [];
  while (artistSongs.length < 5) {
    let song = songs.sample;
    if (!artistSongs.includes(song)) artistSongs.push(song);
  }
  return artistSongs;
};

export const userPlaylistSelector = (state) => {
  let currentUserId = state.session.currentUserId;
  let playlists = Object.values(state.entities.playlists)
    .filter(playlist => playlist.user_id === currentUserId);
  return playlists;
};