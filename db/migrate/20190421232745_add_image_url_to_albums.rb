class AddImageUrlToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :image_url, :string, null: false
  end
end
