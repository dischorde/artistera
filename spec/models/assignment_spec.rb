require 'rails_helper'

RSpec.describe Assignment, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:deliverable) }

  it { should have_many(:attachments) }
  it { should have_many(:projects) }
  it { should belong_to(:course) }
end
