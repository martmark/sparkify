class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_songs
  has_many :songs,
    through: :playlist_songs,
    source: :song

  
end
