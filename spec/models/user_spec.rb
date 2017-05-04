require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryGirl.build(
      :user,
      email: "imatest@email.com",
      password: "ismypass"
    )
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }

  it { should have_many(:projects) }
  it { should have_many(:reviews) }

  it "creates a gravatar hash when a email is given" do
    expect(user.gravatar_hash).to_not be_nil
  end

  it "creates a session token before validation" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "password encryption" do
    it "creates a password digest when a password is given" do
      expect(user.password_digest).to_not be_nil
    end

    it "does not save password to the database" do
      user.save!
      saved_user = User.find_by(email: "imatest@email.com")
      expect(saved_user.password).to_not eq("ismypass")
    end
  end

  describe "#reset_session_token!" do
    it "sets a new, different session token on the user" do
      user.valid?
      old_token = user.session_token
      user.reset_session_token!

      expect(user.session_token).to_not eq(old_token)
    end

    it "returns the new session token" do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe "#is_password?" do
    it "verifies a password is correct" do
      expect(user.is_password?("ismypass")).to be true
    end

    it "verifies a password is incorrect" do
      expect(user.is_password?("somethingelse")).to be false
    end
  end

  describe ".find_by_credentials" do
    before { user.save! }

    it "returns user given correct credentials" do
      expect(User.find_by_credentials("imatest@email.com",
                                      "ismypass")).to eq(user)
    end

    it "returns nil given incorrect credentials" do
      expect(User.find_by_credentials("imatest@email.com",
                                      "isnotmypass")).to eq(nil)
    end
  end
end
