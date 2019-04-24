class AddSmallImageUrlToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :small_image_url, :string, null: false
  end
end
