class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city
  has_many :requests
end
