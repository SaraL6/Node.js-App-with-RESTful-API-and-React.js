# A Node.js RESTful API App with React.js 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

For this project, I made a Node.js Application with RESTful API and React.js.
It is a Search engine for searching for artists with the last.fm API.
When you search for an artist by name, it returs all artist matches sorted by relevance.
If the name isn't available, it returns the top artists of last.fm.


### Built With

* [React js](https://reactjs.org/)
* [Node js](https://nodejs.org/)


<!-- GETTING STARTED -->
## Getting Started

In order to make the project run on your computer, follow these steps :

NOTICE : 
* You can global search for " ****REMOVED**** " to easily locate all the information that needs to be replaced in the project.


### Prerequisites





### Installation

* Clone the repo and cd into the project's folder

   ```sh
   git clone https://github.com/AdamOB1290/amazon-clone.git
   ```
   ```sh
   cd amazon-clone
   ```

* In your terminal, execute :

   ```sh
   npm install
   ```

* Cd to /functions and execure in your terminal :

   ```sh
   cd functions
   ```
   ```sh
   npm install
   ```

* In [Unsplash](https://unsplash.com/developers), register your app and copy the access key

* Paste the key in src/Seeder.js line 8, like so :

    ```sh
    accessKey: "access key goes here",
    ```
    
* In [Stripe](https://stripe.com/), copy paste your Publishable key in src/App.js at line 19 :

    ```sh
    const promise = loadStripe("publishable key goes here");
    ```

* Copy paste your stripe Secret key in functions/index.js at line 4 :

    ```sh
    const stripe = require("stripe")("secret key goes here");
    ```

* In [Firebase](https://firebase.google.com/), go to project settings and copy paste your project ID in the file .firebaserc :

    ```sh
    {
     "projects": {
     	"default": "project ID goes here"
     }
    }
    ```
* In project settings, copy the CDN of the Firebase SDK snippet and paste it in src/firebase.js :

    ```sh
    	const firebaseConfig = {
  		apiKey: "apiKey goes here",
  		authDomain: "authDomain goes here",
  		databaseURL: "hdatabaseURL goes here",
  		projectId: "projectId goes here",
  		storageBucket: "storageBucket goes here",
  		messagingSenderId: "messagingSenderId goes here",
  		appId: "appId goes here",
  		measurementId: "measurementId goes here"
	};
    ```	

* In your terminal, cd back to amazon-clone and execute the following : 

    ```sh
    	firebase emulators:start
    ```	

* Copy the api url returned by the previous command and paste it in src/axios.js at line 5 :

    ```sh
    	+  functions[api]: http function initialized (url to copy from the terminal).
    ```	

    ```sh
    	const instance = axios.create({
  		// THE API (cloud function) URL
  		baseURL: "the api url goes here",
	});
    ```	

* (Optional) To seed the database with products, uncomment the Seeder() function in src/App.js at line 28.
 It takes about 10 seconds to work (don't forget to comment it back once the database is populated).

<!-- CONTACT -->
## Contact

Adam LOUALI - [LinkedIn](https://www.linkedin.com/in/adam-louali/) - loualiadam0@gmail.com

Project Link: [https://github.com/AdamOB1290/amazon-clone](https://github.com/AdamOB1290/amazon-clone)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Stripe](https://stripe.com/) account
* [Tailwind](https://tailwindcss.com/)
* [Material-ui](https://material-ui.com/)
* [Slick Carousel](https://kenwheeler.github.io/slick/)
* [Unsplash](https://unsplash.com/developers)
* [Faker](https://github.com/fzaninotto/Faker)



























<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
