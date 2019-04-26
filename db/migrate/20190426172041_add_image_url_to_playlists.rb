class AddImageUrlToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :image_url, :string, null: false
  end
end
