class User < ApplicationRecord

    attr_reader :password

    validates :username, :password_digest, :session_token, :email, :date_of_birth, presence: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, length: {minimum: 2}
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :owned_servers,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :memberships,
        foreign_key: :user_id,
        class_name: :Membership,
        dependent: :destroy

    has_many :dmemberships,
        foreign_key: :user_id,
        class_name: :Dmembership,
        dependent: :destroy

    has_many :servers,
        through: :memberships,
        source: :server

    has_many :friendships,
        foreign_key: :user_id,
        class_name: :Friendship,
        dependent: :destroy

    has_many :friends,
        through: :friendships,
        source: :friend

    after_initialize :ensure_session_token, :ensure_user_tag

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def new_user_tag
        tag = "#" + rand(1000..9999).to_s
    end

    def generate_user_tag
        self.tag = new_user_tag
        while User.find_by(tag: self.tag)
        self.tag = new_user_tag
        end
        self.tag
    end

    def ensure_user_tag
        generate_user_tag unless self.tag
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end
end
