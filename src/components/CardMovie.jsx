import React from "react";

function CardMovie({ pelicula }) {
  return (
    <div>
      <div className="container-img">
        <img
          className="movie-grid-image "
          src={pelicula.image}
          alt={pelicula.title}
        />
      </div>
    </div>
  );
}

export default CardMovie;
