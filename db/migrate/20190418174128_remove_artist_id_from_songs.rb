class RemoveArtistIdFromSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :artist_id
  end
end
