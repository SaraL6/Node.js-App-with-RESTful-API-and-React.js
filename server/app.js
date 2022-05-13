const express = require("express");
const app = express();
const axios = require("axios");
const artistRoutes = require("./api/routes/artists");
app.use("/artists", artistRoutes);
// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree"] });
// });

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

app.get("/api", async (req, res, next) => {
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

module.exports = app;
