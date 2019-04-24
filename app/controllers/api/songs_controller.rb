class Api::SongsController < ApplicationController
  def index
    @songs = current_user.followed_songs if params[:fetchType] == 'collection'
    if params[:fetchType] == 'browse'
      @songs = []
      while @songs.length < 30
        song = Song.all.sample
        @songs << song if !@songs.include?(song) && !current_user.followed_songs.include?(song)
      end
    end
  end
end
