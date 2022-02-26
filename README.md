# Extension-Pass

## Table of Contents
 1. <a name="group">Group Members</a>
 2. <a name="tech">Technology Used</a>
 3. <a name="story">User Story</a>
 4. <a name="motivation"> Team's Motivation</a>
 5. <a name="pitch">Elevator Pitch</a>
 6. <a name="screen">Screenshot</a>
 7. <a name="future">Future Plans</a>
 8. <a name="heroku">Heroku Link</a>

## <a name="group">Group Project Members</a>
- Andrew Yun 
- Jeremy Huynh 
- Kaylin Boyle 
- Gregory Alcala

## <a name="license">License</a>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright 2022 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## <a name="installation">Installation</a><br>
### Clone the repository
- $git clone git@github.com:jermeewinn/extension-pass.git
### Install npm dependencies
- $npm install sequelize dotenv express express-handlebars express-session mysql2 bcrypt
### Initialize the database
- $mysql -u root -p
- $source db/schema.sql;
- $USE extensionpass_db;
- $exit
### Open localhost
- $npm start
- Open a web browser and go to localhost:3003

## <a name="tech">Technology used for this project:</a><br>
○ CSS Bulma <br>
○ SQL <br>
○ NODE.JS<br>
○ Sequelize <br>
○ Express.JS<br>
○ JavaScript<br>
○ Handlebars.JS<br>
○ TinyMCE WYSIWYG HTML Text Editor<br>

## <a name="story">User Story</a>
AS a traveller:
I want to document my experiences to cities I’ve visited
SO THAT others know what to expect when visiting certain destinations.
GIVEN a user creates an account:

WHEN I create/login into an account,
THEN I am presented with the main page with options to document cities I’ve visited, places I want to go, and read user-generated reviews that other users have created for certain cities.

WHEN I click dashboard,
THEN I am shown a list of my previous posts.

WHEN I want to create a new post,
THEN I am prompted to enter the location I visited, and enter a text describing my travels to said city.

WHEN I want to comment on a post,
THEN I click on comments and it will allow us to comment on a post, and the number of comments on a post will reflect in the main page.

## <a name="pitch">Elevator Pitch</a>
Extension Pass is a comparative travel blog where we take user input on places they’ve been to, any notes they took on their destinations, and list any other locations they would like to visit in the near future. 
Here, users will be able to not only share their travel stories, but also see the experiences of others as worldwide travel plans are being made. This way, users will be better informed on what destinations are unique, and which destinations can be passed on.


## <a name=screen>Screenshoot of the working website</a>
[GIF](https://user-images.githubusercontent.com/88611613/148153989-ce09e8e1-06c6-466d-80ec-4d8ee377602c.gif)

## <a name=future>Future Plans!</a>

○ Something we want to do is to allow users to upload any photos/videos they took at these locations to their individual posts like you see on Reddit, Instagram, or Facebook <br>
○ Algorithm that makes suggestions on new destinations to visit based on your previous post locations and/or your search history. <br>
○ Search functionality for specific cities you want to look up.
○ Implement new APIs like a currency exchange and time-zone converter so that users can get more use out of the app.


## <a name="heroku">Hosted at:</a>
HEROKU link: https://whispering-plains-41505.herokuapp.com/
