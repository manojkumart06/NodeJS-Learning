// Do not change the pre-written code.
// Make the necessary imports here.
//const fs = require('fs');
import fs from 'fs';


export const writeBlog = (filePath, name) => {
// Write your code here.
    return fs.appendFileSync(filePath, name);
}

export const publishBlog = (filePath) => {
// Write your code here.
    return fs.readFileSync(filePath, 'utf-8');
}


