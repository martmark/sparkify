json.playlist do
  json.extract! @playlist, :id, :title
  json.authorName @playlist.user.username
end

if @playlist.songs
  json.songs do
    @playlist.songs.each do |song|
      json.set! song.id do
        json.id song.id
        json.title song.title
        json.duration song.duration
        json.artistName song.artist.name
      end
    end
  end
else
  json.songs {}
end