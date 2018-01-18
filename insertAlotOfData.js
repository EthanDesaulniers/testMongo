//inserts one data entry into database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db)
{
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var myDataObj = [
	{_id:"1", game: "Doki Doki Literature Club", genre: "Horror"},
	{_id:"2",game: "Train Simulator 2018", genre: "Simulation"},
	{_id:"3",game: "Rocket League", genre: "Sports"},
	{_id:"4",game: "OverScotch", genre: "FPS"},
	{_id:"5",game: "Paladins", genre: "Not OverWatch"}
	];
	
	dbObj.collection("games").insertMany(myDataObj, function(err, res)
	{
		if(err) throw err;
		console.log("Number of Games Inserted " + res.insertedCount);
		db.close();
	});
});