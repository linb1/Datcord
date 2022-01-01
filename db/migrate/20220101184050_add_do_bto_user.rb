class AddDoBtoUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :date_of_birth, :date, null: false
  end
end
