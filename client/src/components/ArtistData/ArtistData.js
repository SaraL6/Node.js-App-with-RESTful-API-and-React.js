import React from "react";
import CardList from "../CardList";
import useArtistData from "./useArtistData";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CSVLink } from "react-csv";
import "../../../src/App.css";

export const ArtistData = () => {
  const {
    handleSearch,
    handleChange,
    backendData,
    backupArtistsData,
    csvData,
    headers,
  } = useArtistData();

  return (
    <div>
      <div>
        {" "}
        <header className="container-fluid">
          <div className="container text-center" id="searchBox">
            <h1>Search for an artist</h1>
            <div className="form col-xs-12">
              <form onSubmit={handleSearch}>
                <input
                  name="searchValue"
                  className="col-xs-11"
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
            {backupArtistsData &&
            backendData.length === 0 &&
            backupArtistsData.length > 0 ? (
              <h2 className="backupText">
                Sorry, no matches for your artist. Here's our top Artists:
              </h2>
            ) : null}
            <CardList
              backendData={backendData}
              backupArtists={backupArtistsData}
            ></CardList>
          </div>
        </header>
      </div>
    </div>
  );
};
