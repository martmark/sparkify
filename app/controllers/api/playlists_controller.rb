class Api::PlaylistsController < ApplicationController
  def index
    @followed_playlist_ids = current_user.followed_playlist_ids
    @playlists = current_user.followed_playlists if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @playlists = Playlist.all.reject { |playlist| current_user.followed_playlists.include?(playlist) }
    end
    render :index
  end

  def create
    @followed_playlist_ids = current_user.followed_playlist_ids
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    @playlist.image_url = 'https://66.media.tumblr.com/792fa57dd5110fe51e7d8f3208a17f40/tumblr_pqkwj8ErPL1vud73ko1_500.png'

    if @playlist.save
      current_user.followed_playlists << @playlist
      render :show
    else
      render json: ["Unable to create playlist"], status: 401
    end
  end

  def show
    @followed_playlist_ids = current_user.followed_playlist_ids
    @followed_song_ids = current_user.followed_song_ids
    @playlist = Playlist.includes(:songs).find(params[:id])
    render :show
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end
end
