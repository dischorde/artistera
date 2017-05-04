FactoryGirl.define do
  factory :user do
    email { |n| Faker::Internet.email }
    password { |p| Faker::Internet.password }
    first_name { |f| Faker::Name.first_name   }
    last_name { |l| Faker::Name.last_name }
  end
end
