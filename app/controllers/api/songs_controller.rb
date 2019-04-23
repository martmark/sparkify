class Api::SongsController < ApplicationController
  def index
    @songs = current_user.followed_songs if params[:fetchType] == 'collection'
     if params[:fetchType] == 'browse'
      @songs = Song.all.reject { |song| current_user.followed_songs.include?(song) }
    end
  end
end
