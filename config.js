require('dotenv').config();

function getAuthHeader() {
	return 'Bearer ' + process.env.TOKEN;
}

exports.getAuthHeader = getAuthHeader;