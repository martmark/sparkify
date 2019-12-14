class Api::PlaylistSongsController < ApplicationController
  def create
    playlist = Playlist.find(params[:playlistId])
    song = Song.find(params[:songId])
    playlist.songs << song
    if playlist.image_url == 'https://sparkifyimages.s3.amazonaws.com/blank.jpg'
      playlist.image_url = song.album.image_url
      playlist.save
    end 
    render status: 200
  end

  def destroy
    playlist = Playlist.find(params[:playlistId])
    song = Song.find(params[:songId])
    @followed_playlist_ids = current_user.followed_playlist_ids
    @followed_song_ids = current_user.followed_song_ids
    if playlist.user_id == current_user.id
      playlist_song = PlaylistSong.find_by({playlist_id: params[:playlistId], song_id: params[:songId]})
      playlist_song.destroy
      while playlist.image_url == song.album.image_url
        if playlist.songs.count == 0
          playlist.image_url = 'https://sparkifyimages.s3.amazonaws.com/blank.jpg'
        else
          playlist.image_url = playlist.songs.sample.album.image_url
        end
      end
      playlist.save
    end
    @playlist = Playlist.includes(:songs).find(params[:playlistId])
    render '/api/playlists/show'
  end
end
