// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method === 'POST'){
    let body = '';
    req.on('data', (chunk) => {
      body += chunk//.toString();
    });

    req.on("end", () => {
      //console.log(body);
      fs.appendFileSync('data.txt', body);
      console.log(fs.readFileSync('data.txt', 'utf8'));
      res.end('Data is received');
    })
  }else{
    res.end('Non-post request');
  }
});

export default server;
