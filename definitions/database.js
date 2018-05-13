var MC = require('mongodb').MongoClient;
var DB = null;

F.wait('database');

MC.connect(CONFIG('mongodb'), function (err, db) {
    if (err) throw err;
    DB = db.db('totaljsapi');
    F.wait('database');
    
});

F.database = function (collection) {
    return collection ? DB.collection(collection) : DB;
};