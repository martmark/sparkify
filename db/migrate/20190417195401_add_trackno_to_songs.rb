class AddTracknoToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :ord, :integer, null: false
  end
end
