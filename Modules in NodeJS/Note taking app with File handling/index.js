// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');




const Solution = () => {
  // Write your code here
  //creating and Writing a file.
  try{
    fs.writeFileSync('notes.txt', 'The world has enough coders')
  }catch(err){
    console.log(err);
  }
  console.log(fs.readFileSync('notes.txt',{encoding : 'utf-8'}));
  //Append another data into same file
  fs.appendFileSync('notes.txt', ' BE A CODING NINJA!')
  const content = fs.readFileSync('notes.txt',{encoding : 'utf-8'});
  console.log(content);

};

Solution();
module.exports = Solution;
