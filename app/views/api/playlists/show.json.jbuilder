json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
  json.followed @followed_playlist_ids.include?(@playlist.id)
end

if @playlist.songs
  json.songs do
    @playlist.songs.each do |song|
      json.set! song.id do
        artist = song.artist
        album = song.album
        json.partial! 'api/songs/song', song: song, artist: artist, album: album
        json.followed @followed_song_ids.include?(song.id)
      end
    end
  end
else
  json.songs {}
end