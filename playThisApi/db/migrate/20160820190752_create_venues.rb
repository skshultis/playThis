class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :street
      t.string :placeId
      t.decimal :latitude
      t.decimal :longitude
      t.timestamps
    end
  end
end
