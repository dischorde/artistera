class Course < ApplicationRecord
  validates :title,
            :description,
            :assignment_summary,
            :playlist_src,
            :cover_img_src,
            presence: true

  validates :title, uniqueness: true

  has_one :assignment
  has_many :projects, through: :assignment, source: :projects
end
