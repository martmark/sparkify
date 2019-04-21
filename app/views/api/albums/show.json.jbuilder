json.album do
  json.partial! 'api/albums/album', album: @album
end

if @album.songs
  json.songs do
    @album.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
else
  json.songs {}
end