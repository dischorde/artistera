author = review.user

json.id review.id
json.body review.body
json.author "#{author.first_name} #{author.last_name}"
json.gravatar_hash author.gravatar_hash
