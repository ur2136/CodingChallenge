# Zendesk Ticket Viewer

## Problem Statement
The project involved building a ticket viewer that will connect to the Zendesk API and requests and displays all the tickets for a particular account.

## Features Implemented
1. The user interface displays 25 tickets at a time, with their IDs and statuses displayed in a table. The user can click on Previous or Next Buttons to navigate between pages and view more tickets. If tickets are exhausted (no remaining tickets for the account), 'No tickets' message is displayed. I have also handled the API URL being invalid or unavailable with the help of error route with a custom message saying 'API Not Available/Invalid' and the reason for failure is printed as well.
2. When the user clicks on 'More Details' button corresponding to a particular ticket, a modal opens up that displays the Subject, Description and Created At fields for a ticket. This proved to be really challenging for me because initially my ejs page was behaving incorrectly and the modals were showing the wrong text (i.e. same values for all tickets). After debugging the code, I realised that the id attributes inside the HTML elements need to have unique values and hence data-target attribute and id attribute both have to be appended with the ticket id which will be unique for each ticket.
3. The application connects to the API using OAuth Client Token Authentication.
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
Also EJS allows to use Javascript code directly inside the template which means loops, if conditions etc can be used inside a template. Other templates use their own syntax and do not directly write Javascript.
* I used Axios for making HTTP requests from NodeJs as Axios performs automatic transformations of JSON Data, is more secure, has better error handling and is supported by more browsers as compared to node-fetch which is also quite popular.

## Installation
Download or Clone the GIT repo. Checkout to main branch using the command :

`git checkout main`

Now navigate to the project folder using :

`cd CodingChallenge`

Now install node modules required for the project using :

`npm install`

Now to run the app, use the command :

`node app`

Credentials are stored in .env file under the titles SUBDOMAIN and TOKEN. .env files should not be checked in on GIT to prevent them from being compromised however the file has been added here for review (with removed credentials).

## Tests
Unit tests have been written for API endpoints which involves checking both the network response as well as the data received. Unit tests are written using SuperTest and Mocha framework. SuperTest is a library used to assert network requests through another library superagent. Tests can be run by using the command:

`npm test` 

This command has to be run while the app is running (node app).

Scenarios tested using unit tests:
1. The tickets are being rendered along with the previous and next buttons when user loads the home page.
2. The next page of tickets is being rendered when user clicks on the next button.
3. The previous page of tickets is being rendered when user clicks on the previous button.
4. The 'No tickets' error message is being displayed when user clicks on previous button from the first page of tickets.
5. The 'Oops! The page you are looking for does not exist.' error message is displayed when user hits an invalid URL.
6. The 'API Not Available/Invalid' error message is displayed when the API is unavailable or wrong.

## Author
Umang Raj

