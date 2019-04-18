class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false, index: true
      t.text :bio
      t.timestamps
    end
  end
end
