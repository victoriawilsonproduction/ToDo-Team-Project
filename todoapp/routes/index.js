var express = require('express');
var layout = require('express-layout');
var app = express();
var router = express.Router();
var crypto = require('crypto');

/*home screen*/
router.get('/', function(req, res, next){
	res.render('login', {error: null});
});


router.get('/login', function(req, res, next){
	res.render('login', {error: null});
});

router.post('/login', function(req, res, next){
	if(req.body.username && req.body.password){
		var data = req.body.password;
		var hash = crypto.createHash('sha256').update(data).digest('hex');

		console.log('hash', hash);

		req.session.authentication = {
			username: req.body.username,
			password: hash
		};

		res.redirect('/');
	}else{
		res.render('login', {error: 'Invalid username or password'})
	}
});

router.get('/logout', function(req, res, next){
	req.session.destroy(function(){
		res.redirect('/');
	});

})

module.exports = router;

