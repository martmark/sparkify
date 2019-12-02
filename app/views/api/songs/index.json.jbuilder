@songs.each do |song|
  # debugger
  json.set! song.id do
    artist = song.artist
    album = song.album
    json.partial! 'api/songs/song', song: song, artist: artist, album: album
    json.followed @followed_song_ids.include?(song.id)
  end
end