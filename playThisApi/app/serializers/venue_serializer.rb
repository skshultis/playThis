class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city
end
