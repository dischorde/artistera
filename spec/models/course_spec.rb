require 'rails_helper'

RSpec.describe Course, type: :model do
  subject(:course) do
    FactoryGirl.build(:course)
  end

  it { should validate_presence_of(:title) }
  it { should validate_uniqueness_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:assignment_summary) }
  it { should validate_presence_of(:playlist_src) }
  it { should validate_presence_of(:cover_img_src) }

  it { should have_one(:assignment) }
  it { should have_many(:reviews) }
  it { should have_many(:projects).through(:assignment) }
end
