import React from "react";
import movieList from "../data/movies-1.json";
import CardMovie from "./CardMovie";

function MovieList(props) {
  //   console.log(movieList);

  //! DESESTRUCTURACION
  const { cant, mensaje } = props;
  console.log(mensaje);

  const nuevoArreglo = movieList.filter((movie) => {
    return movie.rank <= cant;
  });

  return (
    <>
      <div>
        <h3>Las {cant} mejores peliculas! 🤩</h3>
        <div className="poster">
          {nuevoArreglo.map((movie) => (
            // <div className="container-img" key={movie.id}>
            //   <img
            //     className="movie-grid-image "
            //     src={movie.image}
            //     alt={movie.title}
            //   />
            // </div>
            <CardMovie pelicula={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
