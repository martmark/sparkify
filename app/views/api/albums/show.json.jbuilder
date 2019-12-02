json.album do
  json.partial! 'api/albums/album', album: @album, artist: @album.artist
end

if @album.songs
  json.songs do
    @album.songs.each do |song|
      json.set! song.id do
        artist = song.artist
        json.partial! 'api/songs/song', song: song, artist: artist, album: @album
        json.followed @followed_song_ids.include?(song.id)
      end
    end
  end
else
  json.songs {}
end