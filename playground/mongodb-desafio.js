//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');


    db.collection('Users').find({ name: 'Joh Doe' }).count().then((count) => {
        console.log(`Users:${count}`);
    }, (err) => {
        console.log('Unable to fetch the data');
    });

    db.collection('Users').find({ name: 'John Doe' }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));    
    },(err)=>{
        console.log('Unable to fetch the data');
    });

});