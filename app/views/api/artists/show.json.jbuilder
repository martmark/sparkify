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
    json.partial! 'api/songs/song', song: song
  end
end
