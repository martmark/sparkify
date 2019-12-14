class Api::PlaylistsController < ApplicationController
  def index
    @followed_playlist_ids = current_user.followed_playlist_ids
    @playlists = current_user.followed_playlists if params[:fetchType] == 'collection'
    @playlists = current_user.playlists if params[:fetchType] == 'addsong'
    if params[:fetchType] == 'browse'
      @playlists = Playlist.all.reject { |playlist| current_user.followed_playlists.include?(playlist) }
    end
    render :index
  end

  def create
    @followed_playlist_ids = current_user.followed_playlist_ids
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    @playlist.image_url = 'https://sparkifyimages.s3.amazonaws.com/blank.jpg'

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

  def follow
    @playlist = Playlist.find(params[:id])
    current_user.followed_playlists << @playlist unless current_user.followed_playlists.include?(@playlist)
    render status: 200
  end

  def unfollow
    @playlist = Playlist.find(params[:id])
    @follow = Follow.find_by(followable_id: @playlist.id, followable_type: 'Playlist', user_id: current_user.id)
    @follow.destroy
    render status: 200
  end

  def destroy
    playlist = current_user.playlists.find(params[:id])
    playlist.destroy
    render :json => {}, status: 200
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end
end
