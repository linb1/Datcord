class Channel < ApplicationRecord
    validates :name, presence: true, length: {in: 1..100}

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server
end
