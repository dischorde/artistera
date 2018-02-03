class Attachment < ApplicationRecord
  belongs_to :attachable, polymorphic: true

  has_attached_file :document, folder: 'attachments/', path: 'attachments/:filename'
  validates_attachment_content_type :document, content_type: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']
end
