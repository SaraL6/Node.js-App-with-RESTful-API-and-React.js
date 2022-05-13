const express = require("express");
const router = express.Router();
const axios = require("axios");
const app= express()

const fetchArtists = async (page) => {
  try {
    let result;
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=30d82bc1657cfc2bb5cf2b2af64aac2c&format=json`
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

router.get("/", async (req, res, next) => {
  try {
    const { page } = req.query;
    const data = await fetchArtists(page);
    console.log("data", data);
    return res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
