class Users < ActiveRecord::Migration[5.2]
  def change
     create_table :users do |t|
      t.text :email, null: false, unique: true, index: true
      t.text :username, null: false 
      t.string :session_token, null: false, unique: true
      t.string :password_digest, null: false, unique: true

      t.timestamps
    end
  end
end
