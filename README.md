# _Face-Recognition-App-API_

Built using **Node.js** as an API endpoint for the main [**Face-Recognition-App**](https://github.com/SivaramPg/Face-Recognition-App) containing the front-end [**faceapp.sivaramp.com**](https://faceapp.sivaramp.com)

It provides all the functionality that the front end is expecting on fetching data from the [**Clarifai API**](https://clarifai.com).

It takes care of the various functions associated with different requests and routes the requests and responses accordingly. It is also built with security in focus so as to ensure no sensitive information is exposed in requests or responses or even the console.

### Steps to start:

1. Clone this repo

2. Go to Face-Recognition-App-API
   This is the main project folder for the front end.

3. Run npm install
   This will install all the dependencies.

4. You must add your own API key in the `controllers/image.js` file to connect to Clarifai.

You can grab Clarifai API key [here](https://www.clarifai.com/)

5. Run npm start
   This will run the server, on port 3000

6. Go to [**Face-Recognition-App**](https://github.com/SivaramPg/Face-Recognition-App) & Clone the repo.
   This is the Main App i.e. the front-end for the application

7. Run npm install
   This will install all the dependencies.

8. Then run npm start
   Press Y when prompted for using another port
   (Since 3000 is default for create-react-app module and it is occupied)
   It will use the port 3001

### Configuring Database:

\*\* Make sure you use postgreSQL instead of mySQL for this code base.

1.  Create a database face-recog
2.  Create table users and login, with following structure:
    (Generated using \d tb_name in psql)

                                        Table "public.users"

| Column  | Type                        | Modifiers                                          |
| ------- | --------------------------- | -------------------------------------------------- |
| id      | integer                     | not null default nextval('users_id_seq'::regclass) |
| name    | character varying(100)      |
| email   | text                        | not null                                           |
| entries | bigint                      | default 0                                          |
| joined  | timestamp without time zone | not null                                           |

Indexes:
"users_pkey" PRIMARY KEY, btree (id)
"users_email_key" UNIQUE CONSTRAINT, btree (email)

                                 Table "public.login"

| Column | Type                   | Modifiers                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| id     | integer                | not null default nextval('login_id_seq'::regclass) |
| hash   | character varying(100) | not null                                           |
| email  | text                   | not null                                           |

Indexes:
"login_pkey" PRIMARY KEY, btree (id)
"login_email_key" UNIQUE CONSTRAINT, btree (email)

3. Enter user and password for the database in server.js

#### Modules used:

1. [clarifai](https://www.npmjs.com/package/clarifai)
2. [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
3. [body-parser](https://www.npmjs.com/package/body-parser)
4. [cors](https://www.npmjs.com/package/cors)
5. [express](https://www.npmjs.com/package/express)
6. [knex](https://www.npmjs.com/package/knex)
7. [pg](https://www.npmjs.com/package/pg)
8. [nodemon (devDependency)](https://www.npmjs.com/package/nodemon)
