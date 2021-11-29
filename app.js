const express = require('express');
const http = require('http');
const path = require('path');
require('dotenv').config();
const port = 3000;
const app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//public assets
app.use(express.static(__dirname+'/public'));

//routes
var tickets = require('./routes/tickets');
var error = require('./routes/error');

app.use("/", tickets);
app.use("/tickets", tickets);
app.use("*", error);

if(process.env.NODE_ENV === 'test') {
	app.set('port', 3002);
}
else {
    app.listen(port, () => console.log(`App started on ${port}`));
}

module.exports = app;