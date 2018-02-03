class Project < ApplicationRecord
  validates :title, :description, :user_id, :assignment_id, presence: true
  has_attached_file :cover_img,
                    folder: 'cover_images/',
                    path: 'cover_images/:filename',
                    default_url: "http://res.cloudinary.com/dischorde/image/upload/v1517622842/watercolor-in-progress_airjbg.png"
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\Z/

  has_many :attachments, as: :attachable
  belongs_to :assignment
  belongs_to :user
  has_one :course, through: :assignment, source: :course
end
