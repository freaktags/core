require 'faker'

FactoryGirl.define do
  factory :user do |u|
    u.name { Faker::Name.name }
    u.username { Faker::Internet.user_name(u.name, %w(- _)) }
    u.email { Faker::Internet.free_email(u.name) }
    u.birthday { Faker::Date.between(80.years.ago, 5.years.ago) }
    u.gender { Gender::MALE }
  end
  factory :female_user, parent: :user do
    gender { Gender::FEMALE }
  end
end
