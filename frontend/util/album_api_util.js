export const fetchAlbum = id => {
  return $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  });
};

export const fetchAlbums = fetchtype => {
  return $.ajax({
    url: '/api/albums',
    method: 'GET',
    data: fetchtype
  });
};

export const followAlbum = id => {
  return $.ajax({
    url: `/api/albums/${id}/follow`,
    method: 'POST'
  });
};

export const unfollowAlbum = id => {
  return $.ajax({
    url: `/api/albums/${id}/unfollow`,
    method: 'DELETE'
  });
};