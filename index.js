// const express = require("express");

// const app = express();
// const PORT = 8000;

// app.get("/", (req, res) => {
//   try {
//     res.send("Hello from server");
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(PORT, () => {
//   console.log("Server is running on PORT: 8000-- http://localhost:8000");
// });

const { error } = require("console");
const fs = require("fs");
const path = require("path");

const generateCurrentDateTime = () => {
  const now = new Date();
  return now.toString();
};

const filePath = path.join("./File System", "Current Date-Time.txt");

const currentDateTime = generateCurrentDateTime();

fs.writeFile(filePath, currentDateTime, (error) => {
  if (error) {
    console.error("Error writing to file:", error);
  } else {
    console.log("File created and data written successfully!");
    console.log("Current Date and Time:", currentDateTime);
  }
});
