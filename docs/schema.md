# DB Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email	      | string    | not null, indexed, unique
gravatar_hash   | string    |
first_name   | string    | not null
last_name   | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## courses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description      | text      | not null
assignment_summary      | string    | not null
playlist_src | string | not null
cover_img_src | string | not null

has_one assignment
has_many projects (through assignment)
has_many reviews

## assignments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
course_id   | integer   | not null, foreign key (references courses), indexed
title       | string    | not null
description | text    | not null
deliverable | text    | not null
materials | text    |
resources | string    |

has_many projects
has_many attachments through attachable (polymorphic association)


## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description      | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed
assignment_id | integer   | not null, foreign key (references assignments), indexed
cover_img   | attachment*   |

* Using paperclip gem. Creates fields cover_img_file_name, cover_img_file_size, cover_img_content_type, cover_img_updated_at etc...
has_many attachments through attachable (polymorphic association)

## attachments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
attachable_id      | integer    | not null, foreign key (polymorphic association), indexed
attachable_type      | string    | not null
document | attachment* |

* through paperclip

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body     	 | text    |  not null
user_id   | integer   | not null, foreign key (references users), indexed
course_id | integer   | not null, foreign key (references courses), indexed
