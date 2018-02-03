@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.cover_img_src cl_image_path(project.cover_img.url,
                                     width: 376,
                                     height: 251,
                                     crop: :fill)
  end
end
