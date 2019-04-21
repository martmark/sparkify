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