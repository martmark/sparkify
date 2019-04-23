class Api::AlbumsController < ApplicationController
  def index
    @albums = current_user.followed_albums if params[:fetchType] == 'collection'
     if params[:fetchType] == 'browse'
      @albums = Album.all.reject { |album| current_user.followed_albums.include?(album) }
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
