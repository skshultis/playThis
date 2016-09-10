class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :placeId, :latitude, :longitude
  has_many :requests
end
