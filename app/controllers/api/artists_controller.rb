class Api::ArtistsController < ApplicationController
  def index
    @artists = current_user.followed_artists if params[:fetchType] == 'collection'
     if params[:fetchType] == 'browse'
      @artists = Artist.all.reject { |artist| current_user.followed_artists.include?(artist) }
    end
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end
end
