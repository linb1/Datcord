class Message < ApplicationRecord
    validates :sender_id, :body, presence: true

    belongs_to :messageable, polymorphic: true
    
    belongs_to :sender,
        foreign_key: :sender_id,
        class_name: :User

end
