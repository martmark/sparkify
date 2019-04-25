export const fetchArtist = id => {
  return $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  });
};

export const fetchArtists = fetchType => {
  return $.ajax({
    url: `/api/artists`,
    method: 'GET',
    data: fetchType
  });
};

export const followArtist = id => {
  return $.ajax({
    url: `/api/artists/${id}/follow`,
    method: "POST"
  });
};

export const unfollowArtist = id => {
  return $.ajax({
    url: `/api/artists/${id}/unfollow`,
    method: 'DELETE'
  });
};