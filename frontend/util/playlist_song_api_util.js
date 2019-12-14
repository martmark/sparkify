export const addPlaylistSong = playlistSong => {
  return $.ajax({
    url: '/api/playlist_songs',
    method: 'POST',
    data: playlistSong
  });
};

export const removePlaylistSong = playlistSong => {
  return $.ajax({
    url: '/api/playlist_songs/1',
    method: 'DELETE',
    data: playlistSong
  });
};