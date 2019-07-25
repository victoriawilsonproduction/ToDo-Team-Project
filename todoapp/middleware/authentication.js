module.exports = function(request, response, next){
	if(request.path === '/login' || request.path === '/'){
		if(request.session.authentication){
			response.locals.currentUser = request.session.authentication
		}
		return next(); 
	}

	var authentication = request.session.authentication || {};
	if(!authentication.username || !authentication.password) {
		return response.redirect('/login')
	};

	console.log(authentication);
	response.locals.currentUser = authentication;

	next();
}