class Blip < ApplicationRecord
    validates :content, presence: true

    belongs_to :user
    has_many :likes
    has_many :likers, through: :likes
end