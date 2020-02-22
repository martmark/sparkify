class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums,
    dependent: :destroy

  has_many :songs,
    through: :albums,
    source: :songs

  has_many :follows, as: :followable,
    dependent: :destroy

  def self.browse_artists(followed_artist_ids)
    artists = Artist.all
    random_artists = []
    
    if artists.length - followed_artist_ids.length < 10
      return artists.sample(10)
    else
      while random_artists.length < 10
        artist = artists.sample
        if !random_artists.include?(artist) && !followed_artist_ids.include?(artist.id)
          random_artists << artist
        end
      end
    end

    return random_artists
  end

end
