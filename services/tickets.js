const axios = require('axios');
function getTickets() {
var configuration = {
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	}
};
return axios.get('https://'+process.env.SUBDOMAIN+'.zendesk.com/api/v2/tickets.json?page=1'+'&per_page=25', configuration)
.then(function (res) {
  return res;
})
.catch(function (err) {
	console.log(err);
	var error = new Error(res.statusText);
	error.response = res;
	throw error;
}); 
}
exports.getTickets = getTickets;