json.set! @song.id do
  json.partial! 'api/songs/song', song: @song, artist: @song.artist, album: @song.album
  json.followed @followed_song_ids.include?(@song.id)
end