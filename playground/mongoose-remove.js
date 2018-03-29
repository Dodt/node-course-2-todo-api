const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


//remove all todos

Todo.remove({}).then((result)=>{
    console.log(result)
});

/*
Todo.findByIdAndRemove( '5abd48240849b37f04adebb3').then((todo)=>{
    console.log(todo);
});*/