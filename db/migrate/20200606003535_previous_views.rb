class PreviousViews < ActiveRecord::Migration[5.2]
  def change
      create_table :previous_views do |t|
      t.integer :video_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :previous_views, [:user_id, :video_id]
  end
end
