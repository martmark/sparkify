class AddTitleToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :title, :string, null: false, index: true
  end
end
