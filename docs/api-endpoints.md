# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Courses

- `GET /api/courses`
  - accepts query params for search by keyword
- `GET /api/courses/:id`

### Assignments

- `GET /api/courses/:id/assignment`

### Projects

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/assignments/:assign_id/projects`
- `PATCH /api/assignments/:assign_id/projects/:id`
- `DELETE /api/assignments/:assign_id/projects/:id`

### Attachments

- `POST /api/attachments`
- `DELETE /api/attachments`

### Reviews

- `GET /api/courses/:course_id/reviews`
- `POST /api/courses/:course_id/reviews`
- `PATCH /api/courses/:course_id/reviews`
- `DELETE /api/courses/:course_id/reviews/:id`
