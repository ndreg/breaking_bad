import React from "react";
import Banner from "../Sections/Banner";
import Info from "../Sections/Info";

const Home = () => {
  return (
    <div>
      <Banner
        title={"Breaking Bad"}
        description={"Everything about Breaking Bad's characters"}
      />
      <Info />
    </div>
  );
};

export default Home;
