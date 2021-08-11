import React from "react";
import Banner from "../Sections/Banner";
import CharGrid from "../Sections/charGrid";

const Characters = () => {
  return (
    <div>
      <Banner
        title={"Characters"}
        description={"Fetched from Breaking Bad API "}
      />
      <CharGrid />
    </div>
  );
};

export default Characters;
