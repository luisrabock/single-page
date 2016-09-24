
/*Pagina inicial */
module.exports.homelist = function(req,res) {
	res.render('locations-list', {title: 'Home'});
}

/*Pagina de informações */
module.exports.locationInfo = function(req,res) {
	res.render('location-info', {title: 'Location Info'});
}

/*Adicione um feedback */
module.exports.addReview = function(req,res) {
	res.render('index', {title: 'add Review'});
}