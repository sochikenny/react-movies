import React from 'react';
import SearchMovies from "./SearchMovies";
import "./styles.css";

class App extends React.Component {
    render() {
      return (
        <div className="container">
        <h1 className="title">React Movie App</h1>
        <SearchMovies />
        </div>
      );
    }
  }

  export default App; 