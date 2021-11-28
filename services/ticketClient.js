const axios = require('axios');
const clientConfig = require('../config.js');

function getTickets(qParams) {
var configuration = {
	headers: {
		"Content-Type": "application/json",
		"Authorization": clientConfig.getAuthHeader()
	}
};
return axios.get(getURL(qParams), configuration)
.then(function (res) {
  return res;
})
.catch(function (err) {
	var error = new Error(res.statusText);
	error.response = res;
	throw error;
}); 
}

function getURL(qParams) {
	var apiUrl = 'https://'+process.env.SUBDOMAIN+'.zendesk.com/api/v2/tickets.json?page[size]=25';
	if (qParams.nextpage) {
		apiUrl += '&page[after]=' + qParams.nextpage;
	}
	else if (qParams.previouspage) {
		apiUrl += '&page[before]=' + qParams.previouspage;
	}
	return apiUrl;
}

exports.getTickets = getTickets;