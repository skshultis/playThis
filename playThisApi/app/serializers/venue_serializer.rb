class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :placeId, :latitude, :longitude
  has_many :requests
  # is this adding any real fucntionality?
end
