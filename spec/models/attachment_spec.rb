require 'rails_helper'

RSpec.describe Attachment, type: :model do
  it { should have_attached_file(:document) }
  it { should belong_to(:attachable) }
  it do
    should validate_attachment_content_type(:document)
      .allowing('image/jpeg', 'image/png', 'image/gif', 'application/pdf')
      .rejecting('text/plain', 'text/xml')
  end
end
