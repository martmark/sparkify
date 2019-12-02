# json.set! song.id do
  json.id song.id
  json.title song.title
  json.albumTitle album.title
  json.albumId song.album_id
  json.artistName artist.name
  json.artistId artist.id
  json.duration song.duration
  # json.followed current_user.followed_songs.include?(song)
  json.image_url album.image_url
  json.track_url song.track_url
# end