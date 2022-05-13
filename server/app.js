const express = require("express");
const app = express();
const axios = require("axios");





const fetchArtists = async (searchValue) => {
  try {
    let result;
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=30d82bc1657cfc2bb5cf2b2af64aac2c&format=json`
      )
      .then((response) => {
        result = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  } catch (error) {
    console.error(error);
  }
};



app.get("/api/:searchValue", async (req, res, next) => {
  try {
    const { page } = req.query;

    const data = await fetchArtists(req.params.searchValue);
    console.log("artist", req.params.searchValue);
    return res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = app;
