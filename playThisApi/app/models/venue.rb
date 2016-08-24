class Venue < ApplicationRecord
  has_many :requests
  validates :placeId, uniqueness: :true
end
