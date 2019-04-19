json.artist do
  json.id @artist.id
  json.name @artist.name
  json.bio @artist.bio
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.title
      json.artistName album.artist.name
    end
  end
end

json.songs do
  @artist.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.duration song.duration
      json.artistName song.artist.name
      json.albumTitle song.album.title
      json.albumId song.album_id
    end
  end
end
