class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.text :body, null: false
      t.references :messageable, polymorphic: true, null: false
      t.timestamps
    end
    add_index :messages, :sender_id
  end
end
