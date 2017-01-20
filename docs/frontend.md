# Frontend

Artistera is a single-page application that uses React and Redux to manage the application state.

## Dependencies

Node package manager (npm) is used to install all of the frontend dependencies. All of the React components, API utilities, reducers, and store are located in the [frontend](../frontend) directory, and bundled by Webpack. The bundled file is located in `/app/assets/javascripts` and included in the main `application.js` file.

Other frontend dependencies include:

- React DOM
- React Router
- React History to manipulating the browser history
- React Modal
- React Redux
- Redux Thunk
- Babel

## Styling & Seed Data

Site layout and styling is written in SCSS and located in the `/app/assets/stylesheets` directory. Flex boxes were a major help in the design process. Video playlists are embedded from youtube, all images used are from either unsplash.com, pexels.com, another CC0 designated source, or copyright Katarina Rossi. Waterlogue, Prisma, and Photoshop were used to emulate artwork. Major fonts used include Lato, Open Sans, and Bromello for the logo and decorative touches.