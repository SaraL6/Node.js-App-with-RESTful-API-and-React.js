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

For this project, I made a Node.js REST API application with React.js,which searches for artists with the last.fm API.
When you search for an artist by name, it returns all artist matches sorted by relevance.
If the name isn't available, it returns the top artists of last.fm.

### Built With

- [React js](https://reactjs.org/)
- [Node js](https://nodejs.org/)
- [express](https://expressjs.com/)
<!-- GETTING STARTED -->

## Getting Started

In order to make the project run on your computer, follow these steps :

NOTICE :

- You can global search for " \***\*REMOVED\*\*** " to easily locate all the information that needs to be replaced in the project.

### Prerequisites

- [Last.fm](https://www.last.fm/join/) account

### Installation

- Clone the repo and cd into the project's folder

  ```sh
  git clone https://github.com/SaraL6/Node.js-App-with-RESTful-API-and-React.js.git
  ```

  ```sh
  cd Node.js-App-with-RESTful-API-and-React.js
  ```

  ```sh
  cd client
  ```

- In your terminal, execute :

  ```sh
  npm install
  ```

- Cd back into the project's folder and execute in your terminal :

  ```sh
  cd ..
  ```
  
  ```sh
  cd server
  ```

  -create an .env file in the root of the server folder and insert your Last.fm API key under the variable LASTFM_API_KEY

  ```sh
  LASTFM_API_KEY = ""
  ```

  - Install nodemon

  ```sh
  npm install -g nodemon
  ```

  -Install  express.js

  ```sh
  npm i express
  ```
 -Start the server:

  ```sh
  npm run dev
  ```

  -Cd back into client

  ```sh
  npm start
  ```

<!-- CONTACT -->

## Contact

Sara LACHGAR - [LinkedIn](https://www.linkedin.com/in/sara-lachgar/) - lachgarsara0@gmail.com

Project Link: [https://github.com/SaraL6/Node.js-App-with-RESTful-API-and-React.js](https://github.com/SaraL6/Node.js-App-with-RESTful-API-and-React.js)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Bootstrap](https://getbootstrap.com//)
- [Material-ui](https://material-ui.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [express](https://expressjs.com/)
