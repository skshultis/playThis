class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.text :content
      t.belongs_to :venue, foreign_key: true

      t.timestamps
    end
  end
end
