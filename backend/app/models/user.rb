class User < ApplicationRecord
    # has_many :created_blips, class_name: "Blip"
    
    has_many :blips

    has_many :likes
    has_many :liked_blips, through: :likes

    # has_many: follows
    # has_many :users, through: :follows
end