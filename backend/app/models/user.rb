class User < ApplicationRecord
    # Blips this User has created : "blips"
    has_many :blips

    # Blips this User has liked : "liked_blips"
    has_many :likes
    has_many :liked_blips, through: :likes

    # Follows this User has RECEIVED
    has_many :received_follows, foreign_key: :followed_user_id, class_name: 'Follow'
    # Users who are following this User : "followers"
    has_many :followers, through: :received_follows, source: :follower

    # Follows this User has GIVEN
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    # Users this User is following : "followings"
    has_many :followings, through: :given_follows, source: :followed_user
end