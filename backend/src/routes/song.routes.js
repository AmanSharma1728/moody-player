const express = require("express");

const songModel = require("../models/song.model");
//to read formdata type posted data inside req.body then we need to use multer
const multer = require("multer");
const uploadFile = require("../services/song.service");

//we need to tell multer where to store our files
// so basically we need to store them in the ram temporarily here
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// POST /songs => songSchema objects to mongoDB
//we use upload as a middleware and argument to single must match the key in the formdata-request-posted-object i.e audio
router.post("/songs", upload.single("audio"), async (req, res) => {
  //req.body will only show text part of posted data
  // console.log(req.body); // to be able to read this formdata request body we need multer

  const { title, artist, mood } = req.body;

  // to view our file on console we need to use req.file instead of req.body
  // console.log(req.file);

  const fileData = await uploadFile(req.file);
  const { url: audio } = fileData;
  // console.log(fileData);

  //create document in collection
  const song = await songModel.create({ title, artist, audio, mood });

  res.status(201).json({ message: "song added successfully", song: song });
});

router.get("/songs", async (req, res) => {
  const { mood } = req.query; //mood will be given in query and not params or body
  const songs = await songModel.find({ mood }); //find all songs with the given mood
  res.status(200).json({
    message: "song fetched successfully",
    songs,
  });
});

module.exports = router;
