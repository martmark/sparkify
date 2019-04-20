json.playlist do
  json.extract! @playlist, :id, :title
  json.authorName @playlist.user.username
  json.trackCount @playlist.songs.count
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