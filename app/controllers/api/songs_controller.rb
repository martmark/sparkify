class Api::SongsController < ApplicationController

  def index
    @songs = current_user.followed_songs if params[:fetchType] == 'collection'

    if params[:fetchType] == 'browse'
      @songs = []
      while @songs.length < 30
        song = Song.all.sample
        @songs << song if !@songs.include?(song) && !current_user.followed_songs.include?(song)
      end
    end
  end

  def follow
    @song = Song.find(params[:id])
    current_user.followed_songs << @song
    current_user.followed_albums << @song.album
    render :show
  end

  def unfollow
    @song = Song.find(params[:id])
    @follow = Follow.find_by(followable_id: @song.id, followable_type: 'Song', user_id: current_user.id)
    @follow.destroy
    render :show
  end

end
