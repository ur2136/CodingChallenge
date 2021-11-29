const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	response.status(404).render("error",
	{
		err: {
			message: "Oops! The page you are looking for does not exist."
		}
	})
});

module.exports = router;