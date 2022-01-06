class Server < ApplicationRecord
    validates :name, presence: true, length: {in: 2..100}

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel
end
