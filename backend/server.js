//why to use dotenv package?
// to allow db.js to read mongodb_url from env file
require("dotenv").config();
const connectDB = require("./src/db/db");

// server usage logic

const app = require("./src/app");

//connect server to db
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
