json.extract! playlist, :id, :title
json.authorName playlist.user.username
json.trackCount playlist.songs.count
json.songIds playlist.song_ids
json.image_url playlist.image_url
json.userId playlist.user_id