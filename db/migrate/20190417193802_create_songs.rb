class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false, index: true
      t.integer :album_id, null: false, index: true
      t.string :duration, null: false
      t.timestamps
    end
  end
end
