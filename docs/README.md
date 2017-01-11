

# Artistera

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.artistera.info/
[trello]: https://trello.com/b/LajlqSYq/artistera

## Minimum Viable Product

Artistera is a web application inspired by Skillshare for taking online, bite-sized art courses. It will be built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will - with smooth, bug-free navigation, adequate seed data, and styling - satisfy the following requirements:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Courses (with a embedded video Playlist)
- [ ] Course Project Assignments with Attached Files
- [ ] Uploading of Projects with Photos/Files to Courses
- [ ] Searching Courses by Keyword
- [ ] Reviews on Courses
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days)

**Objective:** Functioning rails project with front-end Authentication. Login / Sign Up forms. Nav Bar with gravatar.

### Phase 2: Course Model and Components (1.5 days)

**Objective:** All courses index component (on home page after logging in) where clicking on courses leads to a course detail view page with tabs (about, reviews, course projects, all projects). Some seed data.

### Phase 3: Assignment and Project Models / Components (2.5 days)

**Objective:** Assignment, Project Submission Form, Project Detail, Attachment list, and all course Projects components. Users can create, read, update, and destroy projects through the api (including uploading multiple images or files, such as pdfs, documents, etc.). Add course project list component to About component. Add additional seed data.

### Phase 4: Reviews (1.5 day)

**Objective:** Reviews list component and add/edit review form component (in reviews list component). Reviews CRUD.

### Phase 5: Searching Courses By Keyword (1 days)
**Objective:** Make search bar in nav component and make it functional. Display courses that match the keyword.

### Phase 6: Splash Page and UI Improvements (1 days)

**Objective:** Pretty splash page with video hero banner, limited all courses component, and limited all projects component. Spend time perfecting UI. If time allows, add footer.


### Bonus Features (TBD)

### Phase 7: Categories
 Courses belong to different categories, users can sort course index page by category.

### Phase 8: Enrollment
 Users can enroll in in a course. Only enrolled users are able to leave reviews and upload projects.

### Phase 9: User dashboard
 Users have a dashboard that displays all enrolled courses.
