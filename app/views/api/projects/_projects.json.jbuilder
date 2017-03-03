projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.cover_img_src project.cover_img.url(:cover)
  end
end
