class CreateDirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :direct_messages do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end
    add_index :direct_messages, [:user_id, :friend_id], unique: true
  end
end
