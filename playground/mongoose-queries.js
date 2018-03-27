const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user');
/*
let id = '5ab7a1d2594efb3789d6f3ad';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
*/
/*
Todo.find({
    _id: id
}).then((todos)=>{
    console.log(`Todos: ${todos}`);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log(`Todo: ${todo}`);
});
*/

/*
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('ID not found');
    };
    console.log(`Todo By Id: ${todo}`);
}).catch((e) => console.log(e)); 
*/

let id ='5ab6c5d234f5cc559f3320c8';

if(!ObjectID.isValid(id)){
    console.log('ID NOT VALID');
};

User.findById(id).then((user)=>{
    if(!user){
        return console.log('ID NOT FOUND');
    };
    console.log(`User By ID:\n ${JSON.stringify(user,undefined,2)}`);
}).catch((e)=> console.log(e)) ;