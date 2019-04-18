export const fetchAlbum = id => {
  return $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  })
}