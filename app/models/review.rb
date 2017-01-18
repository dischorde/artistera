class Review < ApplicationRecord
  validates :body, :user_id, :course_id, presence: true

  belongs_to :user
  belongs_to :course

  def siblings
    self.course.reviews
  end

end
