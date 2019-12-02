json.id album.id
json.title album.title
json.artistName artist.name
json.artistId artist.id
json.image_url album.image_url
json.trackCount album.songs.count
json.year album.year
json.followed current_user.followed_albums.include?(album)