class Membership < ApplicationRecord
    validates :user_id, presence: true, uniqueness: { scope: :server_id }
    validates :server_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

    has_many :server_members,
        through: :server,
        source: :members

    has_many :user_servers,
        through: :user,
        source: :servers

    scope :server_memberships, ->(id) { where(user_id: id) }
end
