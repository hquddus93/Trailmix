class Genres < ActiveRecord::Migration[5.2]
  def change
      create_table :genres do |t|
      t.string :genre, null: false, unique: true
      t.integer :video_id, null: false, index: true

      t.timestamps
    end
  end
end
