# _Face-Recognition-App-API_

Built using **Node.js** as an API endpoint for the main [**Face-Recognition-App**](https://github.com/SivaramPg/Face-Recognition-App) containing the front-end [**facerecognition-smart-brain.herokuapp.com**](https://facerecognition-smart-brain.herokuapp.com)

It provides all the functionality that the front end is expecting on fetching data from the [**Clarifai API**](https://clarifai.com).

It takes care of the various functions associated with different requests and routes the requests and responses accordingly. It is also built with security in focus so as to ensure no sensitive information is exposed in requests or responses or even the console.

It uses modules like **Express.js**, **body-parser**, **bcrypt**, **knex**, **clarifai** & **cors**.
