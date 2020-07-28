import React from "react";
import SearchMovies from "./SearchMovies";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie App</h1>
      <SearchMovies />
    </div>
  );
};

export default App;
