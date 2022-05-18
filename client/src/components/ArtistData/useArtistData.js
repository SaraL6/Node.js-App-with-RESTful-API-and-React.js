import React, { useEffect, useState } from "react";
import JsonData from "../../backupJson/artists.json";



export default function useArtistData(params) {
    const [backendData, setBackendData] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [backupArtists, setBackupArtists] = useState([]);
    const [backupArtistsData, setBackupArtistsData] = useState([]);
    const [csvData, setCsvData] = useState([]);
    let headers = [];
    let JsonArtists = JsonData && JsonData?.result;
     //maje json data and jsonartists camel case
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
  return {handleSearch,handleChange,backendData,backupArtistsData,csvData,headers};
}
