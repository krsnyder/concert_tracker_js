import express from "express";
import bands from "./data/reader.js";

const app = express();

app.listen(3000, listening);

function listening() {
  console.log("Listening..........");
}

app.use(express.static("websites"));

app.get("/shows/:band", getShows);

function getShows(req, res) {
  var search_band = req.params.band;
  if (search_band in bands) {
    res.send(`You've seen ${search_band} ${bands[search_band]} times!`);
  } else {
    res.send(`You've never seen ${search_band}!`);
  }
}
