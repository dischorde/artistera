class Assignment < ApplicationRecord
  validates :course_id, :title, :description, :deliverable, presence: true

  has_many :attachments, as: :attachable
  has_many :projects
  belongs_to :course
end
