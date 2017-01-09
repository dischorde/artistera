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

### Classes

- `GET /api/classes`
  - accepts query params for search by keyword
- `GET /api/classes/:id`

### Assignments

- `GET /api/classes/:id/assignment`

### Projects

- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/assignments/:assign_id/projects`
- `PATCH /api/assignments/:assign_id/projects/:id`
- `DELETE /api/assignments/:assign_id/projects/:id`


### Reviews

- `GET /api/classes/:class_id/reviews`
- `POST /api/classes/:class_id/reviews`
- `DELETE /api/classes/:class_id/reviews/:id`