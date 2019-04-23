class Api::FollowsController < ApplicationController
  def create
    if params[:follow][:followType] == 'song'
      song = Song.find(params[:follow][:followId])
      current_user.followed_songs << song
    end
  end
end
