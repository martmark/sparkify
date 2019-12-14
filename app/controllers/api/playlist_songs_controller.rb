class Api::PlaylistSongsController < ApplicationController
  def create
    # debugger
    playlist = Playlist.find(params[:playlistId])
    song = Song.find(params[:songId])
    playlist.songs << song
    render status: 200
  end
end
