class CreateMemberships < ActiveRecord::Migration[6.1]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :memberships, [:user_id, :server_id], unique: true
  end
end
