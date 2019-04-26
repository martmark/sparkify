class Api::ArtistsController < ApplicationController
  def index
    if params[:fetchType] == 'collection'
      @artists = current_user.followed_artists
    elsif params[:fetchType] == 'browse'
      @artists = Artist.browse_artists(current_user.followed_artist_ids)
    elsif params[:fetchType] == 'search'
      search_term = params[:searchTerm]
      @artists = Artist.where('lower(name) like ?', "%#{search_term.downcase}%")
    end
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def follow
    @artist = Artist.find(params[:id])
    current_user.followed_artists << @artist unless current_user.followed_artists.include?(@artist)
    render status: 200
  end

  def unfollow
    @artist = Artist.find(params[:id])
    @follow = Follow.find_by(followable_id: @artist.id, followable_type: 'Artist', user_id: current_user.id)
    @follow.destroy
    render status: 200
  end
end
