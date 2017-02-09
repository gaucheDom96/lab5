var data = require("../data.json");

exports.addFriend = function(req, res) {    
	//console log 
	console.log("addFriend called");
	//take you back to index route 
	var name = req.query.name;
	var description = req.query.description; 

	var newFriend = {
		name: name, 
		description: description, 
		imageURL: "http://lorempixel.com/400/400/people"

	}
	
	data.friends.push(newFriend);


	res.redirect('/');
 }

