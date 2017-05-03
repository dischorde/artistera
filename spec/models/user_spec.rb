require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_length_of(:password).is_at_least(6) }
end
