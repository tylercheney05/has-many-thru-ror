class CreateDpls < ActiveRecord::Migration[6.1]
  def change
    create_table :dpls do |t|
      t.string :location
      t.integer :built
      t.integer :capacity
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :simon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
