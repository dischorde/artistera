class Project < ApplicationRecord
  validates :title, :description, :user_id, :assignment_id, presence: true
  has_attached_file :cover_img, styles: { cover: ["376x251!", :png] }, default_url: "http://s3.amazonaws.com/artistera-dev/projects/cover_imgs/000/000/001/original/watercolor-in-progress.jpeg"
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\Z/

  has_many :attachments, as: :attachable
  belongs_to :assignment
  belongs_to :user
  has_one :course, through: :assignment, source: :course
end
