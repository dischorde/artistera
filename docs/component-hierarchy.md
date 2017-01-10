
# Component Hierarchy

#### AuthFormContainer
 - AuthForm (Sign Up & Sign In)


#### NavBar
 - Search

#### HomeContainer
 - Home
	 - Splash
	 	 - ClassList
			 - ClassListItem
	 - ClassIndex
		 - ClassList
			 - ClassListItem
	 - SearchResults
		 - ClassList
			 - ClassListItem
	 - ProjectIndex
		 - ProjectList
			 - ProjectListItem

#### ClassDetailContainer
 - ClassDetail
	 - EmbeddedVideo
	 - ClassTabs
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
| "/classes" | "HomeContainer", "ClassIndex" |
| "/projects" | "HomeContainer", "ProjectIndex" |
| "/search" | "HomeContainer", "Search Results" |
| "/projects/:projectid" | "ProjectDetailContainer" |
| "/classes/:classid" | "ClassDetailContainer", "About" |
| "/classes/:classid/assignment" | "ClassDetailContainer", "Assignment" |
| "/classes/:classid/projects" | "ClassDetailContainer", "Projects" |
| "/classes/:classid/reviews" | "ClassDetailContainer", "Reviews" |
