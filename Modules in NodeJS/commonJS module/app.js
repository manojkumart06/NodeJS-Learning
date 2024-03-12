// Note:  Please do not change the pre-written code

// import the required module here
const mathmodule = require('./math');

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log(mathmodule.sum(nums));
    console.log(mathmodule.mean(nums));

};
Solution();
module.exports = Solution;
