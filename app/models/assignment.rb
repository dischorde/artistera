class Assignment < ApplicationRecord
  validates :course_id, :title, :description, :deliverable, presence: true

  has_many :projects
  has_many :attachments, as: :attachable
  belongs_to :course
end
