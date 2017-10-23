var express = require('express');
var router = express.Router();

/* GET admin post page. */
router.get('/admin', function(req, res, next) {
	res.render('admin.ejs');
});


/* GET home page. */
router.get('/', function(req, res, next) {
	var baseUrl = req.baseUrl;
	while(baseUrl.charAt(0) === '/')
	{
		baseUrl = baseUrl.substr(1);
	}

	res.render(baseUrl, {}, function(err, html) {
		if(err) {
			res.render('index'); // File doesn't exist
		} else {
			res.render(baseUrl); 
		}
	});
});

module.exports = router;
