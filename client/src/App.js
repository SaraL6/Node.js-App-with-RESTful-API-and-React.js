import React, { useEffect, useState } from "react";
import "./App.css";
import { CSVLink } from "react-csv";
import JsonData from "./backupJson/artists.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
    { label: "image", key: "image" },
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
                  setBackupArtistsData((oldArray) => [...oldArray, artist]);
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
  const handleSearch = (event) => {
    event.preventDefault();
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
          image: item?.image[3]["#text"],
        });
      });
    } else if (backendData?.length === 0) {
      backupArtistsData?.forEach((item) => {
        item.forEach((artist) => {
          datax.push({
            name: artist?.name,
            mbid: artist?.mbid,
            url: artist?.url,
            image_small: artist?.image[0]["#text"],
            image: artist?.image[3]["#text"],
          });
        });
      });
    }
    setCsvData(datax);
  }, [backendData, backupArtistsData]);

  return (
    <div>
      <div>
        {" "}
        <header className="container-fluid">
          <div className="container text-center" id="searchBox">
            <h1>Search for an artist</h1>
            <div className="form col-xs-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(e);
                }}
              >
                <input
                  name="searchValue"
                  className="col-xs-9"
                  id="searchBar"
                  type="text"
                  onChange={handleChange}
                  placeholder="Search Artists"
                />
                <button className="SearchBar-submit" type="submit">
                  <span
                    className="glyphicon glyphicon-search col-xs-1"
                    data-toggle="tooltip"
                    title="Search"
                  ></span>
                </button>
              </form>
            </div>
            <div className="CSV">
              <button type="button" className="CSV_dll_btn">
                {" "}
                <CSVLink
                  data={csvData}
                  headers={headers}
                  className="text-decoration-none"
                >
                  <h2 className="dll_text"> Download CSV</h2>
                </CSVLink>
              </button>
            </div>

            <CardList
              backendData={backendData}
              backupArtists={backupArtistsData}
            ></CardList>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
