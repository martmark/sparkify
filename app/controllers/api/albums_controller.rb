class Api::AlbumsController < ApplicationController
  def index
    @albums = current_user.followed_albums if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @albums = []
      while @albums.length < 15
        album = Album.all.sample
        @albums << album if !@albums.include?(album) && !current_user.followed_albums.include?(album)
      end
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def follow
    album = Album.find(params[:id])
    current_user.followed_albums << album unless current_user.followed_albums.include?(album)
    render status: 200
  end

  def unfollow
    @album = Album.find(params[:id])
    @follow = Follow.find_by(followable_id: @album.id, followable_type: 'Album', user_id: current_user.id)
    @follow.destroy
    render status: 200
  end
end
