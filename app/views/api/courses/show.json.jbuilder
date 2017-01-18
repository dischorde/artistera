json.extract! @course, :id, :title, :description, :assignment_summary, :playlist_src, :cover_img_src

if @course.assignment
  json.assignment do
    json.extract! @course.assignment, :id, :title, :description, :deliverable, :materials, :resources
    json.attachments do
        json.array! @course.assignment.attachments do |attachment|
          json.file_name attachment.document_file_name
          json.file_src attachment.document.url
          json.file_size number_to_human_size(attachment.document_file_size)
        end
    end
  end

  json.projects do
    json.array! @course.projects do |proj|
      json.id proj.id
      json.title proj.title
      json.cover_img_src proj.cover_img.url
    end
  end

else
  json.assignment do
     json.attachments []
   end
  json.projects []
end
