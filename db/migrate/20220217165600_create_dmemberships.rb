class CreateDmemberships < ActiveRecord::Migration[6.1]
  def change
    create_table :dmemberships do |t|
      t.integer :user_id, null: false
      t.integer :dm_id, null: false
      t.timestamps
    end
    add_index :dmemberships, [:user_id, :dm_id], unique: true
  end
end
