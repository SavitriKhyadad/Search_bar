## Learning Path

## Technologies Used

- NodeJS
- ExpressJS

## References

- Learn JavaScript - (https://github.com/getify/You-Dont-Know-JS)
- ExpressJS (https://expressjs.com/en/guide/routing.html) 

## Pre-requisites

- Node.js (https://nodejs.org/en/) 

- Git (https://git-scm.com/downloads)

- After installation check whether you can access above applications from your terminal/command prompt

## Start Server

- Clone this repository in your computer

  `https://github.com/transil/CareerStackData.git`

  You may be prompted to enter the username and password [transil's github credentials]

- Open command prompt in the folder `CareerStackData/JobRoleData/OnetData` directory

- Type the following command to install dependencies.

  `npm install`

- Once installation is complete build the project using the following command

  `npm run build`

- To start the server, type the following command

  `npm run start`

- You can verify that server is start by going to (http://localhost:3000/) in your browser.

- Use REST Client like postman (https://www.getpostman.com/downloads/) 

  or insomnia (https://insomnia.rest/download/) to test your API

- Given a list of 960 odd jobroles, select a jobrole to querry.

- Give the input in REST Client as `http://localhost:3000/api/main/[jobRole]`  change the request method to post and send.

- On succesful API request, you will recieve a response with status code 200. This shows that the API is working fine and you have correctly provided all the required parameters.

- The filtered data gets stored in JSON file format.