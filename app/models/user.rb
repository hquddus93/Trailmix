class User < ApplicationRecord

    validates :email, :session_token, presence: true, uniqueness: true
    validates :username, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    # has_one :list
    # has_many :previously_viewed_videos
    # has_many :videos_on_my_list

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).isPassword?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && self.is_password?(password)
        return user
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    private
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end