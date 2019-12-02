@playlists.each do |playlist|
  json.set! playlist.id do
    json.partial! 'api/playlists/playlist', playlist: playlist
    json.followed @followed_playlist_ids.include?(playlist.id)
  end
end