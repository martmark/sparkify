class Api::SongsController < ApplicationController
  def index
    @songs = current_user.followed_songs if params[:fetchType] == 'collection'
  end
end
