import React from "react";
import CharCard from "./charCard";
import useFetch from "../Hooks/useFetch";

const CharGrid = () => {
  const data = useFetch();
  return (
    <main className="char-grid">
      <section className="char-grid-content wrapper">
        {data &&
          data.map(({ char_id, name, portrayed, img, status }) => {
            return (
              <CharCard
                key={char_id}
                name={name}
                status={status}
                portrayed={portrayed}
                img={img}
              />
            );
          })}
      </section>
    </main>
  );
};

export default CharGrid;
