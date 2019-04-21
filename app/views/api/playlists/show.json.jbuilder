json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @playlist.songs
  json.songs do
    @playlist.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
else
  json.songs {}
end