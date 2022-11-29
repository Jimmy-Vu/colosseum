<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Jimmy-Vu/colosseum">
    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52955/classical-building-emoji-clipart-md.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Colosseum</h3>

  <p align="center">
    A mobile responsive full stack web application for self betterment enthusiasts to find gyms of all types to improve on their physical capabilities.
    <br />
    <br />
    <a href="https://colosseum.fly.dev">View Live Demo</a>
    ·
    <a href="https://github.com/Jimmy-Vu/colosseum/issues">Report Bug</a>
    ·
    <a href="https://github.com/Jimmy-Vu/colosseum/issues">Make A Suggestion</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/88172055/199909019-73645edd-dc82-497f-a712-21fb78e5e7ac.png" />
 </p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

| Name        | Usage                                                                                                                |                     
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| [![React][React.js]][React-url] | Creating and rendering UI components into a larger application|
| [![Redux Toolkit][Redux-toolkit]][Redux-toolkit-url] | Managing the global state of the application |
| [![Node.js][Node.js]][Node.js-url] | Executing JavaScript code outside the web browser on the local machine|
| [![Express.js][Express.js]][Express.js-url] | Handling routes and API requests from the client|
| [![PostgreSQL][PostgreSQL]][PostgreSQL-url] | Used as the database of choice for storing and working with relational data |
| [![Sass/Scss][Sass]][Sass-url] | Expanding on the foundations of CSS with useful features such as variables, nested rules, mixins, imports, and inheritance |
| [![Webpack][Webpack]][Webpack-url] | Minifying and bundling all JS files into a single bundled file for the client to download|
| [![Babel][Babel]][Babel-url] | Transpiling modern JavaScript/JSX into a compatible version that can be used in both current and older browsers or environments|
| [![JWT][JWT]][JWT-url] | Keeping track of user sessions and authorization|
| [![Jest][Jest]][Jest-url] | Testing pure functions through unit tests|
| [![JavaScript][JavaScript]][JavaScript-url] | Handling logic for the application's functionality|
| [![HTML5][HTML5]][HTML5-url] | Setting up the physical structure of the application|
| [![CSS3][CSS3]][CSS3-url] | Applying styles to the structures of the application|



And support from the following libraries and tools:
* [Argon2](https://www.npmjs.com/package/argon2) - For hashing and salting passwords to be stored on the database
* [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides) - A library that interacts with the MapBox API to render map components
* [Cloudinary](https://cloudinary.com) - For hosting and storing images uploaded by the end users 
* [Fly.io](https://fly.io) - For hosting and running the application server through the provided CLI

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* postgreSQL

### Installation

1. Create a free Cloudinary account and get an Cloudinary key, secret, and URL at [https://cloudinary.com](https://cloudinary.com)
2. Create a free Mapbox account and get a free Mapbox API token at [https://www.mapbox.com/](https://www.mapbox.com)
3. Clone the repo
   ```sh
   git clone https://github.com/Jimmy-Vu/colosseum.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up a PostgreSQL database
5. Make a `.env` directory and set up your environment variables
   ```env
   PORT = 3001
   DEV_SERVER_PORT = 3000
   DATABASE_URL = ENTER YOUR POSTGRES DATABASE URL
   MAPBOX_TOKEN = ENTER YOUR MAPBOX API TOKEN
   CLOUDINARY_KEY = ENTER YOUR CLOUDINARY API KEY
   CLOUDINARY_SECRET = ENTER YOUR CLOUDINARY API SECRET
   CLOUDINARY_URL = ENTER YOUR CLOUDINARY API URL
   ```
6. Run the following NPM command to set up the schema and initial data seeding for the database
   ```sh
   npm run db:import
   ```
7. Run the following NPM command to start the dev server (webpack, Sass, and nodemon will watch for changes in the client, scss, and server files respectively)
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Work in Progress

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

#### Features
- [x] 1. Users can see the home page
- [x] 2. Users can browse gym listings
- [x] 3. Users can add a gym listing
- [x] 4. Users can edit a listing
- [x] 5. Users can sign up/login
- [x] 6. Users can leave a review

## Stretch Features
- [x] 1. User can see location of gym on a map
- [x] 2. User can filter and display gyms by type
- [ ] 3. User can search for gyms
- [ ] 4. User can add a gym to their favorites
- [ ] 5. User can send a message to the gym owner

See the [open issues](https://github.com/Jimmy-Vu/colosseum/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jimmy Vu - [@thrownewJimmy](https://twitter.com/thrownewJimmy) - contact@jimmyvu.co

Project Link: [https://github.com/Jimmy-Vu/colosseum](https://github.com/Jimmy-Vu/colosseum)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Unsplash](https://unsplash.com/) and their photographers for photos used in this application. The main photo used for the background of the application was taken by [Ruben Ramirez](https://unsplash.com/photos/nAb-SFzL1GM). 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/Jimmy-Vu/colosseum?style=for-the-badge
[issues-url]: https://github.com/Jimmy-Vu/colosseum/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=2e67c2
[linkedin-url]: https://linkedin.com/in/JimmyVu2
[twitter-shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/thrownewJimmy
[product-screenshot]: https://user-images.githubusercontent.com/88172055/199418985-691775c0-9479-4d32-a7c9-d3aa244e5a0e.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux-toolkit]: https://img.shields.io/badge/redux_toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-toolkit-url]: https://redux-toolkit.js.org/
[Node.js]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=77af63
[Node.js-url]: https://nodejs.org
[Express.js]: https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express&logoColor=f7e01d
[Express.js-url]: https://expressjs.com/
[PostgreSQL]: https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Sass]: https://img.shields.io/badge/SASS/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[Sass-url]: https://sass-lang.com/
[Webpack]: https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black
[Webpack-url]: [https://sass-lang.com/](https://webpack.js.org/)
[Babel]: https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black
[Babel-url]: https://babeljs.io/
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://www.w3.org/
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3.org/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
