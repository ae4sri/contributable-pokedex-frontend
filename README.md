# Contributable Pokedex Frontend
This is the frontend for my contributable pokedex app, which can be found over here: https://github.com/ae4sri/contributable-pokedex.

## Description

The front-end was built in React, using Create-React-App, using Material UI and Apex Charts for help styling. Apollo Client is used to communicate with the backend (which uses Apollo server). 

## Scripts

The scripts are the default Create-React-App scripts. `npm install` will need to be run in order to install the dependencies, in package.json. Run `npm start` to open up the front-end in development mode (make sure to have the backend running as well so the app will actually work), and `npm run build` will create a production version of the app the 'build' folder.


## Routes

### /
The index page. Display a paginated table of all Pokemon in the database

### /signin
Login to the admin page from here. Must enter the secret key that matches with the one on the backend.

### /admin
/signin will redirect here if the correct secret key was entered. Without going to /signin first to enter the key, /admin will redirect to the index page.

### /create
Page with the form to create a Pokemon.

### /search
Page with the form to search Pokemon, simply enter whatever parameters you'd like and view a table of the filtered Pokemon by pressing enter, or the search button.
