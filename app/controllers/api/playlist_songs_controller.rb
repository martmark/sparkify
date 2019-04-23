class Api::PlaylistSongsController < ApplicationController
  def create
    playlist = Playlist.find(params[:playlistId])
    song = Song.find(params[:songId])
    playlist.songs << song
  end
end
