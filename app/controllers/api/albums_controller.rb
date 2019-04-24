class Api::AlbumsController < ApplicationController
  def index
    @albums = current_user.followed_albums if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @albums = []
      while @albums.length < 16
        album = Album.all.sample
        @albums << album if !@albums.include?(album) && !current_user.followed_albums.include?(album)
      end
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
