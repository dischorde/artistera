

# Artistera

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/LajlqSYq/artistera

## Minimum Viable Product

Artistera is a web application inspired by Skillshare for taking online, bite-sized art classes. It will be built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will - with smooth, bug-free navigation, adequate seed data, and styling - satisfy the following requirements:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Classes (with a embedded video Playlist)
- [ ] Class Project Assignments with Attached Files
- [ ] Uploading of Projects with Photos/Files to Classes
- [ ] Searching Classes by Keyword
- [ ] Reviews on Classes
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

**Objective:** Functioning rails project with front-end Authentication. Login / Sign Up forms. Footer and Nav Bar with gravatar.

### Phase 2: Class Model and Components (1.5 days)

**Objective:** All classes index component (on home page after logging in) where clicking on classes leads to a class detail view page with tabs (about, reviews, class projects, all projects). Some seed data.

### Phase 3: Assignment and Project Models / Components (2.5 days)

**Objective:** Assignment, Project Submission Form, Project Detail, Attachment list, and all class Projects components. Users can add and destroy projects through the api including uploading multiple images or files (pdfs or documents). Add class project list component to About component. Add additional seed data.

### Phase 4: Searching Classes By Keyword (1.5 days)
**Objective:** Make search bar in nav component and make it functional. Display classes that match the keyword.

### Phase 5: Splash Page and UI Improvements (1 days)

**Objective:** Pretty splash page with video hero banner, limited all classes component, and limited all projects component. Spend time perfecting UI.

### Phase 6: Reviews (1 day)

**Objective:** Reviews list component and add review form component (in reviews list component). Reviews can be added and destroyed through the api.

### Bonus Features (TBD)

### Phase 7: Categories
 Classes belong to different categories, users can sort class index page by category.

### Phase 8: Enrollment
 Users can enroll in in a class. Only enrolled users are able to leave reviews and upload projects.

### Phase 9: User dashboard
 Users have a dashboard that displays all enrolled courses.
