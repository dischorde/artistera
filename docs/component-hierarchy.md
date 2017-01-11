
# Component Hierarchy

#### AuthFormContainer
 - AuthForm (Sign Up & Sign In)


#### NavBar
 - Search

#### HomeContainer
 - Home
	 - Splash
	 	 - CourseList
			 - CourseListItem
	 - CourseIndex
		 - CourseList
			 - CourseListItem
	 - SearchResults
		 - CourseList
			 - CourseListItem
	 - ProjectIndex
		 - ProjectList
			 - ProjectListItem

#### CourseDetailContainer
 - CourseDetail
	 - EmbeddedVideo
	 - CourseTabs
	 - About
		 - ProjectList
			 - ProjectListItem
	 - Reviews
		 - ReviewsList
			 - ReviewsListItem
        - ReviewForm
		 - ReviewForm
	 - Assignment
		 - AttachmentsList
		 - ProjectForm
        - AttachmentsList
	 - Projects
		 - ProjectsList
			 - ProjectsListItem

#### ProjectDetailContainer
  - ProjectDetail
    - ProjectData
      - AttachmentsList
    - ProjectForm
      - AttachmentsList

#### Footer

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/courses" | "HomeContainer", "CourseIndex" |
| "/projects" | "HomeContainer", "ProjectIndex" |
| "/search" | "HomeContainer", "Search Results" |
| "/projects/:projectid" | "ProjectDetailContainer" |
| "/courses/:courseid" | "CourseDetailContainer", "About" |
| "/courses/:courseid/assignment" | "CourseDetailContainer", "Assignment" |
| "/courses/:courseid/projects" | "CourseDetailContainer", "Projects" |
| "/courses/:courseid/reviews" | "CourseDetailContainer", "Reviews" |
