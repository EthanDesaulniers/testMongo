//Update collection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db)
{
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryData = {genre:"Not OverWatch"};
	var newData = {genre:"FPS Moba"};
	var update = {$set:newData};
	
	dbObj.collection("games").updateOne(queryData, update, function(err, res)
	{
		if(err) throw err;
		console.log("document updated");
		db.close();
	});
});