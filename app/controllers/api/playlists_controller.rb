class Api::PlaylistsController < ApplicationController
  def index
    @playlists = current_user.playlists
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render :show
    else
      render json: ["Unable to create playlist"], status: 401
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end
end
