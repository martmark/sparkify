class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false, index: true
      t.text :description
      t.timestamps
    end
  end
end
