var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var baseUrl = req.baseUrl;
	while(baseUrl.charAt(0) === '/')
	{
		baseUrl = baseUrl.substr(1);
	}

	res.render(baseUrl, {}, function(err, html) {
		if(err) {
			console.log(baseUrl);
			console.log("View not exist");
			res.render('index'); // File doesn't exist
		} else {
			console.log(baseUrl);
			res.render(baseUrl); 
		}
	});
});

module.exports = router;
