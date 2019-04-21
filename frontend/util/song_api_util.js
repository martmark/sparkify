export const fetchSongs = fetchType => {
  return $.ajax({
    url: '/api/songs',
    method: 'GET',
    data: fetchType
  })
}