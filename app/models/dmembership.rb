class Dmembership < ApplicationRecord
    validates :user_id, presence: true, uniqueness: { scope: :dm_id }
    validates :dm_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :dm,
        foreign_key: :dm_id,
        class_name: :DirectMessage

    has_many :dm_members,
        through: :dm,
        source: :dmembers

    has_many :user_dms,
        through: :user,
        source: :dms

    scope :dm_dmemberships, ->(id) { where(user_id: id) }
end
