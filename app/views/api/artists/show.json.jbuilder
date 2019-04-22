json.artist do
    json.id @artist.id
    json.name @artist.name
    json.bio @artist.bio
    json.image_url @artist.image_url
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end

json.songs do
  @artist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end
