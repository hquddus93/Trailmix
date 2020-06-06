class Seasons < ActiveRecord::Migration[5.2]
  def change
      create_table :seasons do |t|
      t.string :name, null: false
      t.integer :show_id, null: false

      t.timestamps
    end
    add_index :seasons, [:show_id, :name]
  end
end
