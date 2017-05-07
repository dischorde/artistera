FactoryGirl.define do
  factory :course do
    title { |t| Faker::Educator.course }
    description { |d| Faker::Hipster.paragraph }
    assignment_summary { |a| Faker::Hipster.sentence }
    playlist_src { |p| Faker::Internet.url }
    cover_img_src { |c| Faker::Internet.url }
  end
end
