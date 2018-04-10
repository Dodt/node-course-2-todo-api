const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(100,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    });
});

let hashedPassword = '$2a$10$5Osef8nZng8hndhM98MHhuy6fMK7p65yF6M3sGFUwlhYnPrC69t3a';
bcrypt.compare('123!',hashedPassword,(err,res)=>{
    console.log(res);
})



/*
let data = {
    id: 10
}


let token = jwt.sign(data,'123abc');

console.log(token);

let decoded = jwt.verify(token ,'123abc');

console.log(`decoded:`, decoded);
/*
let message = 'i am user number 3';
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);


let data = {
    id: 4
};

let token = {
    data,
    hash: SHA256(JSON.stringify(data)+'somesecret').toString()
};

token.data.id = 5;

let resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

console.log(`resultHash: ${resultHash}`);
console.log(`TokenHash: ${token.hash}`);

if(token.hash === resultHash){
    console.log('Data was not changed');
}else{
    console.log('Data was changed. Do not trust!');
}*/