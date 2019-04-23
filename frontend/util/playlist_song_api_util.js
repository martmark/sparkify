export const addPlaylistSong = playlistSong => {
  return $.ajax({
    url: '/api/playlist_songs',
    method: 'POST',
    data: playlistSong
  });
};

