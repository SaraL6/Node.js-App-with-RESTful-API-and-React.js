import React from "react";
import Card from "./Card";

function CardList({backupArtists, backendData}) {

  return (
    <div className="result">
      <Card backendData={backendData} backupArtists={backupArtists}></Card>
    </div>
  );
}

export default CardList;
