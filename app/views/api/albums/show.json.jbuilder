json.album do
  json.id @album.id
  json.title @album.title
  json.artistName @album.artist.name
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