class CreateSimons < ActiveRecord::Migration[6.1]
  def change
    create_table :simons do |t|
      t.boolean :glasses
      t.integer :four_out_of_five
      t.string :country_origin

      t.timestamps
    end
  end
end
