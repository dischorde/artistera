
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
	 - Assignment
		 - AttachmentsList
		 - ProjectForm
	 - Projects
		 - ProjectsList
			 - ProjectsListItem


#### ProjectDetailContainer

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