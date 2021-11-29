# Zendesk Ticket Viewer

## Problem Statement
The project involved building a ticket viewer that will connect to the Zendesk API and requests and displays all the tickets for a particular account.

## Features Implemented
1. The user interface displays 25 tickets at a time, with their IDs and statuses displayed in a table. The user can click on Previous or Next Buttons to navigate between pages and view more tickets. If tickets are exhausted (no remaining tickets for the account), 'No tickets' message is displayed. I have also handled the API URL being invalid or unavailable with the help of error route with a custom message saying 'API Not Available/Invalid' and the reason for failure is printed as well.
2. When the user clicks on 'More Details' button corresponding to a particular ticket, a modal opens up that displays the Subject, Description and Created At fields for a ticket. This proved to be really challenging for me because initially my ejs page was behaving incorrectly and the modals were showing the wrong text (i.e. same values for all tickets). After debugging the code, I realised that the id attributes inside the HTML elements need to have unique values and hence data-target attribute and id attribute both have to be appended with the ticket id which will be unique for each ticket.
3. The application connects to the API using OAuth Client Token Authentication (Token value stored under TOKEN heading inside .env file).
4. Cursor based pagination is implemented.

## Technology Stack
* HTML/CSS : For UI development
* Bootstrap : For UI development
* NodeJs : For backend development
* Express : For backend development (to handle routing) 
* Axios : For making http requests from NodeJs
* SuperTest : For writing unit tests to test the API
* Mocha : For writing unit tests to test the API
* EJS : Templating Engine to render UI layouts. It also allows us to inject dynamic data at runtime.

## Design Considerations
* I used EJS in place of the other templating frameworks like Pug because having known HTML and CSS from before, it was much simpler for me to pick up EJS syntax. 
Also EJS allows to use Javascript code directly inside the template which means loops, if conditions etc can be used inside a template. Other templates use their own syntax and do not directly write Javascript. I had never used a templating framework before and I definitely need to read more about EJS and its usage.
* I used Axios for making HTTP requests from NodeJs as Axios performs automatic transformations of JSON Data, is more secure, has better error handling and is supported by more browsers as compared to node-fetch which is also quite popular.
* I have kept the frontend simple and lightweight by using basic HTML, CSS, Bootstrap and EJS.
* Node and Express have been used for backend development, and the backend is kept as simple as possible.

## Future Scope
* In order to build a full stack application that could support many different components and functionalities, a framework like AngularJS or React can be used.
* The website can be styled better and made more responsive with the help of Bootstrap templates and components.
* In terms of test coverage, we can add automation test scenarios and cucumber user stories to perform end-to-end testing of the application flows. Currently API endpoints and functions used to call these endpoints are being tested.
* The pagination can be made better by exactly determining how many pages of data is available and allowing user to navigate between any of these pages rather than having only 2 possible options : Previous and Next.
* A landing page (home page) can be added rather than directly rendering all the tickets when the application is first opened on the browser.

## Installation
Download or Clone the GIT repo. Now navigate to the project folder using :

`cd CodingChallenge`

Checkout to main branch using the command :

`git checkout main`

NOTE : Credentials are stored in .env file under the titles SUBDOMAIN and TOKEN. .env files should not be checked in on GIT to prevent them from being compromised so the file will have to be created locally by the user who runs the app (instructions below). In order to run the app locally, the user will have to provide values for SUBDOMAIN and TOKEN fields where SUBDOMAIN is the Zendesk Subdomain Name and TOKEN is the OAuth Authorization Token for a user.

Create a file called `.env` inside the root directory with contents:

`SUBDOMAIN=<name-of-zendesk-subdomain>`


`TOKEN=<oauth-authorization-access-token>`

 
where `<name-of-zendesk-subdomain>` is the name of the zendesk subdomain and `<oauth-authorization-access-token>` is the oauth authorization access token for the user.

Now install node modules required for the project (in the root directory) using :

`npm install`

Now to run the app, use the command (in the root directory) :

`node app`

Opening http://localhost:3000/ on the browser will now open Zendesk Ticket Viewer.


## Tests
Unit tests have been written for API endpoints which involves checking both the network response as well as the data received. Unit tests are written using SuperTest and Mocha framework. SuperTest is a library used to assert network requests through another library superagent. Tests can be run by using the command:

`npm test` 

This command has to be run while the app is running (node app) because the API tests require a running server to execute the test scenarios. Individual unit test cases in unit-tests.js file don't require a server to be run to run them, and in order to avoid 'address in use' error, these unit tests are being run on port 3002.
Running the aforementioned command runs all the 9 unit tests (API endpoint tests + unit tests).

Scenarios tested using unit tests:
1. The tickets are being rendered along with the previous and next buttons when user loads the home page.
2. The next page of tickets is being rendered when user clicks on the next button.
3. The previous page of tickets is being rendered when user clicks on the previous button.
4. The 'No tickets' error message is being displayed when user clicks on previous button from the first page of tickets.
5. The 'Oops! The page you are looking for does not exist.' error message is displayed when user hits an invalid URL.
6. The 'API Not Available/Invalid' error message is displayed when the API is unavailable or wrong.

## Author
Umang Raj

