json.array! @project.attachments do |attachment|
  json.id attachment.id
  json.file_name attachment.document_file_name
  json.file_src attachment.document.url
  json.file_size number_to_human_size(attachment.document_file_size)
end
