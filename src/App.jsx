import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <div>
        <h1>Movies comReact1 🎬</h1>
      </div>
      {/* PROPS: propiedades del componente PADRE a los componentes HIJOS */}
      <MovieList cant={3} mensaje="Esto es una prop" />
    </>
  );
}

export default App;
