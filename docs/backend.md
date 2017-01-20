
# Backend

Artistera is hosted on Heroku with a Ruby on Rails framework and PostgreSQL database. The purpose of the backend is to provide RESTful APIs and respond with JSON data.

## Heroku

BinaryCanary is used to track uptime as well as automatically ping the Heroku dyno, keeping it awake for faster client response.

## Dependencies

Other notable dependencies include:

- Paperclip and ImageMagick for image attachment and processing
- Amazon Web Services SDK for file storage on Amazon Simple Storage Service (S3)
- BCrypt for password-salting and hashing for a secure authentication system
- Figaro for secure configuration of API keys

## File Storage

When submitting a new project, attachment files are sent one by one on successful upload as form data in an ajax request to the backend. The paperclip gem handles uploading to the proper S3 bucket (development or production) with AWS SDK. The image attachment data and S3 file url is stored in the database in the attachments table, which is linked with a polymorphic association to projects and assignments.