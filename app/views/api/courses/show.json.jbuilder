json.extract! @course, :id, :title, :description, :assignment_summary, :playlist_src, :cover_img_src

# json.assignment do
#   json.extract!
# end
#
# json.projects do
#   json.array!
# end

# json.reviews do
#   json.array! @course.reviews do |review|
#     json.id review.id
#     json.body review.body
#     json.author json.extract! review.author, :id, :first_name, :last_name, :gravatar_hash
#   end
