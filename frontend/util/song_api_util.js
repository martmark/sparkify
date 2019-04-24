export const fetchSongs = fetchType => {
  return $.ajax({
    url: '/api/songs',
    method: 'GET',
    data: fetchType
  });
};

export const followSong = id => {
  return $.ajax({
    url: `/api/songs/${id}/follow`,
    method: 'POST'
  });
};

export const unfollowSong = id => {
  return $.ajax({
    url: `/api/songs/${id}/unfollow`,
    method: 'DELETE'
  });
};