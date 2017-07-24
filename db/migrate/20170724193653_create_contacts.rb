class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.text :message
      t.boolean :nickname

      t.timestamps
    end
  end
end
