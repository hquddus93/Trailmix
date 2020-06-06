class Shows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name, null: false, unique: true
      t.string :plot, null: false 

      t.timestamps
     end
  end
end
