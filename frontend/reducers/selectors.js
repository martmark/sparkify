export const userPlaylistSelector = (state) => {
  let currentUserId = state.session.currentUserId;
  let playlists = Object.values(state.entities.playlists)
    .filter(playlist => playlist.user_id === currentUserId);
  return playlists;
};