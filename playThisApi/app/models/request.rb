class Request < ApplicationRecord
  belongs_to :venue
  # could add error handling specifically for uniqueness errors-- you serve up the already-existing location in the venues controller in this error handling block
end
