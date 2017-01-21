# Artistera

[Artistera.info][artistera] is a web application inspired by Skillshare for taking online, bite-sized art courses. Don't know Skillshare? Think Coursera, but shorter, smaller classes with less academic subject matter.

 Artistera  is a personal project by Katarina Rossi.

![](https://s3.amazonaws.com/artistera-pro/screenshots/splash-1.jpg)

## Features
- User accounts with secure authentication
- Courses with embedded video playlists, course assignments, and student projects
- File uploading and management
- Image and PDF attachments for user projects
- Searching for courses by keyword
- Course Reviews

<br>
![](https://s3.amazonaws.com/artistera-pro/screenshots/splash-2.jpg)

## Course Projects
Artistera courses consist of a video playlist, resources, and a course assignment. Users are able to upload their projects with a title and description along with an uploaded cover image and variable number of image or PDF attachments. Projects are then displayed in a course gallery and detail view.


![](https://s3.amazonaws.com/artistera-pro/screenshots/project-detail.jpg)



## Editing
In the project detail view, projects are displayed with a cover image,  description, list of attachments. Project owners can delete attachments from that list or edit their own projects through a modal pop-up. They can also upload additional attachments through the form.


![](https://s3.amazonaws.com/artistera-pro/screenshots/editing-modal.jpg)



## Project Design

Artistera was designed and built in two weeks. View the original [proposal][proposal].

## Technology

Artistera is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [File storage][backend] via Amazon Simple Storage Services (S3)
- [Frontend technology][frontend]

## Additional Features
Future features to implement in Artistera are rich-text formatting for project submissions, course enrollments, a user dashboard, and sorting courses by category.

[artistera]: https://www.artistera.info
[proposal]: ./docs/README.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
