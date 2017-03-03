courses.each do |course|
  json.set! course.id do
    json.extract! course, :id, :title, :cover_img_src
  end
end
