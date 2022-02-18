import React from "react";

const Artist = (props) => {
  let artistType = null;
  const artists =
    props.artist &&
    props.artist.map((artist, idx) => <li key={idx}>{artist}</li>);

  switch (props.category) {
    case "friday_party":
      artistType = "DJs:";
      break;
    case "saturday_concert":
      artistType = "Bands:";
      break;
    case "learning_session":
      artistType = "Host:";
      break;

    // no default
  }

  return (
    <ul>
      <span>{artistType}</span>
      {artists}
    </ul>
  );
};

export default Artist;
