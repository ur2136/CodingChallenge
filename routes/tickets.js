const express = require("express");
const router = express.Router();
const ticketsService = require('../services/tickets');

router.get("/", (request, response) => {
	ticketsService.getTickets()
	.then(res => {
		response.render("home", {
			tickets: res.tickets,
			meta: res.meta
		});
	})
	.catch((error) => {
		response.render("error", {
			err: error
		})
	})
});

module.exports = router;