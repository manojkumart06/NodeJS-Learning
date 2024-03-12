// Import required module
const readline = require('readline');

// Configure interface
const qInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define max function to find the maximum of two numbers
const max = (num1, num2) => {
  return Math.max(Number(num1), Number(num2));
};

const Solution = () => {
  // Write your code here
  qInterface.question('Enter the first number: ', (num1) => {
    qInterface.question('Enter the second number: ', (num2) => {
      const maximum = max(num1, num2);
      console.log(`The maximum of the two numbers is: ${maximum}`);
    });
  });
};

// Call the Solution function to start the program
Solution();

module.exports = Solution;
