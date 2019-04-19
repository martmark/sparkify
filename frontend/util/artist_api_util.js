export const fetchArtist = id => {
  return $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  });
};