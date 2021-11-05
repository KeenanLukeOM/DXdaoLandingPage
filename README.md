# Build Instructions 

## DXdao Website

The DXdao website was built using Gatsby, a React framework used to build static sites more easily. You can find more detailed information about the build process using Gatsby [here](https://docs.google.com/spreadsheets/d/1I_CEgVf2uXw-o-zxDba5C5zkh_gbrVpwYYA2ih2noEo/edit#gid=131502125).

You can find the project repo [here](https://github.com/KeenanLukeOM/DXdaoLandingPage).


## Development 

After making a local copy of the repo by cloning it, you can run the development process running `npm run develop` on the repo root directory. A local server will be fired by this process and the site will be accessible by navigating to localhost:8000 with your browser (8000 is the default port. If it's already being used at the moment by another process, the server will be started with the next available port. ie: 8001, 8002, etc).


## Building

You could run `npm run build` on the repo root to build a local copy of the repo. This will populate the 'public' folder with a static version of the site, which could be placed inside the root folder of a static server.