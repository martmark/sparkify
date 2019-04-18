class RemoveDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :description
  end
end
