json.extract! @user, :id, :username
json.followed_song_ids @user.followed_song_ids
json.followed_artist_ids @user.followed_artist_ids
json.followed_album_ids @user.followed_album_ids
json.followed_playlist_ids @user.followed_playlist_ids