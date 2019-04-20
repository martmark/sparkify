json.set! song.id do
  json.id song.id
  json.title song.title
  json.albumTitle song.album.title
  json.albumId song.album_id
  json.artistName song.artist.name
  json.artistId song.artist.id
  json.duration song.duration
end