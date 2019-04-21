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