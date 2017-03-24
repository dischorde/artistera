json.enrollments do
  json.partial! "api/courses/courses", courses: @current_user.enrolled_courses
end
json.projects do
  json.partial! "api/projects/projects", projects: @current_user.projects
end
json.set! :join_date, @current_user.created_at.strftime("%b %d, %Y")
