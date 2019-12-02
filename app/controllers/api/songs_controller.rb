class Api::SongsController < ApplicationController

  def index
    @followed_song_ids = current_user.followed_song_ids
    @songs = current_user.followed_songs if params[:fetchType] == 'collection'

    if params[:fetchType] == 'browse'
      @songs = []
      while @songs.length < 30
        song = Song.all.sample
        @songs << song if !@songs.include?(song) && !current_user.followed_songs.include?(song)
      end
    end

    if params[:fetchType] == 'search'
      search_term = params[:searchTerm]
      @songs = Song.where('lower(title) like ?', "%#{search_term.downcase}%").limit(15)
    end
  end

  def follow
    @followed_song_ids = current_user.followed_song_ids
    @song = Song.find(params[:id])
    current_user.followed_songs << @song
    current_user.followed_albums << @song.album unless current_user.followed_albums.include?(@song.album)
    render :show
  end

  def unfollow
    @followed_song_ids = current_user.followed_song_ids
    @song = Song.find(params[:id])
    @follow = Follow.find_by(followable_id: @song.id, followable_type: 'Song', user_id: current_user.id)
    @follow.destroy
    render :show
  end

end
