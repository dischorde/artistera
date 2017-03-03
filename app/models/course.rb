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
  has_many :reviews
  has_many :enrollments
  has_many :students, through: :enrollments, source: :user
end
