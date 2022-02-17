class DirectMessage < ApplicationRecord
    validates :friend_id, uniqueness: { scope: :user_id }
    validates :user_id, :friend_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User

    has_many :dmemberships,
        foreign_key: :dm_id,
        class_name: :Dmembership,
        dependent: :destroy
    
    has_many :dmembers,
        through: :dmemberships,
        source: :user

    has_many :messages, as: :messageable
end
