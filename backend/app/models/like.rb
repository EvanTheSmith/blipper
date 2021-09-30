class Like < ApplicationRecord
    # the Blip being liked
    belongs_to :liked_blip, class_name: 'Blip', foreign_key: 'blip_id'
    # the User who liked the Blip
    belongs_to :liker, class_name: 'User', foreign_key: 'user_id'
end