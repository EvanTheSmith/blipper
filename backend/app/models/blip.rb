class Blip < ApplicationRecord
    belongs_to :user
    has_many :likes
    has_many :likers, through: :likes
end