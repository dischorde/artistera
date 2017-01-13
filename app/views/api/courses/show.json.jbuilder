json.extract! @course, :id, :title, :description, :assignment_summary, :playlist_src, :cover_img_src



if @course.assignment
  json.assignment do
    json.extract! @course.assignment, :title, :description, :deliverable, :materials, :resources
  end

  json.projects do
    json.array! @course.projects do |proj|
      json.id proj.id
      json.title proj.title
    end
  end
else
  json.assignment {}
  json.projects []
end

# json.reviews do
#   json.array! @course.reviews do |review|
#     json.id review.id
#     json.body review.body
#     json.author json.extract! review.author, :id, :first_name, :last_name, :gravatar_hash
#   end
