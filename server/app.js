const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const config = require("dotenv").config();
const API_Key = process.env.LASTFM_API_KEY;
const backupfetchArtists = async () => {
  try {
    let result;
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_Key}&format=json`
      )
      .then((response) => {
        artists = response.data.artists.artist.map((artist) => {
          return artist.name;
        });
        result = artists.slice(0, 5);
        const sampleObject = { result };

        fs.writeFile(
          "../client/src/backupJson/artists.json",
          JSON.stringify(sampleObject, null, 4),
          (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("File has been created");
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  } catch (error) {
    console.error(error);
  }
};

const fetchArtists = async (searchValue) => {
  try {
    let result;
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=${API_Key}&format=json`
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

app.get("/api/backup", async (req, res, next) => {
  try {
    const { page } = req.query;

    const data = await backupfetchArtists();
    return res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

app.get("/api/:searchValue", async (req, res, next) => {
  try {
    const { page } = req.query;

    const data = await fetchArtists(req.params.searchValue);
    return res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = app;
