
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');
/*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ab5289dc873e814db50807a')
    },{
        $set:{
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ab3fef2687edc82c51502e5')
    },{
        $set:{
            name: 'John Doe'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

});