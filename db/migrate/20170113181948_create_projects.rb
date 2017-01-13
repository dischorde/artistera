class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false, index: true
      t.integer :assignment_id, null: false, index: true

      t.timestamps
    end
  end
end
