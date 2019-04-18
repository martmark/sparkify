class RemoveOrdFromSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :ord
  end
end
