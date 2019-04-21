class Api::AlbumsController < ApplicationController
  def index
    @albums = current_user.followed_albums if params[:fetchType] == 'collection'
  end

  def show
    @album = Album.find(params[:id])
  end
end
