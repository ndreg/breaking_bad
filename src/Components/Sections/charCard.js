import React from "react";

const CharCard = ({ name, portrayed, status, img }) => {
  return (
    <article className="charCard">
      <div className="char-image">
        <img src={img} alt={name} />
      </div>
      <div className="char-content">
        <h2>{name}</h2>
        <p>{portrayed}</p>
        <p>{status}</p>
      </div>
    </article>
  );
};

export default CharCard;
