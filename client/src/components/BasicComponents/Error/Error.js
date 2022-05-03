import React from "react";

const Error = ({ top = 2 }) => {
  return (
    <div className="error" style={{ paddingTop: `${top}rem` }}>
      Oooops. There seems to be a problem with displaying events. Please try
      again later.
    </div>
  );
};

export default Error;
