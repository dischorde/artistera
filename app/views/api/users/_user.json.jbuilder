json.extract! user, :id, :email, :first_name, :last_name, :gravatar_hash
json.enrollments user.enrolled_courses.map(&:id)
