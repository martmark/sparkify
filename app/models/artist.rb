class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums
  has_many :songs,
    through: :albums,
    source: :songs
  has_many :follows, as: :followable

  def self.browse_artists(followed_artist_ids)
    artists = Artist.all
    random_artists = []
    
    if artists.length - followed_artist_ids.length < 15
      return artists.sample(15)
    else
      while random_artists.length < 15
        artist = artists.sample
        if !random_artists.include?(artist) && !followed_artist_ids.include?(artist.id)
          random_artists << artist
        end
      end
    end

    return random_artists
  end

end
