class Song < ApplicationRecord
  validates :title, :duration, presence: true

  belongs_to :album
  has_many :playlist_songs, dependent: :destroy
  has_many :playlists,
    through: :playlist_songs,
    source: :playlist
  has_one :artist,
    through: :album,
    source: :artist
  has_many :follows, as: :followable, dependent: :destroy

  has_one_attached :track
end
