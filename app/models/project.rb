class Project < ApplicationRecord
  validates :title, :description, :user_id, :assignment_id, presence: true

  has_many :attachments, as: :attachable
  belongs_to :assignment
  has_one :course, through: :assignment, source: :course
end
