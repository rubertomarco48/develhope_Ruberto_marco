const crypto = require("crypto") 
const length = 16;
const randomId = crypto.randomBytes(length).toString('hex');
console.log(randomId);