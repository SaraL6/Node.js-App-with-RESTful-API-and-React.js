import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import JsonArtists from "./backupJson/artists.json";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [backupArtists, setBackupArtists] = useState([]);
  let json = JsonArtists;
  let headers = [];

  headers = [
    { label: "name", key: "name" },
    { label: "mbid", key: "mbid" },
    { label: "url", key: "url" },
    { label: "image_small", key: "image_small" },
  ];

  let datax = [];
  if (backendData.length > 1) {
    backendData.forEach((item) => {
      datax.push({
        name: item.name,
        mbid: item.mbid,
        url: item.url,
        image_small: item.image[0]["#text"],
      });
    });
  } else if (backendData.length === 0) {
    backupArtists.forEach((item) => {
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
  useEffect(() => {
    fetch("api/backup").then((response) =>
      response.json().then((data) => {
        console.log("data", data);
      })
    );
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    fetch(`/api/${searchValue}`).then((response) =>
      response.json().then((data) => {
        console.log(data);
        let artist = data.data.artistmatches.artist;
        if (artist.length === 0) {
          console.log("No results found");
        }
        setBackendData(artist);
      })
    );
  };

  return (
    <div>
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
      <CSVLink data={datax} headers={headers}>
        Download me
      </CSVLink>

      <div>
        {backendData !== "undefined" ? (
          backendData.map((artist, i) => <p key={i}>{artist?.name}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {backupArtists !== "undefined" ? (
          backupArtists.map((artist, i) => <p key={i}>{artist?.name}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
