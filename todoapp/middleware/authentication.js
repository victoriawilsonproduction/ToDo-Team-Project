module.exports = function(request, response, next){
	if(request.path === '/login' || request.path === '/'){
		if(request.session.authentication && request.path !== '/login'){
			response.locals.currentUser = request.session.authentication
		} else if(!request.session.authentication && request.path !== '/login') {
			return response.redirect('/login');
		}
		return next(); 
	}

	var authentication = request.session.authentication || {};
	if(!authentication.username || !authentication.password) {
		return response.redirect('/login');
	};

	console.log(authentication);
	response.locals.currentUser = authentication;

	next();
}