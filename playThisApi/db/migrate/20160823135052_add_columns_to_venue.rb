class AddColumnsToVenue < ActiveRecord::Migration[5.0]
  def change
    add_column :venues, :placeId, :string
    add_column :venues, :latitude, :decimal
    add_column :venues, :longitude, :decimal
  end
end
