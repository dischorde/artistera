class Enrollment < ApplicationRecord
  validates :user_id, :course_id, presence: true
  validates :user_id, uniqueness: { scope: :course_id }

  belongs_to :course
  belongs_to :user
end
