var moment = require('moment');

exports.parse = function(param){
	param = (isNaN(param)) ? param : parseInt(param);
	
	if (typeof param === 'number'){
		var unix = param;
		var natural = moment.unix(param).format("MMMM D, YYYY");
	}
	else if(typeof param === 'string'){
		var unix = moment(param, "MMMM D, YYYY").unix('x');
		var natural = param;
	}
	
	var response = {
		"unix": unix,
		"natural": (!unix) ? null : natural
	}

	return response;
}