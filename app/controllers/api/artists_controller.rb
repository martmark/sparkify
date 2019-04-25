class Api::ArtistsController < ApplicationController
  def index
    @artists = current_user.followed_artists if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @artists = []
      while @artists.length < 15
        artist = Artist.all.sample
        @artists << artist if !@artists.include?(artist) && !current_user.followed_artists.include?(artist)
      end
    end
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def follow
    @artist = Artist.find(params[:id])
    current_user.followed_artists << @artist unless current_user.followed_artists.include?(@artist)
    render status: 200
  end

  def unfollow
    @artist = Artist.find(params[:id])
    @follow = Follow.find_by(followable_id: @artist.id, followable_type: 'Artist', user_id: current_user.id)
    @follow.destroy
    render status: 200
  end
end
