# GitHub Commit Feed 
A browser app that loads commits from a GitHub repository and display them in a table (similar to a Twitter feed).

## Technical Details
- React Hooks
- React Router v6
- Typescript
- GitHub Rest API

## Features
The URLs determine which GitHub repository’s commits are shown.

http://localhost:3000/crystalmaro/eyessee
  - Displays commits for https://github.com/crystalmaro/eyessee
  - The table of commits include:
    - Date of commit
    - Message of commit which is also an URL to commit
    - Author of commit
  - Initially, it loads at most 30 commits
  - If there are more commits to load, there will be a "Load More" button at the bottom of the page

http://localhost:3000
  - The root path with a form that has two input fields and a submit button
  - One input for entering the Github user/org and the other for entering the repo name
  - Submitting the form should take you to the commit list page (above) for that repository

http://localhost:3000/does/not/exist
  - The path users are redirected to when a repo doesn’t exist, which doesn't display any commits and have a button to go back to the home/search page

## Testing
Since we're using the default test from create-react-app with React Router, we'll wrap a `MemoryRouter` around the component we want to test against. MemoryRouter works when you don't need access to the history object itself in the test, but just need the components to be able to render and navigate.

## Images
http://localhost:3000

<img src="https://user-images.githubusercontent.com/30251553/155826019-5eff5ef3-7ca5-4079-8a40-fc6199edda16.png" width="300">

http://localhost:3000/crystalmaro/eyessee

<img src="https://user-images.githubusercontent.com/30251553/155825783-d3e66b32-ad5e-4583-9b9d-28a4bae59352.png" width="500">
<img src="https://user-images.githubusercontent.com/30251553/155826158-c528f2f0-3260-4d95-8baa-d27f13d5bd4e.png" width="500">

http://localhost:3000/does/not/exist

<img src="https://user-images.githubusercontent.com/30251553/155825907-e7fd41d9-ebeb-4ced-8b87-019d9a6fd3e4.png" width="300">


## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
