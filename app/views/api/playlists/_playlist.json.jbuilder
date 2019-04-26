json.extract! playlist, :id, :title
json.authorName playlist.user.username
json.trackCount playlist.songs.count
json.songIds playlist.song_ids
json.image_url playlist.image_url
json.followed current_user.followed_playlists.include?(playlist)