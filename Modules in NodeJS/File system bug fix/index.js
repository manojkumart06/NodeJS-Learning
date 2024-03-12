const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", "new data", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data updated successfully");

      // Read the updated data after the append operation is completed
      fs.readFile("note.txt", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
};

Solution();
module.exports = Solution;
