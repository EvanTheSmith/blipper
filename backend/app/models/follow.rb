class Follow < ApplicationRecord
    # Who is the follower
    belongs_to :follower, class_name: 'User', foreign_key: 'follower_id'
    # Who is being followed
    belongs_to :followed_user, class_name: 'User', foreign_key: 'followed_user_id'
end