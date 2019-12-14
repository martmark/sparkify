class Playlist < ApplicationRecord
  validates :title, length: { minimum: 1 }

  belongs_to :user

  has_many :playlist_songs,
    dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song

  has_many :follows, 
    as: :followable, 
    dependent: :destroy
end
