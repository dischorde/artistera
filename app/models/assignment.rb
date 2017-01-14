class Assignment < ApplicationRecord
  validates :course_id, :title, :description, :deliverable, presence: true

  include Attachable
  has_many :projects
  belongs_to :course
end
