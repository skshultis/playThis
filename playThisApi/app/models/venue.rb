class Venue < ApplicationRecord
  has_many :requests
  # could add error handling (where'd you add an upvote) specifically for uniqueness errors
  validates :placeId, uniqueness: :true
end
