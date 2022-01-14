class AddTagToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :tag, :string
  end
end
