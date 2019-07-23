var express = require('express');
var layout = require('express-layout');
var app = express();
var router = express.Router();

/*home screen*/
router.get('/', function(req, res, next){
	res.render('index',{ title: 'Finito', header: 'Welcome to Finito!'});
});

/*completed tasks, pulls data after user marks item as completed*/
router.get('completed', function(req, res, next){
	res.send(req.cookies.completed);
	res.render('completed');
});


/*deleted tasks*/
router.get('/deleted', function (req, res, next){
	res.send(req.cookie.completed);
	res.render('deleted');
});

module.exports = router;
