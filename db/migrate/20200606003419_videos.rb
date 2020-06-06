class Videos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :url, null: false, unique: true
      t.string :description, null: false, uniqueness: true
      t.integer :rating, null: false
      t.string :director_name, null: false
      t.integer :year, null: false
      t.integer :season_id, index: true

      t.timestamps


     end
  end
end
