require 'rails_helper'

RSpec.describe Project, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should have_attached_file(:cover_img) }
  it do
    should validate_attachment_content_type(:cover_img)
      .allowing('image/png', 'image/gif', 'image/jpeg')
      .rejecting('text/plain', 'text/xml')
  end

  it { should belong_to(:user) }
  it { should belong_to(:assignment) }
  it { should have_many(:attachments) }
  it { should have_one(:course).through(:assignment) }
end
