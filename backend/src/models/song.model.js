const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String, //url of song stored on imagekit
  mood: String,
});

const song = mongoose.model("song", songSchema);

module.exports = song;
