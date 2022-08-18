# Welcome to Percy Health App

## About

Percy Health App is a functional showcase for the capabilities of the in-progress Percy Health API.

`src/AppNavigator.js` contains the code outlining the navigation structure of the app
`src/scripts/screens` contains the rendering code for each screen
 * `./QuestionMaker.js` is the function which renders each question in a survey. This code is used in `./SF12Screen.js` and `./SF36Screen.js`
 
 `src/scripts/state` and `src/scripts/services` contains the code for pulling data from the backend server

## Setup

1. Clone this repository into Visual Studio Code
2. Run `yarn` to install all packages
3. `cd ios` and run `pod install` to install all pods
4. Run `yarn run ios` to start the simulator
5. Ensure backend server is running locally (see that repository for setup instructions)

### Contributors
- [John Pumayalli](https://github.com/johngenopuma)
- [Laurel Dernbach](https://github.com/laureldernbach)

