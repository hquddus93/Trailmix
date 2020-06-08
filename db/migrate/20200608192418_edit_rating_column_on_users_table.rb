class EditRatingColumnOnUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column(:videos, :rating, :string)
  end
end
