class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validate :ensure_username, :on => :create

  has_many :playlists, 
    dependent: :destroy

  has_many :follows, 
    dependent: :destroy

  has_many :followed_playlists,
    through: :follows,
    source: :followable,
    source_type: 'Playlist',
    dependent: :destroy

  has_many :followed_artists,
    through: :follows,
    source: :followable,
    source_type: 'Artist',
    dependent: :destroy

  has_many :followed_albums,
    through: :follows,
    source: :followable,
    source_type: 'Album',
    dependent: :destroy

  has_many :followed_songs,
    through: :follows,
    source: :followable,
    source_type: 'Song',
    dependent: :destroy
  
  attr_reader :password
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(username, password)
    user = User.where('lower(username) = ?', username.downcase).first
    return user if user && user.is_password?(password)  
    return nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_username
    downcase_username = self.username.downcase
    user = User.where('lower(username) = ?', downcase_username).first
    errors.add(:username, 'has already been taken') if user
  end
end