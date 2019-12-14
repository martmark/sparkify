json.artist do
    json.id @artist.id
    json.name @artist.name
    json.bio @artist.bio
    json.image_url @artist.image_url
    json.followed current_user.followed_artists.include?(@artist)
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album, artist: @artist
    end
  end
end

json.songs do
  @artist.songs.each do |song|
    json.set! song.id do
      album = song.album
      json.partial! 'api/songs/song', song: song, artist: @artist, album: album
      json.followed @followed_song_ids.include?(song.id)
    end
  end
end
