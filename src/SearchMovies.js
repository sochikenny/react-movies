import React, {useState} from "react";
import "./styles.css";
import MovieCard from "./MovieCard"

export default function SearchMovies() {
  //states - *input query*, *movies display*

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([ ]);

  // Creating an asynchronous function that takes the the data from the API and uses the 'setMovies' state to store the information
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d5b8c2c9339e0702b7609cd68c65fccc&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

 
  
  //returns a form with a label, an input, a button as well as the MovieCard component. 
  //the input has a "value" of query which is part of the state and an "onChange" which implements the setQuery to change the state
  //the form has an onSubmit which uses the already defined searchMovies function that has access to all the data as well as the change 
  //of the state with the state (setMovies)
  return (
   <> 
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" name="query"
        placeholder="Search Movies" value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">Search</button>
    </form>
    <div className="card-list">
      {movies.filter(movie => movie.poster_path).map(movie => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
    </>
  
  )
}
