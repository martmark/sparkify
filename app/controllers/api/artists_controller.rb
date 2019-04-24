class Api::ArtistsController < ApplicationController
  def index
    @artists = current_user.followed_artists if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @artists = []
      while @artists.length < 20
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
end
