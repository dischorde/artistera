class CreateAssignments < ActiveRecord::Migration[5.0]
  def change
    create_table :assignments do |t|
      t.integer :course_id, null: false, index: true
      t.string :title, null: false
      t.text :description, null: false
      t.text :deliverable, null: false
      t.text :materials
      t.text :resources

      t.timestamps
    end
  end
end
