class Api::ArtistsController < ApplicationController
  def index
    @artists = current_user.followed_artists if params[:fetchType] == 'collection'
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end
end
