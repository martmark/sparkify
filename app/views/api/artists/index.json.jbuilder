@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :small_image_url
    json.followed current_user.followed_artists.include?(artist)
  end
end