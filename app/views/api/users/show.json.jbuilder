json.enrollments do
  json.partial! "api/courses/courses", courses: @enrolled_courses
end
json.projects do
  json.partial! "api/projects/projects", projects: @projects
end
