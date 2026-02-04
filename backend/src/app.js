// to use the api defined in song.routes
const songRoutes = require("./routes/song.routes");
const cors = require("cors");

//server creation logic
const express = require("express");
const app = express();

//using middleware
app.use(express.json()); // to read posted data which is in json format
// but if we need to send files also with text then we use formdata format to post it
// in order to read formdata type posted data we need a package called multer
app.use("/", songRoutes);
app.use(cors);

module.exports = app;
