json.set! song.id do
  json.id song.id
  json.title song.title
  json.albumTitle song.album.title
  json.albumId song.album_id
  json.artistName song.artist.name
  json.artistId song.artist.id
  json.duration song.duration
  json.followed current_user.followed_songs.include?(song)
  json.image_url song.album.image_url
end