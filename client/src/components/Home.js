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
              className="col-xs-9"
              id="searchBar"
              type="text"
              placeholder="search"
            />
            <span
              className="glyphicon glyphicon-search col-xs-1"
              data-toggle="tooltip"
              title="Search"
            ></span>
            <span className="glyphicon bar col-xs-1" id="submit">
              <b>|</b>
            </span>
            <a
              href="https://en.wikipedia.org/wiki/Special:Random"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="glyphicon glyphicon-random col-xs-1"
                data-toggle="tooltip"
                title="Random topic"
              ></span>
            </a>
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
