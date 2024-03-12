// Please don't change the pre-written code
// Import the necessary modules here
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
})

server.listen(8000,() => {
    console.log('Server running on port 8000!')
})
// Write your code here

module.exports = server;
