# Artistera

[Artistera.info][artistera] is a web application inspired by Skillshare for taking online, bite-sized art courses. Don't know Skillshare? Think Coursera, but shorter, smaller classes with less academic subject matter.

![](http://res.cloudinary.com/dischorde/image/upload/v1517628579/screenshots/splash-1.jpg)

## Features
- User accounts with secure authentication
- Courses with embedded video playlists, course assignments, and student projects
- File uploading and management
- Image and PDF attachments for user projects
- Searching for courses by keyword
- Course Reviews
<br>

![](http://res.cloudinary.com/dischorde/image/upload/v1517628250/screenshots/splash-2.jpg)

## About Courses & Search
Artistera courses consist of a video playlist, resources, and a course assignment. Courses are displayed on a class index view, and can also be discovered through the search field in the nav bar which dynamically displays matching classes as the user types.

```
  redirect() {
    if (this.props.location.pathname !== "/search") {
      this.props.router.push("/search");
    }
  }

  handleSearch (e) {
    this.props.searchCourses(e.currentTarget.value).then(
      this.redirect
    );
  }

  render() {
    return (
      <section className="nav-search">
        <input type="text" className="search-bar" onChange={this.handleSearch} placeholder="Search Courses By Keyword..." />
      </section>
    );
  }
```

Using an onchange event handler, an AJAX call is sent for each letter typed in the search bar, redirecting to the search display route only if the user is currently on another route (using the React Router). On the back end, the index controller takes an optional query parameter, returning courses filtered to only include those that have the query string in their title or description.

```
  def index
    @courses = Course.all
    if query && !query.empty?
      @courses = @courses.where(
        [
          'title ILIKE :query OR description ILIKE :query',
          { query: "%#{query}%" }
        ]
      )
    end
  end

  def query
    params[:search]
  end
```


## Course Projects
Users are able to upload projects to courses on the course assignment page. Projects consist of a title and description along with an uploaded cover image and variable number of image or PDF attachments, uploaded to S3 using AJAX and the paperclip gem. Projects are then displayed in a course gallery and detail view.

![](http://res.cloudinary.com/dischorde/image/upload/v1517628579/screenshots/project-detail.jpg)


## Editing
In the project detail view, projects are displayed with a cover image,  description, list of attachments. Project owners can delete attachments from that list or edit their own projects through a modal pop-up. They can also upload additional attachments through the form.


![](http://res.cloudinary.com/dischorde/image/upload/v1517628579/screenshots/editing-modal.jpg)



## Project Design

Artistera was designed and built in two weeks. View the original [proposal][proposal].

## Technology

Artistera is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [File storage][backend] via Cloudinary
- [Frontend technology][frontend]

## Additional Features
Future features to implement in Artistera are rich-text formatting for project submissions, course enrollments, a user dashboard, and sorting courses by category.

[artistera]: http://www.artistera.info
[proposal]: ./docs/README.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
