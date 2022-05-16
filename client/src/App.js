import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import JsonData from "./backupJson/artists.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CardList from "./components/CardList";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [backupArtists, setBackupArtists] = useState([]);
  const [backupArtistsData, setBackupArtistsData] = useState([]);
  const [csvData, setCsvData] = useState([]);
  let headers = [];
  let JsonArtists = JsonData && JsonData?.result;

  headers = [
    { label: "name", key: "name" },
    { label: "mbid", key: "mbid" },
    { label: "url", key: "url" },
    { label: "image_small", key: "image_small" },
  ];
  let datax = [];
  const fetchBackupArtists = () => {
    fetch("api/backup", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response.json().then(() => {
          JsonArtists?.forEach((artist) => {
            fetch(`/api/${artist}`)
              .then((response) =>
                response.json().then((data) => {
                  let artist = data?.data?.artistmatches?.artist;
                  setBackupArtistsData((backupArtists) => [
                    ...backupArtists,
                    artist,
                  ]);
                })
              )
              .catch((error) => {
                console.error(error);
              });
          });
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    fetch(`/api/${searchValue}`)
      .then((response) =>
        response.json().then((data) => {
          let artist = data?.data?.artistmatches?.artist;
          if (artist.length === 0) {
            console.log("No results found");
            fetchBackupArtists();
            setBackupArtists(JsonArtists);
          }
          setBackendData(artist);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (backendData?.length > 1) {
      backendData?.forEach((item) => {
        datax.push({
          name: item?.name,
          mbid: item?.mbid,
          url: item?.url,
          image_small: item?.image[0]["#text"],
        });
      });
    } else if (backendData?.length === 0) {
      backupArtistsData?.forEach((item) => {
        item.forEach((artist) => {
          datax.push({
            name: artist?.name,
            mbid: artist?.mbid,
            url: artist?.url,
            image_small: artist.image[0]["#text"],
          });
        });
      });
    }
    setCsvData(datax);
  }, [backendData]);

  return (
    <div>
      <Home></Home>
      <div>
        <input
          name="searchValue"
          onChange={handleChange}
          placeholder="Search Artists"
        />
      </div>
      <button className="SearchBar-submit" onClick={handleSearch}>
        Let's Go
      </button>
      <CSVLink data={csvData} headers={headers}>
        Download me
      </CSVLink>

      <div>
        {backendData !== "undefined" ? (
          backendData?.map((artist, i) => <p key={i}>{artist?.name}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {backupArtists !== "undefined" ? (
          backupArtists?.map((artist, i) => <p key={i}>{artist}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
