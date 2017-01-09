```js
// Sample State Shape
{
  currentUser: {
    id: 1,
    username: "uzrone"
  },
  errors: {
    signUp: {errors: []},
    logIn: {errors: []}
  },
  classes: {
    1: {
      title: "Modern Calligraphy",
      cover_img_url: "/some/url/here"
    },
    2: {
      //...
    },
    //...
  },
  projects: {
    1: {
      title: "A Week of Watercolors",
      cover_img_url: "/some/url/here"
    },
    2: {
      title: "Bullet Journal January Set Up",
      cover_img_url: "/some/url/here"
    },
    //...
  },  
  projectDetail {
    id: 1,
    name: "Katie's Calendar",
    description: "A cute calendar with modern calligraphy lettering..."
    author: { 
      id: 24,
      first_name: "Katie",   
      last_name: "ExamplePants",   
      gravatar_hash: "SOME_HASH"
    },
    cover_img_url: "/some/url/here",
    attachments: [
      {
        // however a paperclip attachment will appear
      },
      // ...
    ]
  },
  classDetail: {
    id: 1,
    title: "Modern Calligraphy",
    playlist_src: "youtube/playlist/embed/url"
    cover_img_url: "/some/url/here",
    description: "long blurb...",
    assignment_summary: "Show off your new skills by doing lettering for a calendar"
    assignment: {
      id: 45,
      title: "Modern Calligraphy Calendar DIY",
      description: "To show off what you learned, you will be adding ...",
      deliverable: "Digital pdf of calendar with added lettering...", 
      materials: "Nibs, Ink, Paper, Holders ...",
      resources: "Check out my site for more lettering tutorials ... ",
      attachments: [
        {
          // however a paperclip attachment will appear
        }
        //...
      ]
    },
    reviews: [
      {
        id: 1,
        body: "I really enjoyed this class, learned a lot and my handwriting is better too!"
        author: { 
          id: 24,
          first_name: "Katie",   
          last_name: "ExamplePants",   
          gravatar_hash: "SOME_HASH"
        }
      },
      //...
    ],
    projects: [
      {
        id: 1,
        name: "Katie's Calendar",
        cover_img_url: "/some/url/here",
      },
      //...
    ]
  }
}
```