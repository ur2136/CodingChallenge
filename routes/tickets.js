const express = require("express");
const router = express.Router();
const ticketsService = require('../services/tickets');

//request.query defines the query params supplied by home.ejs based on user i/p : next or previous page (appended to URL)
router.get("/", (request, response) => {
	ticketsService.getTickets(request.query)
	.then(res => {
		response.render("home", {
			tickets: res.data.tickets,
			meta: res.data.meta
		});
	})
	.catch((error) => {
		response.render("error", {
			err: error
		})
	})
});

module.exports = router;