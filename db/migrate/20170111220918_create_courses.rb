class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :title, null: false, index: true
      t.text :description, null: false
      t.string :assignment_summary, null: false
      t.string :playlist_src, null: false
      t.string :cover_img_src, null: false

      t.timestamps
    end
  end
end
