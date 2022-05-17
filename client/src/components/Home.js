import React, { useEffect } from "react";
import $ from "jquery";
import "./Home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <header className="container-fluid">
        <div className="container text-center" id="searchBox">
          <h1>Search for an artist</h1>
          <div className="form col-xs-12">
            <input
              name="searchValue"
              className="col-xs-9"
              id="searchBar"
              type="text"
              placeholder="Search Artists"
            />
            <span
              className="glyphicon glyphicon-search col-xs-1"
              data-toggle="tooltip"
              title="Search"
            ></span>
          </div>
        </div>
      </header>
      <div id="mainBody" className="container text-center">
        <ul id="results"></ul>
      </div>
      <footer className="text-center"></footer>
    </div>
  );
}

export default Home;
