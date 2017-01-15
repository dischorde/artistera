json.id @project.id
json.title @project.title
json.cover_img_src @project.cover_img.url

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
