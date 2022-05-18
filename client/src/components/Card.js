import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function ImgMediaCard({ backendData, backupArtists }) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center">
      {backendData !== "undefined" ? (
        backendData &&
        backendData?.map((artist, i) => (
          <Card
            sx={{ maxHeight: 350, height: 350, margin: 2, width: 350 }}
            key={i}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="220"
              image={
                artist?.image[4]["#text"].length === 0
                  ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                  : artist?.image[4]["#text"]
              }
            />
            <CardContent>
              <h2 variant="h2" component="div">
                <a
                  href={artist?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-black"
                >
                  {artist?.name}
                </a>
              </h2>

              <h5 variant="body2" color="text.secondary">
                {artist?.mbid}
              </h5>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}

      {backupArtists !== "undefined" ? (
        backupArtists?.map((artists) => {
          return artists.map((artist, i) => {
            return (
              <div key={i}>
                <Card
                  sx={{ maxHeight: 350, height: 350, margin: 2, width: 350 }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="220"
                    image={
                      artist?.image[4]["#text"].length === 0
                        ? "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
                        : artist?.image[4]["#text"]
                    }
                  />
                  <CardContent>
                    <h2 variant="h2" component="div">
                      <a
                        href={artist?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none text-black"
                      >
                        {artist?.name}
                      </a>
                    </h2>

                    <h5 variant="body2" color="text.secondary">
                      {artist?.url}
                    </h5>
                  </CardContent>
                </Card>
              </div>
            );
          });
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ImgMediaCard;
