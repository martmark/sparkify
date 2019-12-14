export const fetchPlaylists = (fetchType) => {
  return $.ajax({
    url: '/api/playlists',
    method: 'GET',
    data: fetchType
  })
}

export const fetchPlaylist = id => {
  return $.ajax({
    url: `/api/playlists/${id}`,
    method: 'GET'
  })
}

export const createPlaylist = playlist => {
  return $.ajax({
    url: '/api/playlists',
    method: 'POST',
    data: { playlist }
  })
}

export const updatePlaylist = playlist => {
  return $.ajax({
    url: `/api/playlists/${playlist.id}`,
    method: 'PATCH',
    data: { playlist }
  })
}

export const deletePlaylist = id => {
  return $.ajax({
    url: `/api/playlists/${id}`,
    method: 'DELETE'
  })
}

export const followPlaylist = id => {
  return $.ajax({
    url: `/api/playlists/${id}/follow`,
    method: "POST"
  });
};

export const unfollowPlaylist = id => {
  return $.ajax({
    url: `/api/playlists/${id}/unfollow`,
    method: "DELETE"
  });
};