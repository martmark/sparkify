json.album do
  json.id @album.id
  json.title @album.title
  json.artistName @album.artist.name
end

if @album.songs
  json.songs do
    @album.songs.each do |song|
      json.set! song.id do
        json.id song.id
        json.title song.title
        json.duration song.duration
        json.artistName song.artist.name
        json.albumTitle song.album.title
        json.albumId song.album_id
      end
    end
  end
else
  json.songs {}
end