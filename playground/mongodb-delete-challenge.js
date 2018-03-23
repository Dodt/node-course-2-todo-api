//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    //delete many
/*
    db.collection('Users').deleteMany({name: 'John Doe'}).then((result)=>{
        console.log(result);
    });
*/


    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ab4042c687edc82c51503d2')}).then((result)=>{
        console.log(result);
    });
});