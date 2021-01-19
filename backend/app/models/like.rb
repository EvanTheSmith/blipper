class Like < ApplicationRecord
    belongs_to :liked_blip, class_name: 'Blip', foreign_key: 'blip_id'
    belongs_to :liker, class_name: 'User', foreign_key: 'user_id'
end