# Level 3 Capstone project, iTunes Search API

# Welcome To my final project for HyperionDev's full stack bootcamp! 🥳

## Purpose

This project is a display of all skills I've learned during my time with HyperionDev.
Utilising front and back end technologies, this full stack app interacts seemlessly with the iTunes search API in order to present stylish and attractive search results to the user.

## Getting started

To run this project, all you need to do is execute a few commands in the root directory.

first, run
`npm install`
to install "concurrently" to the root

secondly, run
`npm run install-all`
to install frontend and backend dependencies

lastly, run
`npm run dev`
to start the front and back end servers

### NOTE: you may have to run dev twice in order to generate the /dist folder in which the typescript is compiled

## Key Features

- Ability to add favourites

  - When a user loads this app, they'll be greeted by a favourites page, encouraging them to begin searching and add some content to their favourites list.
  - All individual pieces of content have a star shaped button with them, which adds it to the favourites list.
  - These favourites are stored in session storage so that they persist between page refresh.

- Ability to search for specific content

  - The search bar in the header of the page is set to "all" by default. However, clicking this will present a drop-down menu in which the user can filter for the type of content they want
  - The search bar sends a request to the backend containing the search term, and the media type, which is then sent off to the iTunes API to get the results.
  - The results are immediately presented to the user in a smoothly animated container below the search bar, and they act as links which can navigate the user to a specific content-page.
  - Pressing enter after searching will navigate the user to /collection, which displays all the results they searched for in an attractive way

- Album interactivity

  - music content has an extra link on its ResultCardExtended component, which navigates the user to /collection/album/:id, where id represents the collectionId property of the album
  - This page displays all details about the album, including title, author, price, release-date, all songs in the album, and even a link to view it in the iTunes store.

- Vite Pages

  - the pages plugin for vite implements a NextJS style routing system, where the pages directory defines the url routes.
  - I really like this approach, because it allows the pages directory to be formatted in a way which reflects the routes, and makes it really easy to read.
  - the use of square brackets in file names denotes that the route is dynamic

- framer-motion
  - I experimented with framer-motion for this project, just to add some extra styling to the page.
  - I really like the way it seemlessly integrates exit animations, by only adding one extra component to the elements.
  - using this allowed me to create the staggered animations for resultCards, the smooth drop-down when you click the search bar, and many small fade-in animations.
