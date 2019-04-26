class AddTrackUrlToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :track_url, :string, null: false
  end
end
