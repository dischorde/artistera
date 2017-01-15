author = @project.user

json.id @project.id
json.title @project.title
json.description @project.description
json.cover_img_src @project.cover_img.url
json.updated_at time_ago_in_words(@project.updated_at)
json.author_name "#{author.first_name} #{author.last_name}"
json.course_title @project.course.title

if @project.attachments
  json.attachments do
    json.array! @project.attachments do |attachment|
      json.file_name attachment.document_file_name
      json.file_src attachment.document.url
      json.file_size number_to_human_size(attachment.document_file_size)
    end
  end
else
  json.attachments []
end
