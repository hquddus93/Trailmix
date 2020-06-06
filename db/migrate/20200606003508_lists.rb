class Lists < ActiveRecord::Migration[5.2]
  def change
      create_table :lists do |t|
      t.integer :user_id, null: false, unique: true
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :lists, [:user_id, :video_id]
  end
end
