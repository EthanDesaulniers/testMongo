var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testmongo";

MongoClient.connect(url, function(err, client)
{
	console.log('connected to mongodb');
	const db = client.db('testgamedb');
	var myData = {game:"Over Scotch", company:"Fireball"};
	
	db.collection("games").insertOne(myData, function(err, res)
	{
		if(err) throw err;
		console.log("Game entered in record");
	});
	
	db.collection("games").find({}).toArray(function(err, result)
	{
		if(err) throw err;
		console.log(result);
	});
	
	db.collection("games").deleteMany(function(err, delOK)
	{
		if(err) throw err;
		if(delOK)console.log("Games have been deleted");
	});
	
	/*
	db.collection("games").drop(function(err, delOK)
	{
		if(err) throw err;
		if(delOK)console.log("Games have been deleted");
	});
	*/
	client.close();
});