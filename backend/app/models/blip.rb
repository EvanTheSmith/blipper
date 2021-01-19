class Blip < ApplicationRecord
    belongs_to :user
    has_many :likes
    has_many :users, through: :likes
    # has_many :follows
end